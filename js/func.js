// Generates a random integer between 0 and max value
function randomInt(max) {
    return Math.floor(Math.random() * (max + 1));
}

// Pushes values of array up by 1 index
function pushVals(arr, index) {
    for (let i = index; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1];
    }
    arr.length--;
}

// Generates random order of numbers (using all numbers between 0 and max value)
function randOrder(max) {
    const nums = [];
    const order = [];
    let order_index = 0;

    for (let i = 0; i <= max; i++) {
        nums[i] = i;
    }

    while (nums.length > 0) {

        let nums_index = randomInt(nums.length - 1);
        let value = nums[nums_index];
        order[order_index] = value;
        pushVals(nums, nums_index);
        order_index++;
    }
    return order;
}