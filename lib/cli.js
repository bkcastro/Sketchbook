import { parseArgs } from 'node:util';
import { applyValuesToOptions } from './options.js';
import { who, init, serve, help, templates, sketch } from './commands.js';
import Log from './log.js';

/**
 * All commands.
 */
const commands = [
	'who',
	'init',
	'serve',
	'help',
    'templates',
];

/** 
 * All options.
 */ 
const options = {
	template: {
		type: 'string',
		short: 't',
	},
	iterate: {
		type: 'boolean',
		short: 'i',
	},
};

/**
 * Run the command.
 *
 * @param {string} command
 * @return {void}
 */
function runCommand(command) {

    switch(command) {
        case 'who': who(); break;
        case 'init': init(); break;
        case 'serve': serve(); break;
        case 'help': help(); break;
        case 'templates': templates(); break;
        default: sketch();
    }
}

/** 
 * Execute input.
 *
 * @param {object} input 
 * @return {void}
 */
function execute(input) {
    
    // Apply options.
    applyValuesToOptions(input.values);
    runCommand(input.command);
}

/**
 * Process input from the command line and return it.
 *
 * @return {object}
 */
function processInput() {
	
	try {

		const args = process.argv.slice(2) || [];
        const command = (commands.includes(args.at(0))) ? args.shift() : '';
        const { values, positionals } = parseArgs({ args, options });

        return {
            command: command,
            values: []
        }

	} catch (err) {
		Log.error('Invalid input.', err);
	}
}

/**
 * Starting point for the CLI.
 * Process and execute input.
 *
 * @return {void}
 */
export default function start() {

    const input = processInput();
    execute(input);
}
