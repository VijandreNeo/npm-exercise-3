# npm-exercise-3

This code makes use of the npm expression parser module as well as the property of process module which is process.argv.

The main functionality of the code is to get the first argument (infix expression) passed through the command-line and convert it into postfix.

If the code receives an argument more than one, it will print out an error.

e.g.

node index.js '1 * 2' '1 / 2'

expected result: Error: More than one argument.

If the code receives only a SINGLE argument, it will print out the postfix version of the argument passed.

e.g.

node index.js '7 * 8'

expected result: 7 8 *