// setup canvas
let canvas = document.getElementById('display')
canvas.width = document.body.clientWidth
canvas.height = document.body.clientHeight
let ctx = canvas.getContext('2d')

// variables
let gridSize = 40
let gridWidth = Math.floor(canvas.width / gridSize)
let gridHeight = Math.floor(canvas.height / gridSize)

// todo represent a snake using an array
let snake = [
  {x: 5, y: 3},
  {x: 4, y: 3},
  {x: 3, y: 3},
  {x: 3, y: 2},
]

// todo specify an initial direction
let direction = 'right'

// todo implement drawSnake
function drawSnake() {
  let head = snake[0]
  drawHead(head.x, head.y)

  for (let i = 1; i < snake.length; i++) {
    let body = snake[i]
    drawSquare(body.x, body.y)
  }
}

// draw helpers
function erase() {
  ctx.fillStyle = '#000044'
  ctx.fillRect(0, 0, canvas.width, canvas.height)
}
function drawSquare(x, y) {
  ctx.fillStyle = 'green'
  ctx.fillRect(x * gridSize, y * gridSize, gridSize, gridSize)
}
function drawHead(x, y) {
  ctx.fillStyle = 'darkgreen'
  ctx.fillRect(x * gridSize, y * gridSize, gridSize, gridSize)
}
function drawCircle(x, y) {
  ctx.fillStyle = 'red'
  ctx.beginPath()
  ctx.arc((x + 0.5) * gridSize, (y + 0.5) * gridSize, gridSize / 2, 0, 2 * Math.PI)
  ctx.fill()
}

// todo handle user input
window.addEventListener('keydown', event => {
  console.log(event.code)
  if (event.code === 'ArrowRight') {
    direction = 'right'
  }
  if (event.code === 'ArrowLeft') {
    direction = 'left'
  }
  if (event.code === 'ArrowUp') {
    direction = 'up'
  }
  if (event.code === 'ArrowDown') {
    direction = 'down'
  }
})

// todo program the game loop
function loop() {
  let head = snake[0]

  // handle the "right" direction
  if (direction === 'right') {
    let newHead = {x: head.x + 1, y: head.y}
    snake.unshift(newHead)
  }
  if (direction === 'left') {
    let newHead = {x: head.x - 1, y: head.y}
    snake.unshift(newHead)
  }
  if (direction === 'up') {
    let newHead = {x: head.x, y: head.y - 1}
    snake.unshift(newHead)
  }
  if (direction === 'down') {
    let newHead = {x: head.x, y: head.y + 1}
    snake.unshift(newHead)
  }
  
  snake.pop()

  erase()
  drawSnake()
  drawCircle(7, 3)
}
setInterval(loop, 100)


// Discussion:
// - How can we represent a snake using an array?
//   - array of arrays - the inner array would store the x and y coordinate
//   - e.g. [[10, 10], [11, 10]]
//   - array of objects - the object stores x and y coordinate as properties
//   - e.g. [{x: 10, y: 10}, {x: 11, y: 10}]
// - How can we draw the snake?
//   - call a function that goes thru each item of the snake array
//   - and either call drawSquare or drawHead
// - How can we move the snake over time?
//   - keep track of current direction
//   - depending on value of direction, we want to add one square
//     in the front of the snake, and then remove the tail of the snake
// - How can the user change the direction of the snake?
//   - keep track of current direction
//   - listen for keydown events
//   - check if arrow keys has been pressed
//   - if true, set the direction variable to a value that corresponds
//     to the new direction





