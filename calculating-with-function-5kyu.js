function zero(operation) {
	if (operation) {
		return eval('0' + operation);
	} else {
		return 0;
	}
}
function one(operation) {
	if (operation) {
		return eval('1' + operation);
	} else {
		return 1;
	}
}
function two(operation) {
	if (operation) {
		return eval('2' + operation);
	} else {
		return 2;
	}
}
function three(operation) {
	if (operation) {
		return eval('3' + operation);
	} else {
		return 3;
	}
}
function four(operation) {
	if (operation) {
		return eval('4' + operation);
	} else {
		return 4;
	}
}
function five(operation) {
	if (operation) {
		return eval('5' + operation);
	} else {
		return 5;
	}
}
function six(operation) {
	if (operation) {
		return eval('6' + operation);
	} else {
		return 6;
	}
}
function seven(operation) {
	if (operation) {
		return eval('7 ' + operation);
	} else {
		return 7;
	}
}
function eight(operation) {
	if (operation) {
		return eval('8' + operation);
	} else {
		return 8;
	}
}
function nine(operation) {
	if (operation) {
		return eval('9' + operation);
	} else {
		return 9;
	}
}
function plus(number) {
	let x = number;
	return `+ ${x}`;
}
function minus(number) {
	let x = number;
	return `-${x}`;
}

function times(number) {
	let x = number();
	return '* x';
}

function dividedBy(number) {
	let x = number();
	return '/ x';
}
