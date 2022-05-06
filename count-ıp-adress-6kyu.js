function ip2int(ip) {
	return (
		ip.split('.').reduce(function (ipInt, octet) {
			return (ipInt << 8) + parseInt(octet, 10);
		}, 0) >>> 0
	);
}
function ipsBetween(start, end) {
	const first = ip2int(start);
	const second = ip2int(start);
	const dif = second - first;
	return dif;
}

console.log(ipsBetween('150.0.0.0', '150.0.0.1'));
