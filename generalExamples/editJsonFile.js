const fs = require('fs')

var json_to_js = JSON.parse(fs.readFileSync('json_out.json').toString());

json_to_js.title = "Changed programatically"

fs.writeFileSync('json_out.json',JSON.stringify(json_to_js));