function scoreFood(food) {
    if (food <= 0) {
        return 'dead';
    }
    if (food < 35) {
        return 'frail';
    }
    return 'healthy';
}

export default scoreFood;