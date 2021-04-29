class Question{
constructor(){
    this.heading = createElement("h1")
    this.question = createElement("h3")
    this.option1 = createElement("h4")
    this.option2 = createElement("h4")
    this.option3 = createElement("h4")
    this.option4 = createElement("h4")

    this.inputName = createInput("Enter your Name")
    this.inputOption = createInput("Enter the Correct Option")

    this.submit = createButton("Submit")
}

hide(){
    this.inputName.hide()
    this.inputOption.hide()
    this.submit.hide()
}

display(){
    this.heading.position(360,30)
    this.heading.html("Quiz Mania")

    this.question.position(80,135)
    this.question.html("Q.When did Sri Lanka Had its Civil War Ended ?")

    this.option1.position(140,180)
    this.option1.html("A. 2010")

    this.option2.position(140,200)
    this.option2.html("B. 2009")

    this.option3.position(140,220)
    this.option3.html("C. 2007")

    this.option4.position(140,240)
    this.option4.html("D. 2011")

    this.inputName.position(450,300)
    this.inputOption.position(450,330)

    this.submit.position(350, 370)

    this.submit.mousePressed(()=>{
        this.inputName.hide()
        this.inputOption.hide()
        this.submit.hide()

        contestant.name = this.inputName.value()
        contestant.option = this.inputOption.value();

        contestantCount+=1

        contestant.update()
        contestant.updateCount(contestantCount)


           
    })
    

}



}