// will need to call services to interact with the database and update the point values there...

export class User {
    pointCategories: {type:string, amount:number}[]

    constructor() {
        this.pointCategories = [
            {type: "health", amount: 0},
            {type: "self improvement", amount: 0},
            {type: "work", amount: 0}
        ]
    }
    
    getPointCategory = (type : string) => {
        var pointCategory = this.pointCategories.find(p => p.type === type)
        if (!pointCategory) {
            throw new Error(`${type} is not a point category`)
        }
        return pointCategory
    }
    
    getPoints = (type: string) => {
        var pointCategory = this.getPointCategory(type)
        return pointCategory.amount 
    } 
    
    addPoints = (p: number, type:string) => {
        var pointCategory = this.getPointCategory(type)
        this.pointCategories.map(pc => {
            if (pc.type === type) {
                pc.amount = pc.amount + p
            }
        })
    }
    
    spendPoints = (p: number, type: string) => {
        // need to check that you have enough points...
        p = p * -1
        this.addPoints(p, type)
    }
    
}