import { getUser } from '../data/api.js';
import quests from '../data/quest-data.js';
import { loadProfile } from '../utils.js';
import { isDead } from '../utils.js';
import hasCompletedAllQuests from './has-completed.js';
import createCompleteQuest from './create-completed-quests.js';
import createQuestLink from './create-quest-link.js';

loadProfile();

const user = getUser();

if (isDead(user) || hasCompletedAllQuests(quests, user)) {
    window.location = '../results/index.html';
}

const nav = document.getElementById('quests');

for (let i = 0; i < quests.length; i++) {
    const quest = quests[i];
    let questDisplay = null;

    if (user.completed[quest.id]) {
        questDisplay = createCompleteQuest(quest);
    }
    else {
        questDisplay = createQuestLink(quest);
    }
    nav.appendChild(questDisplay);
}