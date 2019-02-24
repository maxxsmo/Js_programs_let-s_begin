
let num = prompt("choisi un nombre ?");

function factorial(x){ 
  if (x === 0){
    return 1;
 } return x * factorial(x-1);         
}

console.log("Le résultat est : " + factorial(num));

// fonction sans recursivité :

  // function factorial(x) {
  //   for (var i = (x-1); i > 0; i--)
  //     x = x * i;
  //   return x;
  // }


