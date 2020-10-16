import { loadProfile } from '../utils.js';
import { getUser, saveUser } from '../data/api.js';
import quests from '../data/quest-data.js';
import createChoice from './create-choice.js';
import { findById } from '../utils.js';
import scoreQuest from './score-quest.js';

loadProfile();

const searchParams = new URLSearchParams(window.location.search);
const questId = searchParams.get('id');
const quest = findById(quests, questId);


if (!quest) {
    window.location = '../map';

}

const title = document.getElementById('title');
const image = document.getElementById('image');
const audio = document.getElementById('audio');
const description = document.getElementById('description');
const choiceForm = document.getElementById('choiceForm');
const choices = document.getElementById('choices');
const result = document.getElementById('result');
const resultDescription = document.getElementById('resultDescription');

title.textContent = quest.title;
image.src = '../assets/' + quest.image;
audio.src = '../assets/' + quest.audio;
description.textContent = quest.description;

for (let i = 0; i < quest.choices.length; i++) {
    const choice = quest.choices[i];
    const choiceDOM = createChoice(choice);
    choices.appendChild(choiceDOM);
}

choiceForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(choiceForm);
    const choiceId = formData.get('choice');
    const choice = findById(quest.choices, choiceId);
    const user = getUser();
    scoreQuest(choice, quest.id, user);
    saveUser(user);

    audio.src = '../assets/' + quest.action;
    choiceForm.classList.add('hidden');
    result.classList.remove('hidden');
    resultDescription.textContent = choice.result;

    loadProfile();
});