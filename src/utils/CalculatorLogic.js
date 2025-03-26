export const add = (numbers) => {
    if (!numbers) return 0;

    const nums = numbers.split(",").map((num) => num.trim());

    if (nums.length > 2) return 0;

    const sum = nums.reduce((acc, curr) => acc + (parseInt(curr) || 0), 0);
    return sum;
};