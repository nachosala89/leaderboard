const listContainer = document.querySelector('#list-container');

export const populateList = (scores) => {
  scores.forEach((item) => {
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.textContent = `${item.user}: ${item.score}`;
    li.appendChild(span);
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