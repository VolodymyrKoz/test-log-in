document.getElementById("adminLogin").addEventListener("click", (event) => {
  event.preventDefault();

  const adminUsername = document.getElementById("adminUsername").value;
  const adminPassword = document.getElementById("adminPassword").value;

  if (adminUsername === "Admin_Minor" && adminPassword === "260907kaka") {
    alert("Admin login successful!");
    // Redirect to the admin panel page
    window.location.href = "admin_panel.html";
  } else {
    alert("Admin login failed. Invalid credentials.");
  }
});
