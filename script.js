
var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for(var i=0; i<names.length;i++){
  if(names[i][0]=="J"){
    SpeakGoodBye(names[i]);
  }
  else if (names[i]!=undefined){
    SpeakHello(names[i]);
  }
}