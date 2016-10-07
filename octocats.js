//Write your constructor function below.
//You should have 2 instance variables and 1 instance function included.

function Octocat(n,a){
  this.octocatName=n
  this.octocatArms=a

  this.slap = function(){
    var a = 800
    for(var c=0;c<a;c++){
      console.log("SLAP");
    }
  }
}


//Write your 3 new octocat objects below here.
var myocotcat = new Octocat ("James",520)
var heroctocat = new Ocotcat ("Harry", 670)
var hisoctocat = new Octocat ("Victor", 780)
