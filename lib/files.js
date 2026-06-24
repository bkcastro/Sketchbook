import fs from 'fs';
import path from 'path';
import chalk from 'chalk';
import figlet from 'figlet';
import { readFile } from 'fs/promises';

export function getCurrentDirectoryBase() {
	return path.basename(process.cwd());
}

export function directoryExists(filePath) {
	return fs.existsSync(filePath);
}

export async function loadSketchbookFile(callback) {
	try {
		const rawData = await fs.readFile('.sketchbook.json', 'utf-8');
		const configObject = JSON.parse(rawData);
		return configObject;
	} catch (error) {
		console.error('Error reading or parsing file:', error);
	}
}

/** Checks if there exists a valid .sketchbook directory.
 *
 * @returns {boolean}
 */
function validSketchbook() {

	return (
		directoryExists('.sketchbook')
		&&		
		directoryExists('.sketchbook/meta-data.json')
	);
}

export async function printSketchbookInfo() {

	if (validSketchbook()) {
		try {
			const rawData = await readFile('.sketchbook/meta-data.json', 'utf-8');
			const user = JSON.parse(rawData);

			console.log(
				chalk.red(
					figlet.textSync('Sketchbook', { horizontalLayout: 'full' })
				)
			);

			console.log(
				chalk.white(
					`
	Author: ${user.name}
	Created: ${user.date}
	Total Sketches: ${user.total_sketches}
					`
				)
			);

		} catch (error) {
			console.error('Error reading or parsing file:', error);
		}
	} else {
		console.log("This folder is not a valid sketchbook. Use the --init command to make one.");
	}
}
