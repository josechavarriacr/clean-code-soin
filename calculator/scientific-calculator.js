const Calculator = require("./calculator");

class Scientific extends Calculator{
    constructor(items){
        super(items)
    }

    sub() {
        return this.items.reduce((accumulator, currentValue) => accumulator - currentValue)
    }
}

module.exports = Scientific