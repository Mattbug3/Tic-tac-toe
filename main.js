const cells = document.querySelectorAll(".cell");
const cellsArr = Array.from(cells);


let currentPlayer = "X";

let winningCombinations = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6]
];

function checkForWinner(){
	winningCombinations.forEach(function(combination) {
		let check = combination.every(index => cellsArr[index].textContent.trim() === currentPlayer);
		if(check){
	   	document.querySelector("#win-text").textContent = `${currentPlayer}'s Won!`
		}
		
	})
}

cells.forEach(function(cell){
	cell.addEventListener("click", function(){
		if(cell.textContent.trim() !== "") return;
		cell.textContent = currentPlayer;
		currentPlayer = currentPlayer == "X" ? "O" : "X";
		checkForWinner();
	});
});


const restartBtn = document.querySelector("#restart-btn");
restartBtn.addEventListener("click", restart);

function restart(){
	cellsArr.forEach(cell => cell.textContent = "");
	document.querySelector("#win-text").textContent = "";
}