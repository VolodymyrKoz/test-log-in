// Simulated user data (for demo purposes only)
const users = [
  { username: "user1", password: "password1" },
  { username: "user2", password: "password2" },
  // Add more users here
];

document.getElementById("loginSubmit").addEventListener("click", (event) => {
  event.preventDefault();

  const username = document.getElementById("loginUsername").value;
  const password = document.getElementById("loginPassword").value;

  const user = users.find(
    (user) => user.username === username && user.password === password
  );
  if (user) {
    alert("Login successful!");
    // Redirect to a logged-in page
    window.location.href = "logged_in_page.html";
  } else {
    alert("Login failed. Invalid username or password.");
  }
});

document.getElementById("registerSubmit").addEventListener("click", (event) => {
  event.preventDefault();

  const username = document.getElementById("registerUsername").value;
  const password = document.getElementById("registerPassword").value;

  // Simulate storing user data
  users.push({ username, password });
  alert("Registration successful! You can now log in.");
});
