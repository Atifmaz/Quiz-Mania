class Quiz {
    constructor() {

    }
    getState() {
      database.ref('gameState').on("value",(data)=>{
          gameState = data.val();
      })
    }
    update(state) {
        database.ref('/').update({
            gameState:state
        })
    }
    async start() {
        if(gameState === 0){
          contestant = new Contestant();
          var contestantCountRef = await database.ref('contestantCount').once("value")
          if(contestantCountRef.exists()){
              contestantCount = contestantCountRef.val();
              contestant.getCount();
          }
          question = new Question()
          question.display();
        }
    }

    play(){
        question.hide();

        Contestant.getInfo();

        if(allContestants!==undefined){
            var position = 210
            for(var i in allContestants){
                    if(allContestants[i].option === "2"){
                        fill('red')
                    }
                    else{
                        fill('black')
                    }

                    position+=30
                    textSize(14)
                    text(allContestants[i].name+" : "+allContestants[i].option, 580, position)
            }

            

        }
    }

    
}