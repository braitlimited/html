const container = document.getElementsByClassName("sautet")[0];
const Header1 = document.getElementById("h1");

Header1.innerText = "Anything";
Header1.style.color = "green";

// adding a button to the page
const button = document.createElement("button"); // creating a button
// add class to the button
button.classList.add("btn");
button.innerText = "Click me"; // adding text to the button
button.style.color = "red"; // adding style to the button
button.style.backgroundColor = "yellow"; // adding style to the button
button.style.fontSize = "20px"; // adding style to the button
button.style.borderRadius = "10px"; // adding style to the button
button.style.padding = "10px";

// when the button is double clicked, how a fancy alert
button.addEventListener("dblclick", () => {
  alert("You clicked me");
});

// mount the button to the page
container.appendChild(button);
