// by default argv is an array
var argv = require('yargs').argv
// with the above statement argv becomes an object

// op1 is log representation with key value pair where as a is short representation. here the order does not matter as it is key value pair
var operand1 = argv.op1 ? argv.op1 : argv.a 
var operand2 = argv.op2 ? argv.op2 : argv.b
var operator = argv.opr ? argv.opr : argv.c

if (!operand1 || !operand2 || !operator)
{
    console.log('one or more arguments are not given or any argument is invalid');
    process.exit(1);
}
if ( operator == '+')
{
    console.log(operand1 + operand2)
}
else if ( operator == '-')
{
    console.log(operand1 - operand2)
}
else if ( operator == '*')
{
    console.log(operand1 * operand2)
}
else if ( operator == '/')
{
    console.log(operand1 / operand2)
}
else
{
    console.log('invalid operator')
    process.exit(1);
}

