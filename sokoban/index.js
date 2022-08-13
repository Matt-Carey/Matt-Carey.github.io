const menuElement = document.getElementById("menu");
const cardsElement = document.getElementById("cards");
const gameElement = document.getElementById("game");
const canvasElement = document.getElementById("canvas");
const context2d = canvasElement.getContext("2d");
const guiElement = document.getElementById("gui");
const backButton = document.getElementById("back");
const resetButton = document.getElementById("reset");
const moveCounter = document.getElementById("moves");

var time = Date.now();

const render = {
	valid: false,
	stop: null,
	scale: 1,
	scaledTileWidth: 0,
	scaledTileHeight: 0,
	scaledGameWidth: 0,
	scaledGameHeight: 0,
	offset: {
		x: 0,
		y: 0
	}
};

const tileSet = new Image();
tileSet.onload = function() {
	render.valid = true;
}
tileSet.src = tilesheet.src;

const game = {
	level: null,
	rows: 0,
	cols: 0,
	moves: 0,
	won: false
};

const anim = {
	page: {current: 0, time: 120},
	d: {x: 0, y: 0},
	counter: 0,
	speed: 3,
};

var playerTile = null;
const player = {
	l: {x: -1, y: -1},
	d: {x: 0, y: 0}
};

var boxTile = null;
var boxes = null;
var pushBox = null;

var goalTile = null;
var goals = null;

var wallTile = null;
var walls = null;

var floorTile = null;

function enableInput() {
	document.onkeyup = onKeyUp;
	document.onkeydown = onKeyDown;
	document.ontouchstart = onTouchStart;
	document.ontouchmove = onTouchMove;
	document.ontouchend = onTouchEnd;
}

function disableInput() {
	document.onkeyup = null;
	document.onkeydown = null;
	document.ontouchstart = null;
	document.ontouchmove = null;
	document.ontouchend = null;
	keys = [];
}

function pause() {
	if(render.stop != null) {
		render.stop();
	}
	render.stop = null;
	disableInput();
}

function resume() {
	if(render.stop == null) {
		loop(0);
	}
	enableInput();
}

function getViewportWidth() {
	return window.innerWidth;
}

function getViewportHeight() {
	return window.innerHeight;
}

function getGameWidth() {
	return (isFlip() ? game.rows : game.cols) * (isFlip() ? tilesheet.tileHeight : tilesheet.tileWidth);
}

function getGameHeight() {
	return (isFlip() ? game.cols : game.rows) * (isFlip() ? tilesheet.tileWidth : tilesheet.tileHeight);
}

function isLandscape() {
	return getViewportWidth() > getViewportHeight();
}

function isWide() {
	return game.cols > game.rows;
}

function isFlip() {
	return game.cols != game.rows && isLandscape() != isWide();
}

function getRenderScale() {
	let wRatio = 1;
	let hRatio = 1;
	
	const gameWidth = getGameWidth();
	const viewportWidth = getViewportWidth();
	if(gameWidth > viewportWidth) wRatio = viewportWidth / gameWidth;
	
	const gameHeight = getGameHeight();
	const viewportHeight = getViewportHeight();
	if(gameHeight > viewportHeight) hRatio = viewportHeight / gameHeight;
	
	return Math.min(wRatio, hRatio);
}

function isMoving() {
	return player.d.x != 0 || player.d.y != 0;
}

function onUp() {
	isFlip() ? moveLeft() : moveUp();
}

function onDown() {
	isFlip() ? moveRight() : moveDown();
}

function onLeft() {
	isFlip() ? moveUp() : moveLeft();
}

function onRight() {
	isFlip() ? moveDown() : moveRight();
}

var keys = [];

function onKeyDown(e) {
    switch (e.key) {
        case 'ArrowUp':
			if(keys.indexOf(e.key) == -1) keys.push(e.key);
            if(!isMoving()) onUp();
            break;
        case 'ArrowDown':
			if(keys.indexOf(e.key) == -1) keys.push(e.key);
            if(!isMoving()) onDown();
            break;
        case 'ArrowLeft':
			if(keys.indexOf(e.key) == -1) keys.push(e.key);
            if(!isMoving()) onLeft();
            break;
        case 'ArrowRight':
			if(keys.indexOf(e.key) == -1) keys.push(e.key);
            if(!isMoving()) onRight();
			break;
    }
}

