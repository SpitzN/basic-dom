console.log(document)

const playingField = document.getElementById("playing-field")

// Spot check: target the div with an ID of down. Store it in a variable called down, 
// then console log it. Does it look as you expect?

// const down = document.getElementById("down")
// console.log(down.innerHTML)
// down.innerHTML = "down"
// console.log(playingField.innerHTML)
// playingField.style.backgroundColor = "blue"

// const ball = document.getElementById("block")
// ball.style.backgroundColor = "yellow"

const header = document.createElement("h1")
header.innerHTML = "The Best Game Ever"
header.style.color = "#c0392b"
document.body.appendChild(header)
header.setAttribute("class", "my-header")

const subHeader = document.createElement("h2")
subHeader.innerHTML = "Are You Ready?"
subHeader.setAttribute("class", "second-header")
document.body.appendChild(subHeader)

document.getElementById("block").style.backgroundColor = "yellow"

const moveRight = function (){
   const block = document.getElementById("block")
   let left = parseInt(block.style.left) || 0
   left += 15
   block.style.left = left + "px"
}

const moveLeft = function (){
    const block = document.getElementById("block")
    let left = parseInt(block.style.left) || 0
    left -= 15
    block.style.left = left + "px"
 }

 const moveUp = function (){
    const block = document.getElementById("block")
    let top = parseInt(block.style.top) || 0
    top -= 15
    block.style.top = top + "px"
 }

 const moveDown = function (){
    const block = document.getElementById("block")
    let top = parseInt(block.style.top) || 0
    top += 15
    block.style.top = top + "px"
 }

 const right = document.getElementById("right")
 right.onclick = moveRight

 const up = document.getElementById("up")
 up.onclick = moveUp
 
 const down = document.getElementById("down")
 down.onclick = moveDown

 const left = document.getElementById("left")
 left.onclick = moveLeft



// another way that saves a line:
// const up = document.getElementById("up")
// up.onclick = function (){
//    const block = document.getElementById("block")
//    let right = parseInt(block.style.right) || 0
//    right += 15
//    block.style.right = right + "px"
// }




