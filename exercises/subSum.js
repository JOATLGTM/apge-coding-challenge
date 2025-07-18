module.exports.run = function (x, y) {
	/*
	You are given a 2D array. Using the x and y co-ordinates, find the sum of all the numbers from (0, 0) to (x, y)

	Example:

	-1  1  5        function(1, 1) => 12
	 9  3  7		function(1, 0) => 0
	 2  8  4		function(0, 1) => 8

	 Write your code below the comment.
*/
	const twoDArray = [
		[0, 4, 2, 1],
		[3, -1, 1, 0],
		[0, 0, 2, 3],
		[1, 3, -3, 0],
	];

	let sum = 0;

	// edge case if x or y is negative
	if (x < 0 || y < 0) {
		return 0;
	}

	for (let row = 0; row <= y; row++) {
		// Make sure this column exists in this row
		if (row >= twoDArray.length) {
			break;
		}

		// Add this number to our sum
		for (let col = 0; col <= x; col++) {
			if (col >= twoDArray[row].length) {
				break;
			}

			let currentNumber = twoDArray[row][col];
			sum += currentNumber;
		}
	}

	return sum;
};
