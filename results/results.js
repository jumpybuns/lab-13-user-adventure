import loadProfile from '../utils.js';
import { getUser } from '../data/api.js';
import scoreFood from './score-food.js';
import scorePets from './score-pets.js';
import { foodMessages, alivePetsMessages, deadPetsMessages } from './messages.js';

loadProfile();

const user = getUser();

const storyDisplay = document.getElementById('story-display');

const foodResult = scoreFood(user.food);
const petsResult = scorePets(user.pets);
const foodMessage = foodMessages[foodResult];

let petsMessages = null;
if (foodResult === 'dead') {
    petsMessages = deadPetsMessages;
}
else {
    petsMessages = alivePetsMessages;
}

const petsMessage = petsMessages[petsResult];

let story = 'After your adventures, ';
story += user.name + ' the ' + user.breed + ', ';
story += foodMessage + ' and ' + petsMessage + '.';

storyDisplay.textContent = story;