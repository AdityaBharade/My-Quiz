class Question {

    constructor(){

    this.reset = createButton("Reset")
    this.input1 = createButton("h2");
    this.title = createElement("h3");
    this.question = createElement('h3')
    this.option1 = createElement("h2");
    this.option2 = createElement("h2")
    this.option3 = createElement("h2")
    this.option4 = createElement("h2")
    this.name = createInput("Enter Your Name Here..")
    this.Answer = createInput("Enter Answer No. Here..")

    
    
    }
    
    hide_details(){
        this.input1.hide() 
        this.title.hide() 
        this.question.hide() 
        this.option1.hide() 
        this.option2.hide() 
        this.option3.hide()  
        this.option4.hide() 
        
    
    }
    
    
    
    display(){

    this.title.html("My Quiz Game");
    this.title.position(350,50);

    this.question.html("Question: What is the total number of STATES IN INDIA?");
    this.question.position(150,80);
    this.option1.html("1 : 19");
    this.option1.position(150,150);
    this.option2.html("2 : 34");
    this.option2.position(150,200);
    this.option3.html("3 : 27");
    this.option3.position(300,150);
    this.option4.html("4 : 29");
    this.option4.position(300,200);
    
    this.name.position(150,300);

    this.Answer.position(350,300);

    this.input1.html("Submit");
    this.input1.position(280,350);
    
    this.input1.mousePressed(()=>{
    
    this.title.hide();
    this.input1.hide();
    this.name.hide();
    this.Answer.hide();

    
    contestant.name = this.name.value();
    contestant.answer = this.Answer.value();
    contestantCount = contestantCount+1;
    contestant.index = contestantCount
    contestant.update()
    contestant.updateCount(contestantCount);
   
    })

    this.reset.position(700,50);

    this.reset.mousePressed(()=>{

        contestant.updateCount(0);
        game.update(0);
        
    })
    
    
}
play(){

background("yellow");

textSize(70);
text("Results",400,50);

//contestant.getContestantInfo();

if(allContestants!== undefined){
   
    display_position += 20;

    for(var plr in allContestants){
        var correctAns = "4"
    
        if(correctAns===allContestants[plr].Answer){
            fill("green")
        }
            else {
            fill ("red")
            }

            display_position += 20;
        }
}
    
    }
}