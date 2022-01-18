import { Item } from "./item"
import { User } from "./user"


export class ItemList {
    // tracking relationship between points and objects
    pointToItemConversion = [
        {type: "health", conversion: ["Food", "Entertainment", "Money"]},
        {type: "self improvement", conversion: ["Entertainment, Money"]},
        {type: "work", conversion: ["Entertainment, Money"]}
    ]

    // reverse
    itemToPointConversion = [
        {type:"Food", conversion:["health"]},
        {type:"Entertainment", conversion:["self improvement", "work", "health"]},
        {type:"Money", converstion:["self improvement", "work", "health"]}
    ]

    storeItems: Item[];
    inventory: Item[];
    user: User;

    constructor(user: User) {
        // the user we are working with
        this.user = user
        // items in the store
        this.storeItems = [
            new Item("Youtube", "1 hour", 1, "Entertainment"),
            new Item("Netflix", "1 hour", 1, "Entertainment"),
            new Item("Gaming", "1 hour", 1, "Entertainment"),
            new Item("Ebisuya Run", "Food from Ebisuya!", 5, "Food")
        ]
        // items that have been bought
        this.inventory = []
    }

    addStoreItem = (i: Item) => {
        this.storeItems.push(i)
    }

    getStore = () => {
        return this.storeItems
    }

    updateItem = (i: Item) => {
        this.storeItems = this.storeItems.map(item => {
            if (item.name = i.name) {
                return item.updateItem(i)
            } else {
                return item
            }
        })
    }

    deleteItem = (i: Item) => {
        this.storeItems = this.storeItems.filter(item => item.name !== i.name)
    }

    // buying the item (assume passed in correct item)
    // assume that the user gets to choose what kind of currency they are using... 
    // only the available point category will be displayed to them when redeeming
    purchaseItem = (i: Item, type: string) => {
        this.validPurchase(i, type)

        this.user.spendPoints(i.cost, type)

        const purchase = this.storeItems.find(item => item.name === i.name)
        this.storeItems = this.storeItems.filter(item => item.name !== i.name)

        if (purchase) {
            this.inventory.push(purchase)
        } else {
            throw new Error("Item not found")
        }
    }

    // determines if the item can be purchesed
    validPurchase = (i: Item, type: string) => {
        const points = this.user.getPoints(type)
        if (points < i.cost) {
            throw new Error("Not enough credits")
        }
    }
}
