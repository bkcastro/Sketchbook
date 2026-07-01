import { getOptionValue } from './options.js';
import { getUser, initializeSketchbook, validSketchbook, newSketch } from './files.js';
import { getUserInformation } from './input.js';
import startServer from '../server/server.js';
import Log from './log.js';

/**
 * Print sketchbook information. 
 *
 * return {void}
 */
export function who() {
    
	if (!validSketchbook()) return Log.invalidSketchbook();

    const user = getUser();
    Log.sketchbook(user);
}

/**
 * Initalize a new sketchbook.
 *
 * @return {void}
 */
export function init() {

    if (validSketchbook()) return Log.error('Directory is already a valid sketchbook.'); 

    getUserInformation(initializeSketchbook(answer));
}

/**
 * Start the server.
 *
 * @return {void}
 */
export function serve() {
    
    if (!validSketchbook()) return Log.invalidSketchbook(); 

    startServer();
}

/**
 * Print the help text.
 *
 * @return {void}
 */
export function help() { Log.help(); }

/**
 * Print the templates.
 *
 * @return {void}.
 */
export function templates() { Log.templates(); }

/**
 * Make a new sketch.
 *
 * @return {void}.
 */
export function sketch() {
    newSketch();
}
