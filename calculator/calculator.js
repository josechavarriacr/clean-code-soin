class Calculator{
    constructor(items) {
        this.items = items
    }

    sum() {
        return this.items.reduce((accumulator, currentValue) => accumulator + currentValue)
    }

    sub() {
        return this.items.reduce((accumulator, currentValue) => accumulator - currentValue)
    }

    factorialize() {
        let num = this.items[0]
        if (num === 0 || num === 1) return 1;
        for (var i = num - 1; i >= 1; i--) {
            num *= i;
        }
        return num;
    }
}

module.exports = Calculator