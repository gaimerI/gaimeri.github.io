const input = document.getElementById("input");
const preview = document.getElementById("preview");
const clearBtn = document.getElementById("clear");
const toggleModeBtn = document.getElementById("toggle-mode");
const runJsBtn = document.getElementById("run-js");
const errorOutput = document.getElementById("error-output");
const stats = document.getElementById("stats");
const downloadBtn = document.getElementById("download");
const uploadBtn = document.getElementById("upload-btn");
const uploadInput = document.getElementById("upload");

input.value = localStorage.getItem("editor-content") || "# Welcome to Tadi Lab\n\nWrite **Markdown**, HTML, and JavaScript here.";
if (localStorage.getItem("dark-mode") === "enabled") {
    document.body.classList.add("dark-mode");
}

function handleInput() {
    // localStorage.setItem("editor-content", input.value);
    const parsedMarkdown = marked.parse(replaceEmojis(input.value)); // Apply emoji replacement before parsing
    preview.innerHTML = parsedMarkdown;
    Prism.highlightAll();
    updateStats();
}

function updateStats() {
    const text = input.value.trim();
    const words = text ? text.match(/\b\w+\b/g)?.length || 0 : 0;
    const chars = text.length;
    stats.textContent = `Words: ${words} | Characters: ${chars}`;
}

function runJavaScript() {
    errorOutput.textContent = "";
    const codeBlocks = preview.querySelectorAll("code.language-js");
    codeBlocks.forEach((block) => {
        try {
            new Function(block.textContent)();
        } catch (e) {
            errorOutput.textContent = "JavaScript Error: " + e.message;
        }
    });
}

toggleModeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("dark-mode", document.body.classList.contains("dark-mode") ? "enabled" : "disabled");
});

clearBtn.addEventListener("click", () => {
    input.value = "";
    handleInput();
});

runJsBtn.addEventListener("click", runJavaScript);

downloadBtn.addEventListener("click", () => {
    const blob = new Blob([input.value], { type: "text/plain" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "tadi_lab.txt";
    a.click();
});

uploadBtn.addEventListener("click", () => uploadInput.click());
uploadInput.addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            input.value = e.target.result;
            handleInput();
        };
        reader.readAsText(file);
    }
});

input.addEventListener("input", handleInput);
handleInput();

function insertTextAtCursor(text) {
    const start = input.selectionStart;
    const end = input.selectionEnd;
    const before = input.value.substring(0, start);
    const after = input.value.substring(end);
    input.value = before + text + after;
    input.selectionStart = input.selectionEnd = start + text.length;
}

input.addEventListener("keydown", (event) => {
    if (event.key === "(") {
        insertTextAtCursor("()");
        event.preventDefault();
    }
    if (event.key === "[") {
        insertTextAtCursor("[]");
        event.preventDefault();
    }
    if (event.key === "{") {
        insertTextAtCursor("{}");
        event.preventDefault();
    }
    if (event.key === "'") {
        insertTextAtCursor("''");
        event.preventDefault();
    }
    if (event.key === '"') {
        insertTextAtCursor('""');
        event.preventDefault();
    }
});

document.addEventListener("keydown", (event) => {
    if (event.ctrlKey && event.key === "b") {
        insertTextAtCursor("****");
        input.selectionStart -= 2;
        event.preventDefault();
    }
    if (event.ctrlKey && event.key === "i") {
        insertTextAtCursor("**");
        input.selectionStart -= 1;
        event.preventDefault();
    }
    if (event.ctrlKey && event.key === "k") {
        insertTextAtCursor("[text](url)");
        input.selectionStart -= 4;
        event.preventDefault();
    }
});

const emojiMap = {
    ":smile:": "😀",
    ":laughing:": "😆",
    ":wink:": "😉",
    ":heart:": "❤️",
    ":thumbsup:": "👍",
    ":star:": "⭐",
    ":fire:": "🔥",
    ":rocket:": "🚀",
    ":coffee:": "☕",
    ":check:": "✔️",
    ":x:": "❌",
    ":warning:": "⚠️",
    ":question:": "❓",
    ":exclamation:": "❗",
    ":js:": '<span class="character-image js-icon"></span>',
    ":html:": '<span class="character-image html-icon"></span>',
    ":css:": '<span class="character-image css-icon"></span>',
    ":bash:": '<span class="character-image bash-icon"></span>',
    ":c:": '<span class="character-image c-icon"></span>',
    ":cpp:": '<span class="character-image cpp-icon"></span>',
    ":csharp:": '<span class="character-image csharp-icon"></span>',
    ":go:": '<span class="character-image go-icon"></span>',
    ":java:": '<span class="character-image java-icon"></span>',
    ":json:": '<span class="character-image json-icon"></span>',
    ":md:": '<span class="character-image md-icon"></span>',
    ":php:": '<span class="character-image php-icon"></span>',
    ":python:": '<span class="character-image python-icon"></span>',
    ":regex:": '<span class="character-image regex-icon"></span>',
    ":ts:": '<span class="character-image ts-icon"></span>',
    ":xml:": '<span class="character-image xml-icon"></span>',
    ":yaml:": '<span class="character-image yaml-icon"></span>',
    ":scratch:": '<span class="character-image scratch-icon"></span>',
    ":spacetode:": '<span class="character-image spacetode-icon"></span>',
    ":haskell:": '<span class="character-image haskell-icon"></span>',
    ":tidalcycles:": '<span class="character-image tidalcycles-icon"></span>',
    ":clojure:": '<span class="character-image clojure-icon"></span>',
    ":fsharp:": '<span class="character-image fsharp-icon"></span>',
    ":brainfuck:": '<span class="character-image brainfuck-icon"></span>',
    ":piet:": '<span class="character-image piet-icon"></span>',
    ":lua:": '<span class="character-image lua-icon"></span>',
    ":powershell:": '<span class="character-image powershell-icon"></span>',
};

function replaceEmojis(text) {
    return text.replace(/:\w+:/g, (match) => emojiMap[match] || match);
}

const startTime = performance.now(); // Function to update the timer
function updateTimer() {
    const currentTime = performance.now();
    const elapsedTime = Math.floor((currentTime - startTime) / 1000); // Convert to seconds
    document.getElementById("timer").textContent = `Time spent editing: ${elapsedTime} seconds`;
} // Update the timer every second

setInterval(updateTimer, 1000);
