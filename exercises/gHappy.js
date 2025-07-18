module.exports.run = function (str) {
	/*
A lowercase 'g' in a string is "happy" if there is another 'g' immediately to its left or right.
Return true if all the g's in the given string are happy, otherwise return false.

	Example:
		function("xxggxx") => true
		function("xxgxx") => false

        Write your code below the comment.
*/

	for (let i = 0; i < str.length; i++) {
		if (str[i] === "g") {
			// check to see if the 'g' has a neighbor 'g'
			const hasLeftNeighbor = i > 0 && str[i - 1] === "g";
			const hasRightNeighbor = i < str.length - 1 && str[i + 1] === "g";

			// if 'g' has no neighbor
			if (!hasLeftNeighbor && !hasRightNeighbor) {
				return false;
			}
		}
	}

	return true;
};
