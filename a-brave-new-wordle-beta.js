function resolver(guess, solution) {
	if (guess == solution) return 'ggggg';
	var guessArr = guess.split('');
	var solArr = solution.split('');
	var res = [];
	for (let i = 0; i < 5; i++) {
		if (guessArr[i] == solArr[i]) {
			res[i] = 'g';
			guessArr[i] = '';
			solArr[i] = '';
		}
	}
	for (let i = 0; i < 5; i++) {
		if (guess[i] && !res[i]) {
			if (solArr.includes(guessArr[i])) {
				res[i] = 'y';
				solArr[solArr.indexOf(guessArr[i])] = '';
			} else {
				res[i] = 'b';
			}
			guessArr[i] = '';
		}
	}
	return res.join('');
}

console.log(resolver('bleed', 'world'));
