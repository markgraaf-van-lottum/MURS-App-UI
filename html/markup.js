// document.querySelector('.menu-button').addEventListener("click",
	// function() {document.querySelector('aside').classList.toggle('open')}, false);

const asideOpen = () => document.querySelector('aside').classList.add('open');
const mainAsideOpen = () => document.querySelector('main').classList.add('aside--is-opened');
const asideClose = () => document.querySelector('aside').classList.remove('open');
const mainAsideClose = () => document.querySelector('main').classList.remove('aside--is-opened');

document.querySelector('.menu-button').addEventListener("click",() => {
	asideOpen();
	mainAsideOpen();
});

document.querySelector('.aside__menu-overlay').addEventListener("click",() => {
	asideClose();
	setTimeout(mainAsideClose, 220);
});

// document.querySelector('aside').addEventListener("click",
// 	function() {document.querySelector('aside').classList.add('open')}, false);

// document.querySelector('main').addEventListener("click",
// 	function() {document.querySelector('aside').classList.remove('open')}, false);

// function positionChangeDelay() {document.querySelector('aside').classList.remove('open')}

// document.querySelector('main').addEventListener("click",
// 	setTimeout(positionChangeDelay, 220), false);
