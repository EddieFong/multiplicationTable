function checkValid (start, end) {
	return (start >= 1) &&
        (end >= 1) &&
        (start <= 1000) &&
        (end <= 1000) && 
        (start <= end);     
}

function createMultiplicationTableByRange (start, end) {
	if (checkValid(start,end) === false) return "";
	let result = "";
	let i,j;
	let width = (end*end).toString().length + 1;

	for (i = start; i <= end; i++) { 
		for (j = start; j <= i; j++) { 
			result += j + "*" + i + "=" + j*i + " ".repeat(width - (i*j).toString().length);
		}
		result += "\n";    
	}
	return result;
}

module.exports = createMultiplicationTableByRange;