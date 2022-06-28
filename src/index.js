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
        num = (num % 100).toString();

        /*01 - 09 */
        if (num < 10) {
            return getUnits(num);
        }

        /*10 - 19*/
        if (num[0] == 1) {
            return teen[num[1]];
        }

        /* 20 - 99 */
        if (num[0] > 1) {
            // 20, 30, 40 ...
            if (num[1] == 0) {
                return tens[num[0] - 2];
            } else {
                //21, 22...
                return `${tens[num[0] - 2]} ${getUnits(num[1])}`;
            }
        }
    }

    function getHundreds(num) {
        if (num % 100 == 0) {
            return `${getUnits(num[0])} hundred`;
        } else {
            return `${getUnits(num[0])} hundred ${getTens(num)}`;
        }
    }

    number = number.toString();

    if (number.length === 1) {
        return getUnits(number);
    }

    if (number.length === 2) {
        return getTens(number);
    }

    if (number.length === 3) {
        return getHundreds(number);
    }
};
