const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

const board = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];

let currentPlayer = 'X';
const statusDisplay = document.getElementById('status');
const container = document.getElementById('board');

function initializeGame() {
  for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
          const cell = document.createElement('button');
          cell.className = 'cell';
          cell.dataset.row = row;
          cell.dataset.col = col;
          cell.addEventListener('click', handleCellClick);
          container.appendChild(cell);
      }
  }
  updateStatus();
}

function handleCellClick(event) {
  const row = parseInt(event.target.dataset.row);
  const col = parseInt(event.target.dataset.col);
  if (!board[row][col]) {
      board[row][col] = currentPlayer;
      event.target.textContent = currentPlayer;
      event.target.dataset.player = currentPlayer;
      
      if (checkWin()) {
          statusDisplay.textContent = `Player ${currentPlayer} wins!`;
          endGame();
      } else if (checkDraw()) {
          statusDisplay.textContent = "It's a draw!";
          endGame();
      } else {
          currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
          updateStatus();
      }
  }
}

function checkWin() {
  const flatBoard = board.flat();
  return winningConditions.some(condition => 
      condition.every(index => flatBoard[index] === currentPlayer)
  );
}

function checkDraw() {
  return board.flat().every(cell => cell !== '');
}

function updateStatus() {
  statusDisplay.textContent = `Player ${currentPlayer}'s turn`;
}

function endGame() {
  document.querySelectorAll('.cell').forEach(cell => {
      cell.removeEventListener('click', handleCellClick);
  });
}

function resetGame() {
  board.forEach(row => row.fill(''));
  document.querySelectorAll('.cell').forEach(cell => {
      cell.textContent = '';
      cell.removeAttribute('data-player');
      cell.addEventListener('click', handleCellClick);
  });
  currentPlayer = 'X';
  updateStatus();
}

// Initialize the game
initializeGame();

// Add event listener for reset button
document.getElementById('resetButton').addEventListener('click', resetGame);