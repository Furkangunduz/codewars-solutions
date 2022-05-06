function rot13(str) {
	var res = '';
	for (let i = 0; i < str.length; i++) {
		let ascii = str.charCodeAt(i);

		if (ascii >= 97 && ascii <= 122) {
			ascii += 13;
			if (ascii > 122) ascii = (ascii % 122) + 96;
			res += String.fromCharCode(ascii);
		} else if (ascii >= 65 && ascii <= 90) {
			ascii += 13;
			if (ascii > 90) ascii = (ascii % 90) + 64;
			res += String.fromCharCode(ascii);
		} else {
			res += String.fromCharCode(ascii);
		}
	}
	return res;
}

console.log(rot13('EBG13 rknzcyr.'));