function onKeyUp(e) {
	const index = keys.indexOf(e.key);
	if(index != -1) {
		keys.splice(index, 1);
	}
	console.log(index, keys, e.key);
}

const touch = {
	x: 0,
	y: 0
};

function onTouchStart(e) {
	if (e.target.nodeName !== 'INPUT') {
        e.preventDefault();
    }
	
	if(isMoving()) {
		return;
	}
	touch.x = e.changedTouches[0].screenX;
	touch.y = e.changedTouches[0].screenY;
}

function onTouchMove(e) {
	e.preventDefault();
}

function onTouchEnd(e) {
	if (e.target.nodeName == 'INPUT') {
        e.preventDefault();
    }
	
	if(isMoving()) {
		return;
	}
	
	const deltaX = e.changedTouches[0].screenX - touch.x;
	const deltaY = e.changedTouches[0].screenY - touch.y;
	
	if(deltaX == 0 && deltaY == 0) return;
	
	if(Math.abs(deltaX) > Math.abs(deltaY)) {
		deltaX > 0 ? onRight() : onLeft();
	}
	else {
		deltaY > 0 ? onDown() : onUp();
	}
}

function checkWin() {
	for(const goal of goals) {
		const box = boxes.find(box => box.x == goal.x && box.y == goal.y);
		if(box == null) {
			return false;
		}
	}
	disableInput();
	game.won = true;
	return true;
}

function isSpaceOpen(x, y) {
	return !isSpaceWall(x, y) && !isSpaceBox(x, y);
}

function isSpaceWall(x, y) {
	if(y >= 0 && y < game.level.length && x >= 0 && x < game.level[y].length) {
		return game.level[y][x] == '#';
	}
	return false;
}

function isSpaceBox(x, y) {
	return boxes.some(box => box.x == x && box.y == y);
}

function tryToMove(x, y) {
	const canMove = isSpaceOpen(player.l.x + x, player.l.y + y);
	const canPush = isSpaceOpen(player.l.x + (x * 2), player.l.y + (y * 2)) && isSpaceBox(player.l.x + x, player.l.y + y);

	if(canPush) {
		pushBox = boxes.find(box => box.x == player.l.x + x && box.y == player.l.y + y);
	}
	
	if(canMove || canPush) {
		player.d.x = x;
		player.d.y = y;
		return true;
	}
	
	return false;
}

function moveUp() {
	tryToMove(0, -1) ? walkUp() : faceUp();
}

function moveDown() {
	tryToMove(0, 1) ? walkDown() : faceDown();
}

function moveLeft() {
	tryToMove(-1, 0) ? walkLeft() : faceLeft();
}

function moveRight() {
	tryToMove(1, 0) ? walkRight() : faceRight();
}

function faceUp() {
	playerTile = isFlip() ? tilesheet.player.left.still : tilesheet.player.up.still;
}

function walkUp() {
	playerTile = isFlip() ? tilesheet.player.left.walk : tilesheet.player.up.walk;
}

function faceDown() {
	playerTile = isFlip() ? tilesheet.player.right.still : tilesheet.player.down.still;
}

function walkDown() {
	playerTile = isFlip() ? tilesheet.player.right.walk : tilesheet.player.down.walk;
}

function faceLeft() {
	playerTile = isFlip() ? tilesheet.player.up.still : tilesheet.player.left.still;
}

function walkLeft() {
	playerTile = isFlip() ? tilesheet.player.up.walk : tilesheet.player.left.walk;
}

function faceRight() {
	playerTile = isFlip() ? tilesheet.player.down.still : tilesheet.player.right.still;
}

function walkRight() {
	playerTile = isFlip() ? tilesheet.player.down.walk : tilesheet.player.right.walk;
}

