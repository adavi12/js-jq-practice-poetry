var hughesPoem = [ 'Like','a','welcome','summer','rain,','humor',
  'may','suddenly','cleanse','and','cool','the','earth,','the','air',
  'and','you.' ];
var currentIndex = 0;

console.log("JS");

//document ready with click event
$(document).ready(function(){
  console.log("JQ");
  $("#poemButton").click(function(){
    console.log("Poem Button clicked");
    hughesPoem.forEach(function(div){
      console.log(div);
    });
});
});
//a function for append word and update currentIndex
