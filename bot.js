const { readFileSync, writeFile } = require("fs");

/**
 * @type {Array<command_json>}
 */
let json = [];

let file = readFileSync("./test/index.bot", { "encoding": "utf-8" });

let json_content_name = file.slice(file.indexOf("{name") + 6);
let json_data_name = json_content_name.slice(0, json_content_name.lastIndexOf("name}")).trim();

let data = json.find(d => d.command === json_data_name);

if (!data) {
    json.push({ command: json_data_name });
}

require("./src/parsers/SendChannelMessage")(file, json, {
    command: json_content_name
});

console.log(json);

writeFile("./test/commands.json", JSON.stringify(json), (err) => { if (err) console.log(err) });