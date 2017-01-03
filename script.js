var hughesPoem = [ 'Like','a','welcome','summer','rain,','humor',
  'may','suddenly','cleanse','and','cool','the','earth,','the','air',
  'and','you.' ];
var currentIndex = 0;

console.log("JS");

//document ready with click event
$(document).ready(function(){
  console.log("JQ");
    $('#poemButton').on('click', addToPoem);
});

    function addToPoem(){
        $("#poemDiv").append(hughesPoem[currentIndex] + " ");
        currentIndex++;
        if (currentIndex >= hughesPoem.length){
          currentIndex = 0;
        }
     }
