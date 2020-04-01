const file = require('fs')
var jsObj = {
    title : "This is java script",
    author : "me"
}

var jsstringify = JSON.stringify(jsObj);
console.log(`converts the javastring to JSON ${jsstringify}`)

file.writeFile('json_out.json',jsstringify,(error)=>{
    if (error){console.log(error)}
    else {console.log('Successfully file got created')}
})
var backtojsObj = JSON.parse(jsstringify)
console.log(backtojsObj)