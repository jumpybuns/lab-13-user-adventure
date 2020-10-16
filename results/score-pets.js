function scorePets(pets) {
    if (pets === 0) {
        return 'poor';   
    }
    else if (pets < 50) {
        return 'modest';   
    }
    return 'rich';
}

export default scorePets;