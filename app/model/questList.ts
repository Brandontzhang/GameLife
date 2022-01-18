import { Quest } from "./quest";

export class QuestList {
    // list of all questList
    questList : Quest[];
    // list of current questList being worked on (learn to update at the start of day/week/month?)
    acceptedQuests : Quest[];
    // list of completed questList
    completedQuests : Quest[];

    constructor() {
        this.questList = [
            new Quest("Eat a healthy lunch", "daily", 1, "health", "", ["Fitness"]),
            new Quest("Eat a healthy dinner", "daily", 1, "health", "", ["Fitness"]),
            new Quest("No unhealthy food", "daily", 1, "health", "", ["Fitness"]),
            new Quest("Gym", "daily", 1, "health", "", ["Fitness"]),
            // {name: "Make a cheese cake", repeat:"false", points: 1, type:"cooking", details: "", tags:["Cooking", "Hobby"]},
            // {name: "Make mooncakes", repeat:"false", points: 1, type:"cooking", details:"", tags:["Cooking", "Hobby"]},
            // {name: "Stretching", repeat:"false", points: 1, type:"health", details:"", tags:["Fitness", "Future"]},
            // {name: "Invest in S&P 500", repeat:"false", points: 1, type:"investing", details:"", tags:["Self improvement"]},
            // {name: "Leetcode/Daily Coding Question", repeat:"False", points:1, type:"coding", details:"", tags:["Work", "Code"]},
            // {name: "Game Life Development", repeat:"False", points:1, type:"coding", details:"", tags:["Work", "Code"]}
        ]

        this.acceptedQuests = []
        this.completedQuests = []
    }

    // doing the checks for the input quest on the app itself (Create)
    addQuest = (q : Quest) => {
        this.questList.push(q)
    }

    // Get all the questList (Read)
    getQuests = () => {
        return this.questList
    }

    // update the quest with the corresponding key (using name for now)
    updateQuest = (name: string, updatedQuest : Quest) => {
        this.questList = this.questList.map(q => {
            if (q.name === name) {
                // loop through updatedQuest to change q
                return q.updateQuest(updatedQuest)
            } else {
                return q
            }
        })
    }

    // remove quest with the corresponding name... i should add keys to these, but how? for now we use name (Delete)
    deleteQuest = (name: string) => {
        this.questList = this.questList.filter(q => q.name !== name)
    }

    // populate the accepted questList list according to preset conditions (ex adding in the daily questList)
    populateAcceptedQuests = () => {
        // for now just setting all questList to accepted questList
        this.questList.forEach(q => this.acceptedQuests.push(q))
    }

    // get list of currently accepted questList
    getAcceptedQuests = () => {
        return this.acceptedQuests
    }

    // accept a quest (add from quest list to accepted questList)
    acceptQuest = (q: Quest) => {
        
    }

    // complete a quest
    completeQuest = (q : Quest) => {
        // add points from the quest
    }
}