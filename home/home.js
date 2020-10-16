import { saveUser } from '../data/api.js';
import { makeUser } from './make-user.js';

const startButton = document.getElementById('start-button');

startButton.addEventListener('submit', function(event) {

    event.preventDefault();
    const formData = new FormData(startButton);
    const user = makeUser(formData);
    saveUser(user);
    window.location = 'map';
});