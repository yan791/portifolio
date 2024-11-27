const toggleButton = document.createElement("button");
toggleButton.textContent = "Dark Mode";
toggleButton.classList.add("toggle-button");
document.body.appendChild(toggleButton);

toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // Adjust background color based on dark mode
  if (document.body.classList.contains("dark-mode")) {
    document.body.style.backgroundColor = "#121212"; // Dark color
  } else {
    document.body.style.backgroundColor = "#f4f4f4"; // Light color (or your preference)
  }

  // Adjust footer and header styles (unchanged)
  const footer = document.querySelector("footer");
  const header = document.querySelector(".cabecalho");

  if (document.body.classList.contains("dark-mode")) {
    footer.style.backgroundColor = "#121212";
    footer.style.color = "white";
    header.style.backgroundColor = "#121212";
    header.style.color = "white";
  } else {
    footer.style.backgroundColor = "#333";
    footer.style.color = "white";
    header.style.backgroundColor = "#333";
    header.style.color = "white";
  }
});