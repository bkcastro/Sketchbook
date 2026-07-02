import fs from 'fs';
import path from 'path';
import { getTemplateURL } from '../templates/templates.js';
import { getOptionValue } from './options.js';
import Log from './log.js';

/**
 * Returns the base directory.
 *
 * @return {string}
 */
export function getCurrentDirectoryBase() {
	return path.basename(process.cwd());
}

/** 
 * Check if the current working directory is a valid sketchbook.
 *
 * @returns {boolean}
 */
export function validSketchbook(dir='./') {

	return (
		fs.existsSync(path.join(dir, '.sketchbook'))
		&&		
		fs.existsSync(path.join(dir, '.sketchbook/meta-data.json'))
	);
}

/**
 * Return the items inside a directory.
 *
 * @param {string} directory_path
 * @return {string[]}
 */
export function listDirectory(directory_path) {

	return fs.readdirSync(directory_path);
}

/**
 * Get user data.
 *
 * @return {object}
 */
export function getUser(dir='./') {

    const rawData = fs.readFileSync(path.join(dir, '.sketchbook/meta-data.json'), 'utf-8');
    const user = JSON.parse(rawData);

    return user;
}

/**
 * Create a valid directory name for a sketch.
 *
 * @param {number} x
 * @return {string}
 */
export function createName(x) {

	var name = new String(x);
	while (name.length < 4) name = '0' + name;
	
	return name;
}

/**
 * Create a new sketch project.
 *
 * @param {string} name 
 * @return {boolean}
 */
function createSketch(dir) {

    try {
	
        if (!fs.existsSync(dir)) {

            const template_dir = getTemplateURL(getOptionValue('template'));
            if (fs.existsSync(template_dir)) {

                fs.mkdirSync(dir, { recursive: true });
                fs.cpSync(template_dir, dir, { recursive: true });
                console.log(chalk.green('Sketch created: ', dir));
            } else {
                throw new Error(`Template source files missing.`);
            }
        } else {
            throw new Error('Unable to create sketch due to conflicting directories.');
        }
    } catch(err) {
        console.log(chalk.red(err));
    }
}

/**
 * Create a new iteration sketch.
 *
 * @param {string} dir 
 * @return {void}
 */
function createIterationSketch(dir, iteration_dir) {
    
    try {

	if (!fs.existsSync(dir)) {
		if (fs.existsSync(iteration_dir)) {

		    fs.mkdirSync(dir, { recursive: true });
		    fs.cpSync(iteration_dir, dir, { recursive: true });

		    console.log(chalk.green('Iteration created: ', dir));
		} else {
		    console.log(chalk.red(`Unable to iteate due to missing ${iteration_dir} direcotry.`));
		}
	} else {
		throw new Error('Unable to create sketch due to conflicting directories.');
	}
    } catch(err) {
        console.log('Unable to iterate sketch.');
    }
}

/** 
 * Handle 'new' command operations.
 *
 * @return {void}
 */
export async function newSketch() {

	// Check the directory.
	// Create name.
	const regex = /^[0-9]{4}$/;
	const items = listDirectory('./').filter((str) => regex.test(str));
    const iteration_name = (items.length) ? createName(items.length) : '';
    const iteration_dir = path.join(iteration_name, './sketch');
	const name = createName(items.length+1);
    const new_dir = path.join(name, './sketch');
    
    const iterate = getOptionValue('iterate');

    if (iterate) {
        createIterationSketch(new_dir, iteration_dir);
    } else {
        createSketch(new_dir);
    }
}

/**
 * Return initialized user json data.
 *
 * @param {string} author
 * @return {string}
 */
export function initialUser(author) {

    var metaData = {
        author: author,
        created: Date(),
        totalSketches: 0
    }

    return metaData; 
}

/**
 * Json to string.
 *
 * @param {json}
 * @return {string}
 */
export function jsonToString(json) {
    
    return JSON.stringify(json, null, 2);
}

/**
 * Initialize a sketchbook.
 *
 * @param {string} author
 * @return {void}
 */
export function initializeSketchbook(author) {

    try {
        const data = jsonToString(initialUser(author));   
        fs.mkdirSync('./.sketchbook');
        fs.writeFileSync('./.sketchbook/meta-data.json', data);
        Log.success(`New sketchbook created successfully good luck ${author}.`);

    } catch(error) {
        Log.error('Unable to initialize a sketchbook: ', error);
    }
}
