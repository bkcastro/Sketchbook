import { test, before, after } from 'node:test';
import fs from 'fs';
import { join } from 'path';
import assert from 'node:assert/strict';
import Log from '../lib/log.js';
import { validSketchbook, initialUser, jsonToString, getUser } from '../lib/files.js';

test('Who:', async (t) => { 
    
    let testDir;

    before(() => {
    
        fs.mkdirSync('./test_who'); 
        testDir = './test_who';
    }); 

    after(() => {

        fs.rmSync('./test_who', { recursive: true });
    });

    await t.test('Invalid folder.', async () => {

        const res = validSketchbook(testDir); 
        assert.equal(res, false);
    });

    await t.test('Valid folder.', { todo: false }, async  () => {
        
        const userData = initialUser('Brandon Castro');
        const userDataString = jsonToString(userData);
        const testSketchbookDir = join(testDir, '.sketchbook');
        const testMetaDataDir = join(testDir, '.sketchbook/meta-data.json');
        
        fs.mkdirSync(testSketchbookDir);
        fs.writeFileSync(testMetaDataDir, userDataString);
        
        const data = getUser(testDir);

        assert.deepStrictEqual(data, userData);

    });

});

test('Init: ', { todo: true }, async (t) => {

    await t.test('Invalid folder.', async () => {});

    await t.test('Valid folder.', { todo: false }, async  () => {});

});

test('Sketch: ', { todo: true }, async (t) => {
});
