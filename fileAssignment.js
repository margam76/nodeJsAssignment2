const yargs = require('yargs');

if(yargs.argv._[0])
{
const fileName  = yargs.argv._[0];
const file = require('fs')
if(file.existsSync('fileNames.txt'))
{
    file.readFile('fileNames.txt',(err,data)=>{
        if (err) throw err;
     
        if(data.indexOf(fileName) >= 0){
            console.log(fileName + " already exists")
           }
           else
           file.appendFile('fileNames.txt',fileName+'\n',(err)=>{
            if (err) throw err;
        });
    });
}
else
{
    file.writeFile('fileNames.txt',fileName+'\n',(err)=>{
        if (err) throw err;
    });
}
var test1content=`${fileName} -- Hi, How are you
I am doing fine.
How is everything else?`
file.writeFile(fileName,test1content,(err)=>{
    if (err) throw err;
});

}
else
{
    console.log('Please give the file name in the command line args')
}


