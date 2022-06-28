module.exports = function toReadable(number) {
    let units = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];

    let tens = [
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    let teen = [
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];

    function getUnits(num) {
        return units[num];
    }

    function getTens(num) {
        num = num % 100;

        /* 01 - 09 */
        if (num < 10) {
            return getUnits(num);
        }

        /* 10 - 19 */
        if (num >= 10 && num < 20) {
            return teen[num % 10];
        }

        /* 20 - 99 */
        if (num >= 20 && num < 100) {
            let _tens = Math.floor(num / 10);

            return num % 10 === 0
                ? tens[_tens - 2] //20, 30, .. 90
                : `${tens[_tens - 2]} ${getUnits(num % 10)}`;
        }
    }

    function getHundreds(num) {
        let hundreds = Math.floor(num / 100);

        return num % 100 === 0
            ? `${getUnits(hundreds)} hundred`
            : `${getUnits(hundreds)} hundred ${getTens(num)}`;
    }

    if (number < 10) {
        return getUnits(number);
    }

    if (number < 100) {
        return getTens(number);
    }

    if (number < 1000) {
        return getHundreds(number);
    }
};
