// Target
let navButtons = document.querySelectorAll('#buttonHolder img'), 
	theHeadline= document.querySelector ('#headLine h1'),
	puzzlePieces = document.querySelectorAll('.puzzle-pieces img'),
	dropZones = document.querySelectorAll('.drop-zone'),
	puzzleBoard = document.querySelector('.puzzle-board'),
	tempLink = document.querySelector('a'),
	puzzlePieceDiv = document.querySelector ('.puzzle-pieces'),
	draggedPiece;

// Action

function changeBGImage(){
	let newBGPath = "images/backGround" + this.id + ".jpg";
	puzzleBoard.style.backgroundImage = `url(images/backGround${this.id}.jpg)`;
	resetPuzzle();
}

function blockDefaultBehaviour (e) {
	e.preventDefault();
}

function handleStartDrag() {
	console.log('started draggin a piece!', this);
	draggedPiece = this;
}

function handleDragOver(e) {
	e.preventDefault ();
	console.log ('dragging over me!');}

function handleDrop(e) {
	e.preventDefault ();
	console.log ('dropped on me!');
	if (!this.hasChildNodes()) {
		this.appendChild(draggedPiece);
	}
}

function resetPuzzle() {
    dropZones.forEach(zone => {
        while (zone.firstChild) {
            puzzlePieceDiv.appendChild(zone.firstChild);
        }
    })
}

// Reaction

navButtons.forEach(button => button.addEventListener('click', changeBGImage));
puzzlePieces.forEach(piece => piece.addEventListener('dragstart', handleStartDrag));
dropZones.forEach(zone => zone.addEventListener ('dragover', handleDragOver));
dropZones.forEach(zone => zone.addEventListener ('drop', handleDrop));
topLeft.addEventListener('click', logID);
tempLink.addEventListener('click', blockDefaultBehaviour)