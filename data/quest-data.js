const outside = {
    id: 'outside',
    title: 'Wanna Go Outside?',
    map: {
        top: '89%',
        left: '44%'
    },
    image: 'outside.jpg',
    description: `
        Its a beautiful day for zoomies in the backyard.
    `,
    choices: [{
        id: 'bark',
        description: 'Bark at the mail carrier',
        result: `
        No no no no, too loud. Shhhhh the baby's sleeping. I am retracting 35 pets from you. 
                `,
        pets: -35,
        food: 0
    }, {
        id: 'chase',
        description: 'Chase squirrel',
        result: `
        Thank you saving my veggie garden from those blood thirsty squirrels. Here is a 15 food treat for you.
        `,
        pets: 0,
        food: 15
    }, {
        id: 'potty',
        description: 'Go potty on the lawn',
        result: `
        Good doggie, you went potty where you're supposed to, let me give you 20 pets
        `,
        pets: 20,
        food: 0
    }]
};
const livingRoom = {
    id: 'living-room',
    title: 'The Living Room',
    map: {
        top: '89%',
        left: '44%'
    },
    image: 'living-room.jpg',
    description: `
            The comfiest spots in the house (besides your couch) are in here as well as your toys and dog bed.
    `,
    choices: [{
        id: 'snuggle',
        description: 'Snuggle up to your human family',
        result: `
            Oh my gosh this is too cute. Now how am I supposed to get anything done? I cant even get up! Here is 1000 pets. 
        `,
        pets: 1000,
        food: 0
    }, {
        id: 'crawl',
        description: 'Crawl under the coffee table',
        result: `
            Its so nice and protected under there, I can see why like it. You finally get some peace and quiet. But unfortunately i cant pet or give you treats under there.
        `,
        pets: -15,
        food: 0
    }, {
        id: 'toy',
        description: 'Go Get Your Toy, Lets Play!',
        result: `
            There you go, get that toy. Now go chase it. Good doggie, here's a 20 pets and 5 treats.
        `,
        pets: 20,
        food: 5
    }]
};
const kitchen = {
    id: 'kitchen',
    title: 'Enter the Kitchen',
    map: {
        top: '89%',
        left: '44%'
    },
    image: 'kitchen.jpg',
    description: `
        Yo doggie, this is where the treats and food is kept. You know what that means!
    `,
    choices: [{
        id: 'garbage',
        description: 'Eat Out of the Garbage',
        result: `
            Oh bad dog, I do not want to clean that up. Oh no did you eat gum too?! Im retracting 300 pets, but there was 20 food in there.
        `,
        pets: -300,
        food: 20
    }, {
        id: 'dinner',
        description: 'Eat your dinner baby doggie, go and have it!',
        result: `
            Good dog, you ate it all up like a good dog. That's 300 food and 1 pets
        `,
        pets: 1,
        food: 300
    }, {
        id: 'beg',
        description: 'Beg for treats',
        result: `
            Ok you can have 25 treats and 30 pets but dont spoil your dinner.
        `,
        pets: 30,
        food: 25
    }]
};

const quests = [
    outside,
    livingRoom,
    kitchen
];

export default quests;