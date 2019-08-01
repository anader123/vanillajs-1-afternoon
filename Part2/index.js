const cardID = document.getElementById("cardID");
const cardStyle = document.getElementById("cardStyle"); 
const cardButton = document.getElementById("cardButton"); 

cardButton.addEventListener("click", () => {
    let card = document.getElementById(cardID.value);
    card.style.color = cardStyle.value; 
});