class Contestant {

    constructor(){
    this.index = null
    this.name = null
    this.answer = null
     
    }
    
    getCount(){
    
    var contestantCountref = database.ref('contestantCount')
    contestantCountref.on('value',function(data){
    
    contestantCount = data.val();
    
    
    })
    
    }
    updateCount(count){
    
    database.ref('/').update({
    
        contestantCount : count
    
    })
    
    }
    
    update(){
    
    var contestantIndex = "contestants/contestant" + this.index;
    database.ref(contestantIndex).set({
    
    name : this.name,
    answer : this.answer
    
    
    })
    
    }
    
    
    static  getContestantInfo(){
    var contestantInfoRef = database.ref('contestantCount')
    contestantInfoRef.on('value',(data)=>{
    
    allContestants= data.val()
    })
    
    }
    
    }