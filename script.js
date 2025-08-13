
document.getElementById("notes").value = localStorage.getItem("studentQuickNotes") || "";
function saveNotes() {
    localStorage.setItem("studentQuickNotes", document.getElementById("notes").value);
    alert("Notes saved!");
}
