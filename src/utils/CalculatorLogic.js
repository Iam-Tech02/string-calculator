export const add = (numbers) => {
    if (!numbers) return 0;

    let delimiter = /,|\n/;  

    const customDelimiterMatch = numbers.match(/^\/\/(\[.*\])\n(.*)/);

    if (customDelimiterMatch) {
        const rawDelimiters = customDelimiterMatch[1];   
        numbers = customDelimiterMatch[2];               

        const delimiterRegex = /\[(.*?)\]/g;
        let match;
        const delimiters = [];

        while ((match = delimiterRegex.exec(rawDelimiters)) !== null) {
            delimiters.push(match[1]);
        }

        const escapedDelimiters = delimiters.map((delim) =>
            delim.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')  
        );

        delimiter = new RegExp(escapedDelimiters.join('|'));
    }

    const sanitizedNumbers = numbers.split(delimiter).map((num) => num.trim());

    const nums = sanitizedNumbers
        .map((num) => parseInt(num) || 0)
        .filter((num) => num <= 1000);  

    const negatives = nums.filter((num) => num < 0);

    if (negatives.length > 0) {
        throw new Error(`Negatives not allowed: ${negatives.join(", ")}`);
    }

    return nums.reduce((acc, curr) => acc + curr, 0);
};
