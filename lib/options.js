/**
 * Singleton object to store options.
 */
var options = {
	'template': 'default',
	'iterate': false,
}

/**
 * Apply the values to the options.
 * 
 * @param {object} values
 * @return {void}
 */
export function applyValuesToOptions(values) {
    
    for (const [key, value] of Object.entries(values)) {
        options[key] = value;
    }
}

/**
 * Return the value of the option.
 *
 * @param {string} option
 * @return {string|number|boolean}
 */
export function getOptionValue(option) {
    
    return options[option];
}
