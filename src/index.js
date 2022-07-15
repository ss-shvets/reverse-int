module.exports = function reverse(n) {
    const isNegativeArgument = (n) => {
        return Math.sign(n);
    };
    const reverseNumber = (n) => {
        return n.split("").reverse().join("");
    };
    function reverseNum(n) {
        return (
            parseFloat(
                n
                    .toString()
                    .split('')
                    .reverse()
                    .join('')
            ) * -1 * Math.sign(n)
        )
    }
    if (isNegativeArgument(n) === -1) {
        return(reverseNum(n))
    }



    if (isNegativeArgument(n) === 1) {
        return reverseNumber(n + '');
    }
}
