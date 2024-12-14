// Selezionare il contenitore
const container = document.getElementById("container");

// Array degli elementi (20 voci tra reali e placeholder)
const items = [
    {
        title: "Cintura Stachi",
        price: 45.99, 
        imgUrl: "media/Prodotti/Cintura_.jpg" 
    },
    {
        title: "Cittrulina",
        price: 23.50, 
        imgUrl: "media/Prodotti/cittrulina.avif"
    },
    
    {
        title: "creatina endurance",
        price: 34.56, 
        imgUrl: "media/Prodotti/creatina_endurance.png"
    },
    
    {
        title: "Polsiere",
        price: 12.00, 
        imgUrl: "media/Prodotti/Polsiere.jpg"
    },
    
    {
        title: "Preuorcaut",
        price: 22.10, 
        imgUrl: "media/Prodotti/preuorcaut.jpg"
    },
    
    {
        title: "Straps",
        price: 11.40, 
        imgUrl: "media/Prodotti/Straps.jpg"
    },
    
    {
        title: "Sudore di ronni",
        price: 99.99, 
        imgUrl: "media/Prodotti/Sudore-di-ronni.avif" 
    },
    {
        title: "Testosterone",
        price: 45.50, 
        imgUrl: "media/Prodotti/Testo.jpeg"
    },
    
    {
        title: "Trenbolone Ccettato",
        price: 45.50, 
        imgUrl: "media/Prodotti/trenbolone-acettato.jpg"
    },
    
    {
        title: "Ginochiere.jpg",
         price: 14.30, 
         imgUrl: "media/Prodotti/ginochiere.jpg"
    },
    
    {
        title: "Gomitiere",
         price: 12.30, 
         imgUrl: "media/Prodotti/Gomitiere.jpg"
    },
    
    {
        title: "Legins",
         price: 22.00, 
         imgUrl: "media/Prodotti/Legins.jpg"
    },
    {
        title: "Manubri.jpg",
         price: 75.00, 
         imgUrl: "media/Prodotti/manubri.jpg"
    },
    {
        title: "Scarpe stacco.jpg",
         price: 60.00, 
         imgUrl: "media/Prodotti/scarpe-stacco.jpg"
    },
    {
        title: "siringhe quasi sterili",
         price: 5.99, 
         imgUrl: "media/Prodotti/siringa.jpg"
    },
    {
        title: "Winstrol",
         price: 45.60, 
         imgUrl: "media/Prodotti/Winstrol.jpeg"
    }
];


// Testo fisso del pulsante
const buttonText = "Buy Now";

// Funzione per aggiungere un item al carrello
function addToCart(item) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));
}

// Funzione per generare e aggiungere gli item dinamicamente
items.forEach(item => {
    const itemDiv = document.createElement("div");
    itemDiv.className = "single-img";
    itemDiv.style.backgroundImage = `url(${item.imgUrl})`;

    const imgText = document.createElement("div");
    imgText.className = "img-text";

    const title = document.createElement("h4");
    title.textContent = item.title;
    imgText.appendChild(title);

    const price = document.createElement("p");
    price.textContent = `€${item.price}`;
    imgText.appendChild(price);

    const button = document.createElement("button");
    button.className = "button";
    button.textContent = "Buy Now";

    button.addEventListener("click", () => {
        addToCart(item);
    });

    imgText.appendChild(button);
    itemDiv.appendChild(imgText);
    container.appendChild(itemDiv);
})


