import './style.css';

const players = [
  {
    name: 'Name',
    score: 100,
  },
  {
    name: 'Name',
    score: 20,
  },
  {
    name: 'Name',
    score: 30,
  },
  {
    name: 'Name',
    score: 45,
  },
  {
    name: 'Name',
    score: 70,
  },
  {
    name: 'Name',
    score: 125,
  },
  {
    name: 'Name',
    score: 180,
  },
];

const listContainer = document.querySelector('#list-container');
players.forEach((player) => {
  const li = document.createElement('li');
  const span = document.createElement('span');
  span.textContent = `${player.name}: ${player.score}`;
  li.appendChild(span);
  listContainer.appendChild(li);
});