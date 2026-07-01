/** 
 * Help information.
 */
const HELP = `

USAGE: 
	
	$ sketch [COMMAND] [OPTIONS] [ARGUMENTS...]

DESCRIPTION: 
	
	Sketch is a cli tool that helps create art with code. 

    Passing no command will create new sketch. 

    Passing the iterate option will create a new iteration sketch.
	
COMMANDS: 
	
	who			    Print sketchbook information.
	init			Initalize a new sketchbook.
	serve			Start the file server.
	help			Print this help text.

OPTIONS: 
	
	--iterate,-i
`
export default HELP;
