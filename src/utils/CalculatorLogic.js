export const add = (numbers) => {
    if (!numbers) return 0;

    let delimiter = /,|\n/;  

    const customDelimiterMatch = numbers.match(/^\/\/(.+)\n(.*)/);

    if (customDelimiterMatch) {
        const rawDelimiter = customDelimiterMatch[1];
        const escapedDelimiter = rawDelimiter.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');

        delimiter = new RegExp(escapedDelimiter);
        numbers = customDelimiterMatch[2];
    }

    const sanitizedNumbers = numbers.split(delimiter).map((num) => num.trim());

    const nums = sanitizedNumbers.map((num) => parseInt(num) || 0);
    const negatives = nums.filter((num) => num < 0);

    if (negatives.length > 0) {
        throw new Error(`Negatives not allowed: ${negatives.join(", ")}`);
    }

    return nums.reduce((acc, curr) => acc + curr, 0);
};
