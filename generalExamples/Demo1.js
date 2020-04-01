// import file system module. file 
const yargs = require('yargs');
let commandlinearg = yargs.argv._[0];
//console.log(yargs.argv._[0].length);
const fs = require('fs');
var data = fs.readFile(commandlinearg,function(err,data){
    console.log(data.toString())
})


