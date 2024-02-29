const dropdowns = Array.from(document.querySelectorAll(".dropdown-btn"));
const dropdownContainer = document.getElementsByClassName("dropdown-container");

dropdowns.forEach((dropdown) => {
  dropdown.addEventListener("click", () => {
    const container = dropdown.nextElementSibling;
    if (container.style.display === "block") {
      container.style.display = "none";
    } else {
      container.style.display = "block";
    }
  });
});