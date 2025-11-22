 // Resources Functionality

const cards = document.querySelectorAll(".download-card");

cards.forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.backgroundColor = "#e8e8e8";
  });

  card.addEventListener("mouseleave", () => {
    card.style.backgroundColor = "#f5f5f5";
  });
});

const downloadLinks = document.querySelectorAll(".download-card a");

downloadLinks.forEach(link => {
  link.addEventListener("click", () => {
    alert("Your download will begin shortly.");
  });
});


let counter = 0;


const counterButton = document.createElement("button");
counterButton.textContent = "Count Resources Viewed";
counterButton.style.margin = "20px";
counterButton.style.padding = "10px 15px";
counterButton.style.border = "none";
counterButton.style.background = "#0d6efd";
counterButton.style.color = "white";
counterButton.style.borderRadius = "6px";
counterButton.style.cursor = "pointer";


