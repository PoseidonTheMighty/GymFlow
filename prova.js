const typingForm = document.querySelector(".typing-form");
const chatContainer = document.querySelector(".chat-list");
const suggestions = document.querySelectorAll(".suggestion");
const toggleThemeButton = document.querySelector("#theme-toggle-button");
const deleteChatButton = document.querySelector("#delete-chat-button");

// Stato
let userMessage = null;
let isResponseGenerating = false;
let chatHistory = [];
let workoutPlanMode = false; // Modalità per la scheda di allenamento

// API Configuration
const API_KEY = "AIzaSyDGP_RtqA7i5lvdyqZ14WTaFGN3RJbLHsk"; // Inserisci la tua chiave API
const API_URL = `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-pro:generateContent?key=${API_KEY}`;

// Funzione per creare un elemento di messaggio
const createMessageElement = (content, ...classes) => {
  const div = document.createElement("div");
  div.classList.add("message", ...classes);
  div.innerHTML = content;
  return div;
};

// Mostra un pop-up iniziale per la scelta della scheda di allenamento
const showWorkoutPopup = () => {
  const wantsWorkoutPlan = confirm("Vuoi creare una scheda di allenamento con l'AI?");
  if (wantsWorkoutPlan) {
    workoutPlanMode = true;
    collectWorkoutDetails();
  }
};

// Raccogli dettagli per la scheda di allenamento
const collectWorkoutDetails = async () => {
  const days = prompt("Per quanti giorni deve essere la scheda di allenamento?");
  const level = prompt("Qual è il tuo livello di esperienza (principiante, intermedio, avanzato)?");
  const goal = prompt("Qual è il tuo obiettivo (forza, massa muscolare, dimagrimento)?");

  if (days && level && goal) {
    userMessage = `Crea una scheda di allenamento per ${days} giorni, livello ${level}, con obiettivo ${goal}.`;
    handleOutgoingChat();
    workoutPlanMode = false; // Torna alla modalità normale dopo aver creato la scheda
  } else {
    alert("Dati insufficienti per creare una scheda. Torna all'uso normale.");
    workoutPlanMode = false;
  }
};

// Al caricamento della finestra, mostra il pop-up
window.addEventListener("load", () => {
  resetChatData();
  showWorkoutPopup();
});

// Resetta i dati della chat
const resetChatData = () => {
  chatContainer.innerHTML = "";
  chatHistory = [];
  localStorage.removeItem("saved-chats");
  localStorage.removeItem("chat-history");
  const isLightMode = localStorage.getItem("themeColor") === "light_mode";

  document.body.classList.toggle("light_mode", isLightMode);
  toggleThemeButton.innerText = isLightMode ? "dark_mode" : "light_mode";
};

// Mostra un'animazione di caricamento
const showLoadingAnimation = () => {
  const html = `<div class="message-content">
                  <img class="avatar" src="media/gemini.svg" alt="Gemini avatar">
                  <p class="text"></p>
                  <div class="loading-indicator">
                    <div class="loading-bar"></div>
                    <div class="loading-bar"></div>
                    <div class="loading-bar"></div>
                  </div>
                </div>
                <span onClick="copyMessage(this)" class="icon material-symbols-rounded">content_copy</span>`;
  const incomingMessageDiv = createMessageElement(html, "incoming", "loading");
  chatContainer.appendChild(incomingMessageDiv);
  chatContainer.scrollTo(0, chatContainer.scrollHeight);
  generateAPIResponse(incomingMessageDiv);
};

// Genera una risposta API
const generateAPIResponse = async (incomingMessageDiv) => {
  const textElement = incomingMessageDiv.querySelector(".text");
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: chatHistory.map(({ role, text }) => ({
          role: role,
          parts: [{ text: text }]
        }))
      }),
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error.message);

    const apiResponse = data.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g, '$1');
    chatHistory.push({ role: "assistant", text: apiResponse }); // Add API response to chat history
    localStorage.setItem("chat-history", JSON.stringify(chatHistory)); // Save updated chat history
    showTypingEffect(apiResponse, textElement, incomingMessageDiv); // Show typing effect
  } catch (error) {
    isResponseGenerating = false;
    textElement.innerText = error.message;
    textElement.parentElement.closest(".message").classList.add("error");
  } finally {
    incomingMessageDiv.classList.remove("loading");
  }
};

// Mostra un effetto di digitazione
const showTypingEffect = (text, textElement, incomingMessageDiv) => {
  const words = text.split(' ');
  let currentWordIndex = 0;
  const typingInterval = setInterval(() => {
    textElement.innerText += (currentWordIndex === 0 ? '' : ' ') + words[currentWordIndex++];
    if (currentWordIndex === words.length) {
      clearInterval(typingInterval);
      isResponseGenerating = false;
      localStorage.setItem("saved-chats", chatContainer.innerHTML);
    }
    chatContainer.scrollTo(0, chatContainer.scrollHeight);
  }, 75);
};

// Gestisce l'invio di messaggi
const handleOutgoingChat = () => {
  userMessage = typingForm.querySelector(".typing-input").value.trim() || userMessage;
  if (!userMessage || isResponseGenerating) return;

  isResponseGenerating = true;
  chatHistory.push({ role: "user", text: userMessage });
  localStorage.setItem("chat-history", JSON.stringify(chatHistory));

  const html = `<div class="message-content">
                  <img class="avatar" src="media/user.jpg" alt="User avatar">
                  <p class="text"></p>
                </div>`;
  const outgoingMessageDiv = createMessageElement(html, "outgoing");
  outgoingMessageDiv.querySelector(".text").innerText = userMessage;
  chatContainer.appendChild(outgoingMessageDiv);

  typingForm.reset();
  document.body.classList.add("hide-header");
  chatContainer.scrollTo(0, chatContainer.scrollHeight);
  setTimeout(showLoadingAnimation, 500);
};

// Copia il messaggio
const copyMessage = (copyButton) => {
  const messageText = copyButton.parentElement.querySelector(".text").innerText;
  navigator.clipboard.writeText(messageText);
  copyButton.innerText = "done";
  setTimeout(() => copyButton.innerText = "content_copy", 1000);
};

// Cambia il tema
toggleThemeButton.addEventListener("click", () => {
  const isLightMode = document.body.classList.toggle("light_mode");
  localStorage.setItem("themeColor", isLightMode ? "light_mode" : "dark_mode");
  toggleThemeButton.innerText = isLightMode ? "dark_mode" : "light_mode";
});

// Elimina tutte le chat
deleteChatButton.addEventListener("click", () => {
  if (confirm("Sei sicuro di voler eliminare tutte le chat?")) {
    resetChatData();
  }
});

// Imposta il messaggio e gestisce la chat
suggestions.forEach(suggestion => {
  suggestion.addEventListener("click", () => {
    userMessage = suggestion.querySelector(".text").innerText;
    handleOutgoingChat();
  });
});

// Impedisce il comportamento predefinito del form
typingForm.addEventListener("submit", (e) => {
  e.preventDefault(); 
  handleOutgoingChat();
});