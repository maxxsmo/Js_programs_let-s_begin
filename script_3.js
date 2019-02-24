
let NumOfRows = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?")
var hash = "#";
var space = " ";
var hashNum = 1;
for(var i = NumOfRows; i > 0; i--){
  console.log(space.repeat(i - 1) + hash.repeat(hashNum))
  hashNum++;
}
