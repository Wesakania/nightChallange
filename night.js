/*function greetings(){
  alert("hello world");
}
greetings();*/

function clubing(){
  let age = prompt("How old are you?");
  let outing = age;
  if(outing <=18){
    alert("What the fack are you doing here?");
  }else if(outing <= 25){
    alert("Did you ask permission from your parents?");
  }else if(outing <=30){
    alert("When are you getting mariied?");
  }else{
    return "You can join the club";
  }
}
clubing();