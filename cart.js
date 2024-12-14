// Funzione per caricare e mostrare gli item nel carrello
function loadCart() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartContainer = document.getElementById("cart-items");
    const totalPriceElement = document.getElementById("total-price"); // Riferimento per il prezzo totale

    // Pulisci il contenitore
    cartContainer.innerHTML = "";

    // Verifica se il carrello è vuoto
    if (cart.length === 0) {
        let totalPrice = 0; 
        totalPriceElement.textContent = `Totale: €${totalPrice.toFixed(2)}`;
        cartContainer.innerHTML = "<div class='alert'><p>Il carrello è vuoto.</p><div>";
    } else {
        let totalPrice = 0; // Variabile per il prezzo totale

        // Per ogni articolo nel carrello, creiamo un elemento HTML
        cart.forEach((item, index) => {
            const itemDiv = document.createElement("div");
            itemDiv.className = "articolo";

            // Crea la sezione immagine con il background dinamico
            const imaArt = document.createElement("div");
            imaArt.className = "imaArt";
            imaArt.style.backgroundImage = `url(${item.imgUrl})`;  // Impostiamo l'immagine dinamicamente

            // Crea la sezione con il nome e il prezzo dell'articolo
            const infoArt = document.createElement("div");
            infoArt.className = "infoArt";

            const name = document.createElement("p");
            name.className = "name";
            name.textContent = item.title;

            const price = document.createElement("p");
            price.className = "price";
            price.textContent = `€${item.price}`;

            totalPrice += parseFloat(item.price); // Aggiungi il prezzo dell'articolo al totale

            // Pulsante per rimuovere l'articolo dal carrello
            const delButton = document.createElement("button");
            delButton.className = "DelArt";
            delButton.textContent = "Elimina";
            delButton.addEventListener("click", () => {
                removeItemFromCart(index);  // Rimuove l'articolo dal carrello
            });

            // Appendiamo i vari elementi
            infoArt.appendChild(name);
            infoArt.appendChild(price);
            itemDiv.appendChild(imaArt);
            itemDiv.appendChild(infoArt);
            itemDiv.appendChild(delButton);

            // Aggiungiamo l'articolo al contenitore del carrello
            cartContainer.appendChild(itemDiv);
        });

        // Aggiorna il totale nel carrello
        totalPriceElement.textContent = `Totale: €${totalPrice.toFixed(2)}`;
    }
}

// Funzione per rimuovere un item dal carrello
function removeItemFromCart(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1);  // Rimuove l'articolo alla posizione 'index'
    localStorage.setItem("cart", JSON.stringify(cart));  // Salva nuovamente l'array modificato nel localStorage
    loadCart();  // Ricarica il carrello aggiornato
}

function deleteCar(){
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart = [];
    localStorage.setItem("cart", JSON.stringify(cart)); 
    loadCart(); 
}

// Caricare il carrello all'avvio della pagina
loadCart();

// Aggiungere un comportamento al pulsante "Procedi con l'acquisto" (per ora non fa nulla)
document.getElementById("checkout-button").addEventListener("click", () => {
    alert("Questa funzionalità è solo un esempio.");
});
