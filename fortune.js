/**
 * Creates and new Fortune.
 * @class
 * @param {string} file - an identifier of fortune formatted file.
 */
function Fortune(file) {
	if (file === undefined || file === null) { // 'file' must be given
		throw new TypeError("File cannot be null.", "fortune.js");
	} else if (file instanceof String) {
		if (/.*\n%\n.*/.test(file)) { // is 'file' inline text?
			// TODO: Read text
		} else if () { // is 'file' URI to fortune text?
			// TODO: Read file as text
		}

		// TODO: Split text items on '%'
	} else if (file instanceof Array) { // is 'file' list of fortunes?
		// TODO: Process items as fortune list
	}

	// TODO: Process options

	// TODO: Select fortune item according to options

	// TODO: Put selected fortune to selected output
}

/**
 * Default options for the Fortune instance.
 */
Fortune.prototype.Options = {
	// TODO: Outline options, see man fortune (1)
};

/**
 * Select a fortune and return it as a string.
 * @returns {string} the selected fortune text.
 */
Fortune.prototype.Select = function () {
	// TODO: Implement randomized fortune selection
};

/**
 * Select a fortune and send it to the console.
 */
Fortune.prototype.Log = function () {
	console.log(this.Select());
};

/**
 * Sends a fortune to the given XML HTTP Request.
 * @param {XMLHttpRequest} xhr - The request to send the fortune to.
 */
Fortune.prototype.Send = function (xhr) {
	// TODO: Process 'xhr' and call 'xhr.send()'.
};

