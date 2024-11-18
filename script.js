// Form Validation
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("formMessage");

    if (name && email.includes("@")) {
        message.textContent = "Form submitted successfully!";
        message.style.color = "green";
    } else {
        message.textContent = "Please enter a valid name and email.";
        message.style.color = "red";
    }
});

// Simple Quiz
const question = "Is the Earth round?";
const correctAnswer = "Yes";

document.getElementById("question").innerText = question;

function submitAnswer(answer) {
    const result = document.getElementById("result");
    if (answer === correctAnswer) {
        result.innerText = "Correct! 🎉";
        result.style.color = "green";
    } else {
        result.innerText = "Wrong answer. Try again!";
        result.style.color = "red";
    }
}

// Fetch Random Joke from API
async function getJoke() {
    const response = await fetch('https://official-joke-api.appspot.com/random_joke');
    const data = await response.json();
    const jokeText = `${data.setup} - ${data.punchline}`;
    document.getElementById("joke").innerText = jokeText;
}

// Fetch a joke when the page loads
getJoke();
