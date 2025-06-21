function greetUser(name) {
  return `Welcome, ${name}!`;
}

let greetBtn = document.getElementById('greetBtn');
let nameInput = document.getElementById('nameInput');
let greeting = document.getElementById('greeting');

greetBtn.addEventListener('click', function() {
  let name = nameInput.value;
  if (name) {
    greeting.textContent = greetUser(name);
  } else {
    greeting.textContent = "Please enter your name.";
  }
});

