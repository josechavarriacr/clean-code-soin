class Calculator{
    constructor(items) {
        this.items = items
    }

    sum() {
        return this.items.reduce((accumulator, currentValue) => accumulator + currentValue)
    }

    sub() {
        // Abstract process  || Polymorphism
    }
}

module.exports = Calculator