const inputBox = document.getElementById('input-box');
const listContaner = document.getElementById('list-container');

const addButton = document.getElementById('add-button');
 
addButton.addEventListener('click', () => {
    if(inputBox.value === '') {
        alert('Please enter a task!');
    }
    else{
        let li = document.createElement('li');
        li.textContent = inputBox.value;
        listContaner.appendChild(li);
        let span = document.createElement('span');
        span.textContent = '\u00D7'; // Unicode for multiplication sign (×)
        li.appendChild(span);

    }
    inputBox.value = '';
    saveData();

})

listContaner.addEventListener('click', (e) => {
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle('checked');
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();

    }
}
, false);

function saveData(){
    localStorage.setItem('data', listContaner.innerHTML);
}
function showTask(){
    listContaner.innerHTML = localStorage.getItem('data');
}
showTask();

