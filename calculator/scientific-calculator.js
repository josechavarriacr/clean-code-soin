const Calculator = require("./calculator");

class Scientific {
    constructor(items){
       this.items = items
       this.calculator = new Calculator(items)
    }

    sum() {
        return this.calculator.sum()
    }
    
    sub() {
        return this.items.reduce((accumulator, currentValue) => accumulator - currentValue)
    }
}

module.exports = Scientific