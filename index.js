const [{ parse, toString }, { argv }] = [
  require('@estilles/expression-parser'),
  require('node:process'),
];

const [, , ...args] = argv;

if (args.length > 1) {
  console.log('Error: More than one argument.');
} else {
  console.log(toString(parse(args[0])));
}
