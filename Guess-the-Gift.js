function guessGifts(wishlist, presents) {
	var result = new Set();

	for (i of presents) {
		let arr = wishlist.filter((item) => {
			return i.size == item.size && i.clatters == item.clatters && i.weight == item.weight;
		});
		for (let j of arr) {
			result.add(j.name);
		}
	}
	const arrRes = Array.from(result);
	return arrRes;
}
