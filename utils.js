import { getUser } from '../data/api.js';

export function loadProfile() {
    const name = document.getElementById('name');
    // const breed = document.getElementById('breed');
    const food = document.getElementById('food');
    const pets = document.getElementById('pets');

    const user = getUser();

    if (!user) {
        window.location = './';

    }
    name.textContent = user.name;
    // breed.src = '../assets/' + user.breed + '.png';
    pets.textContent = user.pets;

    if (isDead(user)) {
        food.textContent = 'ALL DOGS GO TO HEAVEN';

    }
    else {
        food.textContent = user.food;
    }
}





export function findById(someArray, someId) {
    for (let i = 0; i < someArray.length; i++) {
        const item = someArray[i];
        if (item.id === someId) {
            return item;
        }
    }
    return null;    
}

export function isDead(user) {
    return user.food <= 0;

}

