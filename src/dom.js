const listContainer = document.querySelector('#list-container');

export const populateList = (scores) => {
  scores.forEach((item) => {
    const li = document.createElement('li');
    li.innerHTML = `<div><i class="fas fa-user pe-2"></i><span>${item.user}</span></div>
      <span>${item.score}</span>`;
    listContainer.appendChild(li);
  });
};

export const getNewScore = () => {
  const name = document.querySelector('#name-in').value;
  const score = document.querySelector('#score-in').value;
  return { user: name, score };
};

export const clearList = () => {
  listContainer.innerHTML = '';
};