import loadProfile from '../common/load-profile.js';
import { getUser } from '../data/api.js';
import scoreFood from './score-food.js';
import scoreGold from './score-pets.js';
import { petsMessages, aliveFoodMessages, deadFoodMessages } from './messages.js';

loadProfile();

const user = getUser();

const storyDisplay = document.getElementById('story-display');

const foodResult = scoreFood(user.food);
const petsResult = scorePets(user.pets);
const foodMessage = foodMessages[foodResult];

let petsMessages = null;
if (hpResult === 'dead') {
    petsMessages = deadPetsMessages;
}
else {
    petsMessages = alivePetsMessages;
}

const petsMessage = petsMessages[petsResult];

let story = 'After your adventures, ';
story += user.name + ' the ' + user.race + ', ';
story += foodMessage + ' and ' + petsMessage + '.';

storyDisplay.textContent = story;