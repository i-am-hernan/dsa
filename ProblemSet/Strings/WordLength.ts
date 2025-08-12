function lengthOfLastWord(s: string): number {
	let word = "";
	for (let i = s.length - 1; i >= 0; i--) {
		if (s[i] !== " ") { word = s[i] + word; }
		else {
			if (word.length > 0) {
				break;
			}
			word = "";
		}
	}
	return word.length;
}
