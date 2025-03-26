export const add = (numbers) => {
    if (!numbers) return 0;

    const nums = numbers
        .split(",")
        .map((num) => num.trim())
        .map((num) => parseInt(num) || 0);

    const sum = nums.reduce((acc, curr) => acc + curr, 0);

    return sum;
};