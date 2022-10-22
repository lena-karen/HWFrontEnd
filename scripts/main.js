const container = document.querySelector('.cards-container');

fetch(`https://jsonplaceholder.typicode.com/todos`)
    .then (response => response.json())
    .then (json => renderContainer(json))


const render = ({title, completed}) => {
    const taskEl = document.createElement('p');
    const statusEl = document.createElement('p');
    
    const card = document.createElement('div');
    taskEl.innerText = `Task: ${title}`;
    const status = completed ? 'done' : 'not done';
    statusEl.innerText = `Status: ${status}`;
    
    const color = completed ? 'green' : 'grey';
    card.style.backgroundColor = color;
    card.classList.add('card');
    card.append(taskEl, statusEl);
    return card;
}
renderContainer = (data) => {
    const cards = data.map(el => render(el));
    container.append(...cards);
}



