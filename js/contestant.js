class Contestant {
    constructor() {
       this.name = null
       this.option = null
    }

    getCount() {
        database.ref('contestantCount').on("value", (data) => {
            contestantCount = data.val();
        })
    }

    updateCount(count) {
        database.ref('/').update({
            contestantCount: count
        })
    }

    update(){
        var contestantNumber = "contestants/contestant" + contestantCount
        database.ref(contestantNumber).set({
            name:this.name,
            option:this.option
        })
    }

    static getInfo(){
        var contest = database.ref("contestants")
        contest.on("value", (data)=>{
            allContestants = data.val();
        })
    }
}