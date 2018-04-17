var fs = require("fs")
var json_loc = process.env["JSON_LOC"]
if (json_loc === undefined) return console.error("no json")
console.log("using: "+json_loc)

var user_options;
var option_json = fs.readFile(json_loc + "/master.json", getBaseOptionsFromJSON)
console.log(option_json)
function getBaseOptionsFromJSON (error, json_string) {
  if (error) return console.error('Uhoh, there was an error', error)
  user_options= JSON.parse(json_string.toString())
  console.log(user_options)
  console.log(option_json)
  return user_options
}
console.log(user_options + '-----')
