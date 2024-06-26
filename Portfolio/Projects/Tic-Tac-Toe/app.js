const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

const board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];
let container = document.getElementById('board')
for (const row of board) {
    for (let cell of row) {
        cell = document.createElement('button')
        let cellAtt = document.createAttribute('class')
        cellAtt.value = "cell"
        cell.setAttributeNode(cellAtt)
        container.appendChild(cell)
    }
}

document.querySelectorAll('.cell').forEach(cell => {
    cell.addEventListener('click', handleCellClick);
  });
  function handleCellClick(event) {
    const row = event.target.dataset.row;
    const col = event.target.dataset.col;
    if (!board[row][col]) {
      board[row][col] = 'X';
      event.target.textContent = 'X';
    }
  }

