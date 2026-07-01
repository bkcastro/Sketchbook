import path from 'path';

const templates = {
    'default': './default',
    '2D': './2D',
    '2D_framed': './2D_framed',
}

/**
 * Return template URL.
 *
 * @param {string} template
 * @return {string}
 */
export function getTemplateURL(template) {
    
    const project_directory = import.meta.dirname;
    const template_directory = templates[template]; 

    return path.join(project_directory, template_directory);
}

/**
 * Return a list of templates.
 *
 * @return {string}
 */
export function getListOfTemplates() {

    return Object.keys(templates).join(', '); 
}
