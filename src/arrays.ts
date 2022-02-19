/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    let nums = [...numbers];

    if (nums.length > 1) {
        nums = nums.filter(
            (num: number): boolean =>
                num === nums[0] || num === nums[nums.length - 1]
        );
    } else if (nums.length === 1) {
        nums = [nums[0], nums[0]];
    }

    return nums;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripled = numbers.map((num: number): number => num * 3);
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    let nums = numbers.map((num: string): number => ~~num);
    return nums;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    let vals = amounts.map((val: string): string =>
        val.substring(0, 1) === "$" ? val.substring(1) : val
    );
    let nums = vals.map((num: string): number => ~~num);
    return nums;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    let msgs = messages.map((msg: string): string =>
        msg.includes("!") ? msg.toUpperCase() : msg
    );
    msgs = msgs.filter((msg: string): boolean => !msg.includes("?"));
    return msgs;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    let wrds = words.filter((word: string): boolean => word.length < 4);
    let sum = wrds.reduce((total: number, word: string) => total + 1, 0);
    return sum;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    let cols = colors.every(
        (col: string): boolean =>
            col === "blue" || col === "red" || col === "green"
    );
    return cols;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length < 1) {
        return "0=0";
    } else {
        let sum = addends.reduce(
            (total: number, num: number) => total + num,
            0
        );
        return sum + "=" + addends.join("+");
    }
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    let vals = [...values];
    if (!values.find((value: number): boolean => value < 0)) {
        let sum = values.reduce((total: number, val: number) => total + val, 0);
        vals.push(sum);
    } else {
        let index = vals.findIndex((value: number): boolean => value < 0); //Finds the negative number

        let temp = vals.filter(
            (val: number): boolean =>
                vals.findIndex((value: number): boolean => value === val) <
                index
        ); //Gets rid of numbers after it

        let sum = temp.reduce((total: number, val: number) => total + val, 0);
        vals.splice(index + 1, 0, sum);
    }

    return vals;
}
