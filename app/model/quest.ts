export class Quest {
    id: number;
    name: string;
    repeat: string;
    points: number;
    type: string;
    details: string;
    tags: string[];

    // No constructor overloading in typescript for some reason...
    constructor(id: number, name: string, repeat: string, points: number, type: string, details: string, tags: string[]) {
        this.id = id;
        this.name = name;
        this.repeat = repeat;
        this.points = points;
        this.type = type;
        this.details = details;
        this.tags = tags;
    }

    updateQuest = (update: Quest) => {
        this.name = update.name;
        this.repeat = update.repeat;
        this.points = update.points;
        this.type = update.type;
        this.details = update.details;
        this.tags = update.tags;

        return this
    }
}