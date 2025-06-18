// Menu Toggle
const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

if (menuToggle && menu) {
  menuToggle.addEventListener("click", () => {
    menu.classList.toggle("open");
  });
}

// Theme Toggle
const themeToggle = document.getElementById("theme-toggle");

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    themeToggle.textContent = document.body.classList.contains("light-mode") ? "☀️" : "🌙";
  });
}

// Tab Switching
document.querySelectorAll(".tab-button").forEach(button => {
  button.addEventListener("click", () => {
    const lesson = button.closest(".lesson");
    const tabs = lesson.querySelectorAll(".tab-button");
    const contents = lesson.querySelectorAll(".tab-content");
    tabs.forEach(b => b.classList.remove("active"));
    contents.forEach(c => c.classList.remove("active"));
    button.classList.add("active");
    lesson.querySelector(`#${button.dataset.tab}`).classList.add("active");
  });
});

// Challenge 1 – DOM Manipulation
function runChallenge1() {
  const code = document.getElementById("challenge1-code").value;
  const output = document.getElementById("challenge1-output");
  try {
    const testDiv = document.createElement("div");
    testDiv.innerHTML = '<p id="demo">Original</p>';
    document.body.appendChild(testDiv);
    eval(code);
    const result = document.getElementById("demo").textContent;
    output.textContent = result === "Hello, DOM!" ? "Success!" : `Incorrect: "${result}"`;
    document.body.removeChild(testDiv);
  } catch (error) {
    output.textContent = `Error: ${error.message}`;
  }
}

// Challenge 2 – Event Listener
function runChallenge2() {
  const code = document.getElementById("challenge2-code").value;
  const output = document.getElementById("challenge2-output");
  try {
    const testDiv = document.createElement("div");
    document.body.appendChild(testDiv);
    eval(code);
    const button = testDiv.querySelector("button");
    if (button && button.textContent === "Click Me!") {
      button.click();
      output.textContent = "Success! Button created and alert displayed.";
    } else {
      output.textContent = "Incorrect button setup.";
    }
    document.body.removeChild(testDiv);
  } catch (error) {
    output.textContent = `Error: ${error.message}`;
  }
}

// Challenge 3 – Function Square
function runChallenge3() {
  const code = document.getElementById("challenge3-code").value;
  const output = document.getElementById("challenge3-output");
  try {
    const result = eval(`${code}\nsquare(4);`);
    output.textContent = result === 16 ? "Success! square(4) = 16" : `Incorrect: ${result}`;
  } catch (error) {
    output.textContent = `Error: ${error.message}`;
  }
}

// Challenge 4 – Loop
function runChallenge4() {
  const code = document.getElementById("challenge4-code").value;
  const output = document.getElementById("challenge4-output");
  try {
    let captured = "";
    const originalLog = console.log;
    console.log = (msg) => (captured += msg + "\n");
    eval(code);
    console.log = originalLog;
    output.textContent = captured.trim() === "1\n2\n3\n4\n5"
      ? "Success!"
      : `Incorrect output:\n${captured}`;
  } catch (error) {
    output.textContent = `Error: ${error.message}`;
  }
}

// Challenge 5 – Conditionals
function runChallenge5() {
  const code = document.getElementById("challenge5-code").value;
  const output = document.getElementById("challenge5-output");
  try {
    let captured = "";
    const originalLog = console.log;
    console.log = (msg) => (captured += msg + "\n");
    eval(code);
    console.log = originalLog;
    const result = captured.trim().toLowerCase();
    if (result.includes("positive") || result.includes("negative") || result.includes("zero")) {
      output.textContent = "Success!";
    } else {
      output.textContent = `Incorrect output:\n${captured}`;
    }
  } catch (error) {
    output.textContent = `Error: ${error.message}`;
  }
}

// Challenge 6 – Array Sum
function runChallenge6() {
  const code = document.getElementById("challenge6-code").value;
  const output = document.getElementById("challenge6-output");
  try {
    let captured = "";
    const originalLog = console.log;
    console.log = (msg) => (captured += msg + "\n");
    eval(code);
    console.log = originalLog;
    const sum = parseInt(captured.trim());
    output.textContent = sum > 0 ? "Success!" : `Incorrect output:\n${captured}`;
  } catch (error) {
    output.textContent = `Error: ${error.message}`;
  }
}