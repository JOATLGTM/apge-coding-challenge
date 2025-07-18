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

	// Validate bounds to prevent errors
	const maxRow = Math.min(y, twoDArray.length - 1);
	const maxCol = x >= 0 ? x : -1;

	let sum = 0;

	// Iterate through rows from 0 to y (inclusive)
	for (let row = 0; row <= maxRow; row++) {
		// Iterate through columns from 0 to x (inclusive)
		const currentRow = twoDArray[row];
		const maxColForThisRow = Math.min(maxCol, currentRow.length - 1);

		for (let col = 0; col <= maxColForThisRow; col++) {
			sum += currentRow[col];
		}
	}

	return sum;
};
