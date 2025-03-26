document.addEventListener("DOMContentLoaded", function () {
  const joinButton = document.querySelector(".join-button");
  const hamburgerIcon = document.getElementById("hamburger-icon");
  const navbarLinks = document.getElementById("navbar-links");

  joinButton.addEventListener("click", function (event) {
    event.preventDefault();
    alert("Join community button clicked!");
  });

  hamburgerIcon.addEventListener("click", function () {
    console.log("Hamburger clicked!");

    if (navbarLinks) {
      navbarLinks.classList.toggle("active");
      console.log("Active class toggled.  Class list:", navbarLinks.classList);
    } else {
      console.error("navbarLinks is null.");
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  // Select all custom cards
  const customCards = document.querySelectorAll(".custom-card");

  // Loop through each card and assign a number
  customCards.forEach((card, index) => {
    const cardNumberElement = card.querySelector(".card-number");
    if (cardNumberElement) {
      cardNumberElement.textContent = index + 1;
    }
  });
});
