import fs from 'fs';
import path from 'path';
import chalk from 'chalk';
import figlet from 'figlet';
import { readFile, mkdir } from 'node:fs/promises';
import { cp } from 'node:fs';

/**
 * Returns the base directory.
 *
 * @return {String}
 */
export function getCurrentDirectoryBase() {
	return path.basename(process.cwd());
}
/**
 * Check if file or directory exists.
 *
 * @return {boolean}
 */
export function directoryExists(filePath) {
	return fs.existsSync(filePath);
}

/** 
 * Checks if there exists a valid .sketchbook directory.
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

/**
 * Return the items inside a directory.
 *
 * @param {String} directory_path
 * @return {String[]}
 */
export function listDirectory(directory_path) {

	return fs.readdirSync(directory_path);
}

/**
 * Prints informaiton of the current sketchbook directory it if is valid.
 *
 * @return {boolean}
 */
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

/**
 * Create a valid directory name for a sketch.
 *
 * @param {Number} x
 * @return {String}
 */
function createName(x) {

	var name = new String(x);
	while (name.length < 4) name = '0' + name;
	
	return name;
}

/** 
 * Handle 'new' command operations.
 * If no flags are added create a default sketch in the current working directory.
 * Else parse and apply the flags.
 *
 * @return {void}
 */
export async function newSketch() {

	// Check options: template, iterate, refernce. 
	// Run the command.	
	
	const regex = /^[0-9]{4}$/;
	const items = listDirectory("./").filter((str) => regex.test(str));
	const new_name = createName(items.length+1);

	console.log('new_name:', new_name);

	const callback = (err) => {
		if (err) throw err;

		console.log('New sketch created: ', new_name);
	}

	const new_dir = path.join(process.cwd(), new_name + '/sketch');
	const template_dir = path.join('file, '/template/default');
	
	console.log(new_dir, template_dir);
	cp(template_dir, new_dir, callback);
}





