


var squares_per_grid = 37;

function generateGrid() {
  let canvas = document.querySelector(".canvas");
  let blockDiv;  // used in the for loop

  for(var i = 1; i < squares_per_grid; i++) {
    for(var j = 1; j < squares_per_grid; j++) {
      blockDiv = document.createElement("div");
      blockDiv.className = `square`;
      blockDiv.id = `R${[i]}C${[j]}`;
      canvas.append(blockDiv);
    }
  }
}
generateGrid()

function randomlyReviveSquares() {

  let allSquares = document.querySelectorAll('.square')
  for (let i = 0; i < 50; i++) {
  let index = Math.floor(Math.random() * allSquares.length)    
  allSquares[index].style.backgroundColor = 'black'
  allSquares[index].classList.add('clicked')
    // debugger

  }


// console.log(shesAliveDammit)
}

function checkNeighborhood() {
  let self = document.querySelector('.clicked')
  let shesAliveDammit = document.querySelectorAll('.clicked')
  let selfLocation = self.id
  console.log(selfLocation, typeof(selfLocation))
  let row = Number(selfLocation.match(/\d+/g)[0])
  let col = Number(selfLocation.match(/\d+/g)[1])
  let neighbor1 = document.querySelector(`#R${row-1}C${col-1}`)
  let neighbor2 = document.querySelector(`#R${row-1}C${col}`)
  let neighbor3 = document.querySelector(`#R${row-1}C${col+1}`)
  let neighbor4 = document.querySelector(`#R${row}C${col+1}`)
  let neighbor5 = document.querySelector(`#R${row}C${col-1}`)
  let neighbor6 = document.querySelector(`#R${row+1}C${col-1}`)
  let neighbor7 = document.querySelector(`#R${row+1}C${col}`)
  let neighbor8 = document.querySelector(`#R${row+1}C${col+1}`)

  neighbor1.style.backgroundColor = 'red'
  neighbor2.style.backgroundColor = 'red'
  neighbor3.style.backgroundColor = 'red'
  neighbor4.style.backgroundColor = 'red'
  neighbor5.style.backgroundColor = 'red'
  neighbor6.style.backgroundColor = 'red'
  neighbor7.style.backgroundColor = 'red'
  neighbor8.style.backgroundColor = 'red'
}


function checkAllNeighbors() {
  let shesAliveDammit = document.querySelectorAll('.clicked')
  console.log(shesAliveDammit)

  for (let i = 0; i < shesAliveDammit.length; i++) {

    let row = Number(shesAliveDammit[i].id.match(/\d+/g)[0])
    let col = Number(shesAliveDammit[i].id.match(/\d+/g)[1])
    var neighbor1 = document.querySelector(`#R${row-1}C${col-1}`)
    console.log(neighbor1)
    var neighbor2 = document.querySelector(`#R${row-1}C${col}`)
    var neighbor3 = document.querySelector(`#R${row-1}C${col+1}`)
    var neighbor5 = document.querySelector(`#R${row}C${col+1}`)
    var neighbor6 = document.querySelector(`#R${row}C${col-1}`)
    var neighbor4 = document.querySelector(`#R${row+1}C${col+1}`)
    var neighbor7 = document.querySelector(`#R${row+1}C${col}`)
    var neighbor8 = document.querySelector(`#R${row+1}C${col-1}`)

    // console.log((neighbor1.classList.contains('clicked') ))
    // debugger

    neighbor1? neighbor1.classList.contains('clicked') ? neighbor1.style.backgroundColor = 'black' : neighbor1.style.backgroundColor = 'green' : shesAliveDammit[i].style.backgroundColor = 'black'
    neighbor2? neighbor2.classList.contains('clicked') ? neighbor2.style.backgroundColor = 'black' : neighbor2.style.backgroundColor = 'green' : shesAliveDammit[i].style.backgroundColor = 'black'
    neighbor3? neighbor3.classList.contains('clicked') ? neighbor3.style.backgroundColor = 'black' : neighbor3.style.backgroundColor = 'green' : shesAliveDammit[i].style.backgroundColor = 'black'
    neighbor4? neighbor4.classList.contains('clicked') ? neighbor4.style.backgroundColor = 'black' : neighbor4.style.backgroundColor = 'green' : shesAliveDammit[i].style.backgroundColor = 'black'
    neighbor5? neighbor5.classList.contains('clicked') ? neighbor5.style.backgroundColor = 'black' : neighbor5.style.backgroundColor = 'green' : shesAliveDammit[i].style.backgroundColor = 'black'
    neighbor6? neighbor6.classList.contains('clicked') ? neighbor6.style.backgroundColor = 'black' : neighbor6.style.backgroundColor = 'green' : shesAliveDammit[i].style.backgroundColor = 'black'
    neighbor7? neighbor7.classList.contains('clicked') ? neighbor7.style.backgroundColor = 'black' : neighbor7.style.backgroundColor = 'green' : shesAliveDammit[i].style.backgroundColor = 'black'
    neighbor8? neighbor8.classList.contains('clicked') ? neighbor8.style.backgroundColor = 'black' : neighbor8.style.backgroundColor = 'green' : shesAliveDammit[i].style.backgroundColor = 'black'

  }
}


$( ".square" ).click(function() {
  $( this ).css("background-color", "black")
  $( this ).addClass('clicked')
});
