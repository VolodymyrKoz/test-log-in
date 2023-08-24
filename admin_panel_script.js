function addSectionToDOM(sectionText) {
  const newSection = document.createElement("section");
  newSection.innerHTML = `<h2>Custom Section</h2><p>${sectionText}</p>`;

  const sectionsContainer = document.getElementById("sections");
  sectionsContainer.appendChild(newSection);
}

document.getElementById("addSection").addEventListener("click", (event) => {
  event.preventDefault();

  const sectionText = document.getElementById("sectionText").value;

  addSectionToDOM(sectionText);

  // Save the section content in localStorage
  const sectionsData = JSON.parse(localStorage.getItem("sectionsData")) || [];
  sectionsData.push(sectionText);
  localStorage.setItem("sectionsData", JSON.stringify(sectionsData));

  alert("Section added successfully!");
});

// Retrieve and display saved sections on page load
window.addEventListener("load", () => {
  const sectionsData = JSON.parse(localStorage.getItem("sectionsData")) || [];

  sectionsData.forEach((sectionText) => {
    addSectionToDOM(sectionText);
  });
});
