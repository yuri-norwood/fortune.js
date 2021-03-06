/**
 * Creates and new Fortune.
 * @class
 * @param {string} file - an identifier of fortune formatted file.
 * @param {object} options - an optional object of options.
 * @public
 */
function Fortune(file, options) {
	if (file === undefined || file === null) { // 'file' must be given
		throw new TypeError("File cannot be null.", "fortune.js");
	} else if (file instanceof String || typeof(file) === "string") {
		var regx = /.*\n%\n.*/;

		if (regx.test(file)) { // is 'file' inline text?
			this._fortunes = file.split(regx);
		} else { // 'file' is URI to fortune text
			var text = ""; // TODO: Read file as text
			
			this._fortunes = text.split.(regx);
		}
	} else if (file instanceof Array) { // is 'file' list of fortunes?
		// TODO: Process items as fortune list
	}

	// Process options
	if (options != undefined && options != null) {
		var optionKeys = Object.keys(this.Options);

		// Get the canonical option names
		for (var i = 0; i < optionKeys.length; i++) {
			var optionKey = optionKeys[i];

			// If the 'options' has the option name, then use it
			if (options.hasOwnProperty(optionKey)) {
				this.Options[optionKey] = options[optionKey];
			}
		}
	}

	// TODO: Select fortune item according to options

	// TODO: Put selected fortune to selected output
}

/**
 * Holds the selected fortune.
 * @default
 * @private
 */
Fortune.prototype._fortune = null;

/**
 * Holds the loaded fortunes.
 * @default
 * @private
 */
Fortune.prototype._fortunes = [];

/**
 * Instance options, allows changing settings of existing instance.
 * @public
 */
Fortune.prototype.Options = {
	// TODO: Outline options, see man fortune (1)
};

/**
 * Select a fortune and return it as a string.
 * @this Fortune
 * @see _fortune
 * @returns {string} the selected fortune text.
 * @public
 */
Fortune.prototype.Select = function () {
	var this._fortune = this._fortunes[Math.floor(Math.random() * this._fortunes.length)];
	
	return this._fortune;
};

/**
 * Select a fortune and send it to the console.
 * @this Fortune
 * @public
 */
Fortune.prototype.Log = function () {
	console.log(this.Select());
};

/**
 * Sends a fortune to the given XML HTTP Request.
 * @param {XMLHttpRequest} xhr - The request to send the fortune to.
 * @this Fortune
 * @public
 */
Fortune.prototype.Send = function (xhr) {
	// TODO: Process 'xhr' and call 'xhr.send()'.
};

