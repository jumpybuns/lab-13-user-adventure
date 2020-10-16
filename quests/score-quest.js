function scoreQuest(choice, questId, user) {

    user.food += choice.food;
    user.pets += choice.pets;
    user.completed[questId] = true;
}

export default scoreQuest;