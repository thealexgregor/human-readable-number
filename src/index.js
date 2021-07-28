module.exports = function toReadable(num) {
    const th = ["", "thousand", "million", "billion", "trillion"];
    const dg = [
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
    const tn = [
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
    const tw = [
        "ten",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    let str = num.toString();
    let n = str.split("");
    let nLength = n.length;
    let a = +(n[1] + n[2]);

    if (nLength === 1) {
        return dg[num];
    } else if (nLength === 2 && num >= 10 && num < 20) {
        let output = `${tn[num - 10]}`;
        return output;
    } else if (nLength === 2 && num % 10 === 0) {
        return tw[+n[0] - 1];
    } else if (nLength === 2 && num >= 20) {
        return `${tw[+n[0] - 1]} ${dg[+n[1]]}`;
    } else if (nLength === 3 && num % 100 === 0) {
        let output = `${dg[num / 100]} hundred`;
        return output;
    } else if (nLength === 3 && num % 100 != 0) {
        if (+n[1] === 0) {
            return `${dg[+n[0]]} hundred ${dg[+n[2]]}`;
        } else if (a > 10 && a < 20) {
            return `${dg[+n[0]]} hundred ${tn[a - 10]}`;
        } else if (a % 10 === 0) {
            return `${dg[+n[0]]} hundred ${tw[+n[1] - 1]}`;
        }
        return `${dg[+n[0]]} hundred ${tw[+n[1] - 1]} ${dg[+n[2]]}`;
    }
};
