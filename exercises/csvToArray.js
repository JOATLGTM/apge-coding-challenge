module.exports.run = function (csv) {
	/*
	A stringified CSV file will be passed into this function.
	Parse the string so it is an array of objects and return the array.
	The object properties are the header of the csv file, and the very first row of the csv file are the headers.

	Example

	function ('FirstName,LastName,Age\nDan,Tran,29\nDon,Tran,25\nJasmine,Tran,13') =>
		[
			{FirstName: Dan, LastName: Tran, Age: 29},
			{FirstName: Don, LastName: Tran, Age: 25},
			{FirstName: Jasmine, LastName: Tran, Age: 13},
		]

	Write your code below the comment.
*/

	if (!csv || csv.trim() === "") return [];

	const rows = csv.split("\n").filter((row) => row.trim() !== "");

	if (rows.length === 0) return [];

	const headers = rows[0].split(",");

	// Transform data rows into objects using functional approach
	return rows.slice(1).map((row) => {
		const values = row.split(",");

		// Create object by reducing headers with corresponding values
		return headers.reduce((obj, header, index) => {
			obj[header] = values[index] || ""; // Handle missing values gracefully
			return obj;
		}, {});
	});
};