function setMoves(val) {
	game.moves = val;
	moveCounter.innerHTML = game.moves;
}

function onMoveComplete() {
	setMoves(game.moves + 1);
	
	if(player.d.y == -1) faceUp();
	else if(player.d.y == 1) faceDown();
	else if(player.d.x == -1) faceLeft();
	else if(player.d.x == 1) faceRight();
	
	player.l.x += player.d.x;
	player.l.y += player.d.y;
	
	if(pushBox != null) {
		pushBox.x += player.d.x;
		pushBox.y += player.d.y;
	}
	pushBox = null;
	
	anim.d.x = 0;
	anim.d.y = 0;
	player.d.x = 0;
	player.d.y = 0;
	
	if(checkWin()) return;
	console.log(keys);
	if(keys.length > 0) {
		onKeyDown({key: keys[keys.length - 1]});
	}
}

function tickGame(dt) {
	if(isMoving()) {
		anim.counter += dt;
		anim.page.current = (anim.counter / anim.page.time).toFixed();
		anim.d.x += player.d.x * (dt / 1000) * anim.speed;
		anim.d.y += player.d.y * (dt / 1000) * anim.speed;
		if(Math.abs(anim.d.x) > 1 || Math.abs(anim.d.y) > 1) {
			onMoveComplete();
		}
	}
}

function drawGame() {
	if(!render.valid) return;
	
	var fillRows = parseInt((render.offset.y / render.scaledTileHeight).toFixed()) + 1;
	var fillCols = parseInt((render.offset.x / render.scaledTileWidth).toFixed()) + 1;
	if(isFlip()) [fillRows, fillCols] = [fillCols, fillRows];
	
	for(let row = -fillRows; row < game.rows + fillRows; ++row) {
		for(let col = -fillCols; col < game.cols + fillCols; ++col) {
			drawTile(floorTile, col, row);
		}
	}
	
	for(const wall of walls) {
		drawTile(wallTile, wall.x, wall.y);
	}
	
	for(const goal of goals) {
		drawTile(goalTile, goal.x, goal.y);
	}
	
	for(const box of boxes) {
		const isMovingBox = pushBox == box;
		const xOffset = isMovingBox ? anim.d.x : 0;
		const yOffset = isMovingBox ? anim.d.y : 0;
		drawTile(boxTile, box.x + xOffset, box.y + yOffset);
	}
	
	drawTile(playerTile[anim.page.current % playerTile.length], player.l.x + anim.d.x, player.l.y + anim.d.y);
	
	if(game.won) {
		const winText = "You won in " + game.moves + " moves!";
		const winTextHalfWidth = 180;
		console.log(render.offset.x)
		console.log(render.offset.y);
		const x = render.offset.x + (render.scaledGameWidth / 2) - winTextHalfWidth;
		const y = render.offset.y + (render.scaledGameHeight / 2);
		context2d.font = '48px Bubblegum Sans';
		context2d.fillText(winText, x, y);
	}
}

