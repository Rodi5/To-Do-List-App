const input = document.getElementById('input');
const list = document.getElementById('list');

function addTask() {
    if(input.value === '') {
        alert('You must write text')
    } else {
        const li = document.createElement('li');
        li.innerHTML = input.value;
        list.appendChild(li);
        const span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span)
    }
    input.value = '';
    save();
}

list.addEventListener('click', (e) => {
    if(e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        save();
    }
    else if(e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        save();
    }
}, false);

function save() {
    localStorage.setItem('data', list.innerHTML)
}
function show() {
    list.innerHTML = localStorage.getItem('data')
}
show();