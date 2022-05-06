function firstNonRepeatingLetter(s) {
	if (!s) return '';
	for (let i = 0; i < s.length; i++) {
		for (let j = 0; j < s.length; j++) {
			if (i != j) {
				if (s[i].toLowerCase() == s[j].toLowerCase()) {
					break;
				}
			}
			if (j == s.length - 1) {
				return s[i];
			}
		}
	}
	return '';
}

// alternate
/*
function firstNonRepeatingLetter(s) {
  let str = s.toLowerCase();
  for(let i = 0; i < str.length; i++) {
    if(str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
      return s[i];
    }
  }
  return "";
}
*/
firstNonRepeatingLetter('stress');
