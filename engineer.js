class Engineer extends Employee {
    constructor(position, id) {
        const position = position;
        const id = id;

        super(position, id);
        this.position = position;
        this.id = id;
    }
}

module.exports = Engineer;