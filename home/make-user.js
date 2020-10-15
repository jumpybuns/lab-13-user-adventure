export function makeUser(formData) {
    const user = {
        name: formData.get('name'),
        breed: formData.get('breed'),
        food: 50,
        pets: 0,
        completed: {}

    };
    return user;
}

export const newMakeUser = (formData) => ({
    name: formData.get('name'),
    breed: formData.get('breed'),
    food: 50,
    pets: 0,
    completed: {}

});

export default makeUser;