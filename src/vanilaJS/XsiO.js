<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tic Tac Toe</title>
  <style>
    .row {
      display: flex;
    }
    .square {
      width: 60px;
      height: 60px;
      background-color: #ddd;
      margin: 4px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 20px;
      color: white;
      cursor: pointer;
    }
    .board {
      background-color: #eee;
      width: 208px;
      align-items: center;
      justify-content: center;
      display: flex;
      flex-direction: column;
      border: 3px #eee solid;
    }
    .container {
      display: flex;
      align-items: center;
      flex-direction: column;
    }
    .instructions {
      margin-top: 5px;
      margin-bottom: 5px;
      font-weight: bold;
      font-size: 16px;
    }
    .reset-button {
      margin-top: 15px;
      margin-bottom: 16px;
      width: 80px;
      height: 40px;
      background-color: #8acaca;
      color: white;
      font-size: 16px;
    }
  </style>
</head>
<body>

<div class="container" id="game">
  <div id="statusArea" class="instructions">Next player: <span id="nextPlayer">X</span></div>
  <div id="winnerArea" class="instructions">Winner: <span id="winner">None</span></div>
  <button class="reset-button" id="resetButton">Reset</button>
  <div class="board" id="board">
    <div class="row">
      <div class="square" data-index="0"></div>
      <div class="square" data-index="1"></div>
      <div class="square" data-index="2"></div>
    </div>
    <div class="row">
      <div class="square" data-index="3"></div>
      <div class="square" data-index="4"></div>
      <div class="square" data-index="5"></div>
    </div>
    <div class="row">
      <div class="square" data-index="6"></div>
      <div class="square" data-index="7"></div>
      <div class="square" data-index="8"></div>
    </div>
  </div>
</div>

<script>
  const squares = Array(9).fill(null);
  let xIsNext = true;

  function handleClick(event) {
    const index = event.target.getAttribute('data-index');
    if (squares[index] || calculateWinner(squares)) {
      return;
    }
    squares[index] = xIsNext ? 'X' : 'O';
    xIsNext = !xIsNext;
    render();
  }

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  function resetGame() {
    for (let i = 0; i < squares.length; i++) {
      squares[i] = null;
    }
    xIsNext = true;
    render();
  }

  function render() {
    const board = document.getElementById('board');
    const nextPlayerSpan = document.getElementById('nextPlayer');
    const winnerSpan = document.getElementById('winner');
    const winner = calculateWinner(squares);
    
    nextPlayerSpan.textContent = xIsNext ? 'X' : 'O';
    winnerSpan.textContent = winner ? winner : 'None';

    const squareDivs = board.getElementsByClassName('square');
    for (let i = 0; i < squareDivs.length; i++) {
      squareDivs[i].textContent = squares[i];
    }
  }

  document.getElementById('resetButton').addEventListener('click', resetGame);

  const squareDivs = document.getElementsByClassName('square');
  for (let i = 0; i < squareDivs.length; i++) {
    squareDivs[i].addEventListener('click', handleClick);
  }

  render();
</script>

</body>
</html>
