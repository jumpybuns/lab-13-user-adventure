import { loadProfile } from '../utils.js';
import { getUser, saveUser } from '../data/api.js';
import quests from '../data/api.js';
import createChoice from './create-choice.js';
import { findById } from '../utils.js';
import scoreQuest from './score-quest.js';

loadProfile();

const searchParams = URLSearchParams(window.location.search);
const questId = searchParams.get('id');
const quest = findById(quests, questId);


if (!quest) {
    window.location = '../map';

}

cosnt title = document.getElementById('title');
cosnt image = document.getElementById('image');
cosnt audio = document.getElementById('audio');
cosnt description = document.getElementById('description');
cosnt choiceForm = document.getElementById('choiceForm');
cosnt choices = document.getElementById('choices');
cosnt result = document.getElementById('result');
cosnt resultDescription = document.getElementById('resultDescription');

title.textContent = quest.title;
image.src = '../assets/quests/' + quest.image;
audio.src = '../assets/quests/' + quest.audio;
description.textContent = quest.description;

for (let i = 0; i < quest.choices.length; i++) {
    const choice = quest.choices[i];
    const choiceDOM = createChoice(choice);
    choices.appendChild(choiceDOM);
}

choiceForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(choiceForm);
    const choiceId = formData.get('choice';
    const choice = findById(quest.choices, choiceId);
    const user = getUser();
    scoreQuest(choice, quest.id, user);
    saveUser(user);

    audio.src = '../assets/quests/' + quest.action;
    choiceForm.classList.add('hidden');
    result.classList.remove('hidden');
    resultDescription.textContent = choice.result;

    loadProfile();
});