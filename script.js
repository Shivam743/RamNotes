var addBtn = document.getElementById('addBtn');
var notesDiv = document.getElementById('notes');

addBtn.onclick = function () {
    var note = document.createElement('div');
    note.className = 'note';

    var textarea = document.createElement('textarea');
    textarea.rows = 3;
    textarea.value = 'Type your note here...';

    var delBtn = document.createElement('button');
    delBtn.className = 'deleteBtn';
    delBtn.innerText = 'Delete';

    delBtn.onclick = function () {
        note.remove();
    };

    note.appendChild(textarea);
    note.appendChild(delBtn);
    notesDiv.appendChild(note);
};