module.exports.run = function (a, b, c) {
	/*
Given 3 int values, a b c, return their sum. However, if one of the values is the same as another of the values, it does not count towards the sum.

Examples:
	function(1, 2, 3) => 6
	function(3, 2, 3) => 2
	function(3, 3, 3) => 0

Write your code below the comment.

*/

	const values = [a, b, c];
	const frequencyMap = new Map();

	// find frequency of each value
	for (const value of values) {
		frequencyMap.set(value, (frequencyMap.get(value) || 0) + 1);
	}

	let sum = 0;
	for (const [value, frequency] of frequencyMap) {
		if (frequency === 1) {
			sum += value;
		}
	}

	return sum;
};
