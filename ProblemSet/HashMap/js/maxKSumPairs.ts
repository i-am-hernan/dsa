function maxOperations(nums: number[], k: number): number {
    let pairs = new Map()
    let max: number = nums.reduce(function (acc, value) {
        let compliment = k - value;

        if (pairs.get(compliment) != undefined && pairs.get(compliment) > 0) {
            pairs.set(compliment, pairs.get(compliment) - 1)
            return acc += 1;
        }
        pairs.set(value, (pairs.get(value) ?? 0) + 1)
        return acc;
    }, 0)

    return max;
};
