import './style.css';
import { populateList, getNewScore, clearList } from './dom.js';
import { getData, sendData } from './leaderboardAPI.js';

const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/QzGv34LB2uIZhM79CnAe/scores';

const createList = async () => {
  let scores = [];
  await getData(url).then((data) => { scores = data.result; });
  populateList(scores);
};

const addScore = () => {
  const score = getNewScore();
  sendData(url, score);
};

const refreshList = () => {
  clearList();
  createList();
};

createList();

const submit = document.querySelector('#submit-btn');
submit.addEventListener('click', addScore);

const refresh = document.querySelector('#refresh-btn');
refresh.addEventListener('click', refreshList);