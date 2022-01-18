export class Item {
    name: string;
    details: string;
    cost: number;
    type: string;

    constructor(name: string, details: string, cost: number, type: string) {
        this.name = name;
        this.details = details;
        this.cost = cost;
        this.type = type
    }

    updateItem(i : Item) {
        this.name = i.name;
        this.details = i.details;
        this.cost = i.cost;
        this.type = i.type;

        return this;
    }
}