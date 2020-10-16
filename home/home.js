import { saveUser } from '../data/api.js';
import makeUser from './make-user.js';

const entireForm = document.querySelector('form');

// const startButton = document.getElementById('#start-button');

entireForm.addEventListener('submit', (event) => {

    event.preventDefault();
    const formData = new FormData(entireForm);
    const user = makeUser(formData);
    saveUser(user);
    window.location = '../map/index.html';
});