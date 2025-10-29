let editorElem = document.getElementById("editor");

function copyHandler(e) {
  e.preventDefault();
  alert("Copy");
}

function cutHandler(e) {
  e.preventDefault();
  alert("Cut");
}

function pasteHandler(e) {
  e.preventDefault();
  alert("Paste");
}

editorElem.addEventListener("copy", copyHandler);
editorElem.addEventListener("cut", cutHandler);
editorElem.addEventListener("paste", pasteHandler);
