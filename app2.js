// document.querySelectorAll('.square') - use this node list to randomly assign alive or dead

let squares = document.querySelectorAll('.square')
let randomSquare = squares[Math.floor(Math.random() * squares.length)]



function revive(ele) {
  randomSquare = squares[Math.floor(Math.random() * squares.length)]
  console.log(randomSquare)
  ele.style.backgroundColor = 'black';
}

function kill(ele) {
  randomSquare = squares[Math.floor(Math.random() * squares.length)]
  ele.style.backgroundColor = 'white'
}

function change() {

    for (let i = 0; i < squares.length; i++) {

      if (squares[i].style.backgroundColor == 'black') {
        squares[i].style.backgroundColor = 'white'
      } else {
        squares[i].style.backgroundColor = 'black'
      }

    }
}







// function myFunction() {
//   var x = document.getElementsByClassName("example");
//   var i;
//   for (i = 0; i < x.length; i++) {
//     x[i].style.backgroundColor = "red";
//   }
// }