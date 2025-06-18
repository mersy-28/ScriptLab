// Menu Toggle
const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

menuToggle.addEventListener("click", () => {
  menu.classList.toggle("open");
});

// Theme Toggle
const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  themeToggle.textContent = document.body.classList.contains("light-mode") ? "☀️" : "🌙";
});

// Playground Code Runner
if (document.getElementById("run-code")) {
  const runCodeButton = document.getElementById("run-code");
  const codeEditor = document.getElementById("code-editor");
  const output = document.getElementById("output");

  runCodeButton.addEventListener("click", () => {
    try {
      const result = eval(codeEditor.value);
      output.textContent = result !== undefined ? result : "Code executed successfully!";
    } catch (error) {
      output.textContent = `Error: ${error.message}`;
    }
  });
}

// Tab Switching Logic
document.querySelectorAll('.tab-button').forEach(button => {
  button.addEventListener('click', () => {
    const lesson = button.closest('.lesson');
    const tabContents = lesson.querySelectorAll('.tab-content');
    const tabButtons = lesson.querySelectorAll('.tab-button');

    // Remove "active" class from all buttons and tabs, add hidden to all tabs
    tabButtons.forEach(btn => btn.classList.remove('active'));
    tabContents.forEach(content => {
      content.classList.remove('active');
      content.classList.add('hidden');
    });

    // Add "active" class to the clicked button and show the corresponding tab
    button.classList.add('active');
    const activeTab = lesson.querySelector(`#${button.dataset.tab}`);
    activeTab.classList.add('active');
    activeTab.classList.remove('hidden');
  });
});

// Challenge 1: DOM Manipulation
function runChallenge1() {
  const code = document.getElementById('challenge1-code').value;
  const output = document.getElementById('challenge1-output');
  try {
    const testDiv = document.createElement('div');
    testDiv.innerHTML = '<p id="demo">Original Text</p>';
    document.body.appendChild(testDiv);
    eval(code);
    const result = document.getElementById('demo').textContent;
    if (result === 'Hello, DOM!') {
      output.textContent = 'Success! The text was changed to "Hello, DOM!"';
    } else {
      output.textContent = `Incorrect. Current text: "${result}"`;
    }
    document.body.removeChild(testDiv);
  } catch (error) {
    output.textContent = `Error: ${error.message}`;
  }
}

// Challenge 2: Event Listeners
function runChallenge2() {
  const code = document.getElementById('challenge2-code').value;
  const output = document.getElementById('challenge2-output');
  try {
    const testDiv = document.createElement('div');
    document.body.appendChild(testDiv);
    eval(code);
    const button = testDiv.querySelector('button');
    if (button && button.textContent === 'Click Me!') {
      button.click();
      output.textContent = 'Success! Button created and alert displayed.';
    } else {
      output.textContent = 'Incorrect. Button not created or has incorrect text.';
    }
    document.body.removeChild(testDiv);
  } catch (error) {
    output.textContent = `Error: ${error.message}`;
  }
}