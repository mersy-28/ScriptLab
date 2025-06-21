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

// Challenge 7 – Objects
function runChallenge7() {
  const code = document.getElementById("challenge7-code").value;
  const output = document.getElementById("challenge7-output");
  try {
    const result = eval(`${code}\ncar.getInfo();`);
    output.textContent = typeof result === "string" && result.length > 0
      ? "Success! Output: " + result
      : "Incorrect. Make sure car.getInfo() returns a string.";
  } catch (error) {
    output.textContent = `Error: ${error.message}`;
  }
}

// Challenge 8 – Template Literals
function runChallenge8() {
  const code = document.getElementById("challenge8-code").value;
  const output = document.getElementById("challenge8-output");
  try {
    let captured = "";
    const originalLog = console.log;
    console.log = msg => (captured += msg + "\n");
    eval(code);
    console.log = originalLog;
    if (captured.toLowerCase().includes("my name") && captured.toLowerCase().includes("love javascript")) {
      output.textContent = "Success!";
    } else {
      output.textContent = "Output does not match expected format.";
    }
  } catch (error) {
    output.textContent = `Error: ${error.message}`;
  }
}

// Scroll-to-top button
const scrollTopBtn = document.getElementById("scroll-top-btn");
if (scrollTopBtn) {
  window.addEventListener("scroll", () => {
    scrollTopBtn.style.display = window.scrollY > 200 ? "block" : "none";
  });

  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// Playground - CodeMirror Setup
const htmlEditor = CodeMirror.fromTextArea(document.getElementById("html-editor"), {
  mode: "htmlmixed",
  theme: "material-darker",
  lineNumbers: true
});
const cssEditor = CodeMirror.fromTextArea(document.getElementById("css-editor"), {
  mode: "css",
  theme: "material-darker",
  lineNumbers: true
});
const jsEditor = CodeMirror.fromTextArea(document.getElementById("js-editor"), {
  mode: "javascript",
  theme: "material-darker",
  lineNumbers: true
});

// Restore code from localStorage
htmlEditor.setValue(localStorage.getItem("code-html") || "<h1>Hello World</h1>");
cssEditor.setValue(localStorage.getItem("code-css") || "h1 { color: teal; }");
jsEditor.setValue(localStorage.getItem("code-js") || "console.log('Hello');");

// Save on change
[htmlEditor, cssEditor, jsEditor].forEach((editor, i) => {
  editor.on("change", () => {
    const key = ["code-html", "code-css", "code-js"][i];
    localStorage.setItem(key, editor.getValue());
    updatePreview(); // Live update
  });
});

// Editor tab switching
const editorMap = {
  html: htmlEditor,
  css: cssEditor,
  js: jsEditor,
};

document.querySelectorAll(".tab-button").forEach(button => {
  button.addEventListener("click", () => {
    // Remove active class from all buttons
    document.querySelectorAll(".tab-button").forEach(b => b.classList.remove("active"));
    button.classList.add("active");

    // Determine selected editor
    const selected = button.dataset.lang;

    // Show only the selected editor
    for (const [lang, editor] of Object.entries(editorMap)) {
      const wrapper = editor.getWrapperElement();
      wrapper.style.display = lang === selected ? "block" : "none";
      if (lang === selected) editor.refresh();
    }
  });
});

// Initial state: show only HTML
htmlEditor.getWrapperElement().style.display = "block";
cssEditor.getWrapperElement().style.display = "none";
jsEditor.getWrapperElement().style.display = "none";

// Initial preview render
updatePreview();

// Console output override
const originalLog = console.log;
console.log = function (...args) {
  const output = args.map(a => typeof a === 'object' ? JSON.stringify(a) : a).join(' ');
  const logBox = document.getElementById("console-output");
  logBox.textContent += output + "\n";
  originalLog.apply(console, args);
};

// Reset button
document.getElementById("reset-btn").addEventListener("click", () => {
  if (confirm("Clear all code and reset?")) {
    htmlEditor.setValue("");
    cssEditor.setValue("");
    jsEditor.setValue("");
    localStorage.removeItem("code-html");
    localStorage.removeItem("code-css");
    localStorage.removeItem("code-js");
    updatePreview();
    document.getElementById("console-output").textContent = "";
  }
});

// Download button
document.getElementById("download-btn").addEventListener("click", () => {
  const html = htmlEditor.getValue();
  const css = cssEditor.getValue();
  const js = jsEditor.getValue();

  const blob = new Blob(
    [`<!DOCTYPE html><html><head><style>${css}</style></head><body>${html}<script>${js}<\/script></body></html>`],
    { type: "text/html" }
  );

  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "scriptlab_project.html";
  link.click();
});

// Templates
const templates = {
  blank: {
    html: "",
    css: "",
    js: ""
  },
  starter: {
    html: "<h1>Hello from ScriptLab</h1>",
    css: "body { font-family: sans-serif; } h1 { color: #6a64f1; }",
    js: "console.log('ScriptLab ready!');"
  },
  clock: {
    html: `<h1 id="clock">00:00:00</h1>`,
    css: `body { text-align: center; font-size: 2rem; }`,
    js: `setInterval(() => {
  const now = new Date();
  document.getElementById("clock").textContent =
    now.toLocaleTimeString();
}, 1000);`
  }
};

document.getElementById("template-selector").addEventListener("change", e => {
  const selected = e.target.value;
  if (templates[selected]) {
    htmlEditor.setValue(templates[selected].html);
    cssEditor.setValue(templates[selected].css);
    jsEditor.setValue(templates[selected].js);
    updatePreview();
  }
});

// Theme-aware iframe background
function updatePreview() {
  const html = htmlEditor.getValue();
  const css = cssEditor.getValue();
  const js = jsEditor.getValue();
  const bg = "#ffffff";
  const content = `
    <html>
      <head>
        <style>body { background: ${bg}; color: inherit; }</style>
        <style>${css}</style>
      </head>
      <body>
        ${html}
        <script>${js}<\/script>
      </body>
    </html>`;
  document.getElementById("console-output").textContent = "";
  document.getElementById("preview").srcdoc = content;
}

// Lessons challenge CodeMirror editors
["challenge1", "challenge2", "challenge3", "challenge4", "challenge5", "challenge6", "challenge7", "challenge8"].forEach(id => {
  const el = document.getElementById(`${id}-code`);
  if (el) {
    CodeMirror.fromTextArea(el, {
      mode: "javascript",
      theme: "material-darker",
      lineNumbers: true
    });
  }
});

// Theory Code Example Editor 
function runTheoryExample(id) {
  const editor = theoryEditors[id];
  const output = document.getElementById(`${id}-example-output`);
  if (!editor || !output) return;

  try {
    const code = editor.getValue();
    const container = document.createElement("div");
    container.innerHTML = `<p id="demo">Original</p>`;
    document.body.appendChild(container);
    eval(code);
    const result = document.getElementById("demo")?.textContent;
    output.textContent = result ? `Output: ${result}` : "No output";
    document.body.removeChild(container);
  } catch (err) {
    output.textContent = "Error: " + err.message;
  }
}

// Initialize Editable CodeMirror editors for theory examples
const theoryEditors = {};
for (let i = 1; i <= 8; i++) {
  const textarea = document.getElementById(`lesson${i}-example`);
  if (textarea) {
    theoryEditors[`lesson${i}`] = CodeMirror.fromTextArea(textarea, {
      mode: "javascript",
      theme: "material-darker",
      lineNumbers: true
    });
  }
}

// Quiz Logic
function checkAnswer(lessonId, isCorrect) {
  const result = document.getElementById(`${lessonId}-quiz-result`);
  if (result) {
    result.textContent = isCorrect ? "✅ Correct!" : "❌ Try again.";
    localStorage.setItem(`${lessonId}-quiz`, isCorrect ? "correct" : "wrong");
  }
  updateLessonCompletionStatus(lessonId);
}

// Progress Checkbox Logic
function updateChallengeProgress(lessonId) {
  const checkbox = document.querySelector(`#lesson${lessonId.replace("lesson", "")}-challenge input[type=checkbox]`);
  const value = checkbox?.checked ? "complete" : "incomplete";
  localStorage.setItem(`${lessonId}-challenge`, value);
  updateLessonCompletionStatus(lessonId);
}

window.addEventListener("DOMContentLoaded", () => {
  // Load progress state
  for (let i = 1; i <= 8; i++) {
    const id = `lesson${i}`;
    const checkbox = document.querySelector(`#${id}-challenge input[type=checkbox]`);
    if (checkbox) {
      checkbox.checked = localStorage.getItem(`${id}-challenge`) === "complete";
    }
    const quizResult = localStorage.getItem(`${id}-quiz`);
    if (quizResult && document.getElementById(`${id}-quiz-result`)) {
      document.getElementById(`${id}-quiz-result`).textContent = quizResult === "correct" ? "✅ Correct!" : "❌ Try again.";
    }
    updateLessonCompletionStatus(id);
  }
});

// Render Progress
function renderProgress() {
  const container = document.getElementById("progress-container");
  if (!container) {
    console.error("No #progress-container found.");
    return;
  }

  let html = "";
  for (let i = 1; i <= 8; i++) {
    const id = `lesson${i}`;
    const challengeKey = localStorage.getItem(`${id}-challenge`);
    const quizKey = localStorage.getItem(`${id}-quiz`);

    const isComplete = challengeKey === "complete" ? 1 : 0;
    const quizPassed = quizKey === "correct" ? 1 : 0;
    const percent = (isComplete + quizPassed) * 50;

    html += `
      <div class="lesson-progress">
        <h3>${id.charAt(0).toUpperCase() + id.slice(1)}</h3>
        <div class="progress-bar">
          <div class="progress-fill" style="width: ${percent}%;"></div>
        </div>
        <p>${percent}% complete</p>
      </div>
    `;
  }

  container.innerHTML = html;
}


// Ensure renderProgress runs after all logic
window.addEventListener("DOMContentLoaded", () => {
  renderProgress();
});


function updateLessonCompletionStatus(id) {
  const challengeDone = localStorage.getItem(`${id}-challenge`) === "complete";
  const quizCorrect = localStorage.getItem(`${id}-quiz`) === "correct";
  const status = document.getElementById(`${id}-status`);

  if (status) {
    if (challengeDone && quizCorrect) {
      status.textContent = "🎉";
      status.classList.add("flash-complete");
      setTimeout(() => status.classList.remove("flash-complete"), 600);
    } else {
      status.textContent = "";
    }
  }
}