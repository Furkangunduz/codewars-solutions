function nextBigger(n) {
	if (n < 10) return -1;
	var result;
	var num = '' + n;
	for (let i = num.length - 2; i >= 0; i--) {
		if (num[i] < num[i + 1]) {
			let target = num[i];
			let nextBigger;
			let nextbigerIndex;
			let s = num.substring(i + 1);
			for (let j = 0; j < s.length; j++) {
				if (nextBigger) {
					if (s[j] < nextBigger && s[j] > num[i]) {
						nextBigger = s[j];
						nextbigerIndex = j;
					}
				} else if (s[j] > num[i]) {
					nextBigger = s[j];
					nextbigerIndex = j;
				}
			}
			let newS = s.substring(0, nextbigerIndex) + target + s.substring(nextbigerIndex + 1);
			newS = newS.split('').sort().join('');
			return parseInt((result = num.substring(0, i) + nextBigger + newS));
		}
	}
	return -1;
}

console.log(nextBigger(649528994));