function drawTile(toDraw, x, y) {
	if(isFlip()) [x, y] = [y, x];
	
	const sx = toDraw.iconX * tilesheet.tileWidth;
	const sy = toDraw.iconY * tilesheet.tileHeight;
	const sWidth = tilesheet.tileWidth;
	const sHeight = tilesheet.tileHeight;
	
	const dx = (x * render.scaledTileWidth) + render.offset.x;
	const dy = (y * render.scaledTileHeight) + render.offset.y;
	
	const dWidth = render.scaledTileWidth;
	const dHeight = render.scaledTileHeight;
	
	context2d.drawImage(tileSet, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
}

function loop(tFrame) {
	const requestId = window.requestAnimationFrame(loop);
	render.stop = function() {
		window.cancelAnimationFrame(requestId);
		render.stop = null;
	}
	
	const timeNow = Date.now();
	const dt = timeNow - time;
	time = timeNow;
	tickGame(dt);
	
	canvasElement.width  = getViewportWidth();
	canvasElement.height = getViewportHeight();
	guiElement.width  = getViewportWidth();
	guiElement.height = getViewportHeight();
	
	render.scale = getRenderScale();
	render.scaledTileWidth = parseInt((tilesheet.tileWidth * render.scale).toFixed());
	render.scaledTileHeight = parseInt((tilesheet.tileHeight * render.scale).toFixed());
	render.scaledGameWidth = parseInt(((tilesheet.tileWidth * game.cols) * render.scale).toFixed());
	render.scaledGameHeight = parseInt(((tilesheet.tileHeight * game.rows) * render.scale).toFixed());
	render.offset.x = parseInt(Math.max(((getViewportWidth() - (isFlip() ? render.scaledGameHeight : render.scaledGameWidth)) / 2).toFixed(), 0));
	render.offset.y = parseInt(Math.max(((getViewportHeight() - (isFlip() ? render.scaledGameWidth : render.scaledGameHeight)) / 2).toFixed(), 0));
	
	drawGame();
}

function setTextures(seed) {
	playerTile = tilesheet.player.down.still;
	boxTile = tilesheet.boxes[seed % tilesheet.boxes.length];
	goalTile = tilesheet.goals[seed % tilesheet.goals.length];
	const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
	seed += primes[seed % primes.length];
	seed *= primes[seed % primes.length];
	wallTile = tilesheet.walls[boxTile.walls[seed % boxTile.walls.length]];
	floorTile = tilesheet.floors[boxTile.floors[seed % boxTile.floors.length]];
}

function startGame() {
	game.won = false;
	playerTile = tilesheet.player.down.still;
	setMoves(0);
	boxes = [];
	goals = [];
	walls = [];
	for(const row in game.level) {
		const rVal = parseInt(row);
		for(const col in game.level[row]) {
			const cVal = parseInt(col);
			if(game.level[row][col] == '@') {
				player.l.x = parseInt(col);
				player.l.y = parseInt(row);
			}
			else if(game.level[row][col] == '$') {
				boxes.push({x: cVal, y: rVal});
			}
			else if(game.level[row][col] == '.') {
				goals.push({x: cVal, y: rVal});
			}
			else if(game.level[row][col] == '#') {
				walls.push({x: cVal, y: rVal});
			}
		}
	}
}

function showMenu() {
	pause();
	menuElement.style.display = "inline";
	gameElement.style.display = "none";
	document.body.style.overflow = "auto";
}

function showGame() {
	gameElement.style.display = "inline";
	menuElement.style.display = "none";
	document.body.style.overflow = "hidden";
	resume();
}

function populateMenu() {
	for(const index in levels) {
		const levelSelect = document.createElement('button');
		levelSelect.classList.add('level-card');
		
		const boxTile = tilesheet.boxes[parseInt(index) % tilesheet.boxes.length];
		
		function mouseOver() {
			const xVal = tilesheet.width - (boxTile.iconX * tilesheet.tileWidth);
			const yVal = tilesheet.height - (boxTile.iconY * tilesheet.tileHeight);
			levelSelect.style.backgroundPosition = xVal + "px " + yVal + "px";
		}
		function mouseOut() {
			const xVal = tilesheet.width - (boxTile.iconFadedX * tilesheet.tileWidth);
			const yVal = tilesheet.height - (boxTile.iconFadedY * tilesheet.tileHeight);
			levelSelect.style.backgroundPosition = xVal + "px " + yVal + "px";
		}
		mouseOut();
		levelSelect.onmouseover = mouseOver;
		levelSelect.onmouseout = mouseOut;
		
		levelSelect.textContent = parseInt(index) + 1;
		levelSelect.onclick = function(){
			setTextures(parseInt(index));
			game.level = levels[index];
			game.rows = game.level.length;
			game.cols = Math.max(...(game.level.map(row => row.length)));
			startGame();
			showGame();
		};
		cardsElement.appendChild(levelSelect);
	}
}

backButton.onclick = function() {
	showMenu();
}

resetButton.onclick = function() {
	startGame();
	resume();
}

setTextures(0);
populateMenu();
showMenu();
