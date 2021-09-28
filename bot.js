const { readFileSync, writeFile } = require("fs");

/**
 * @type {Array<command_json>}
 */
let json = [{
    command: "that"
}];

require("./src/parsers/SendChannelMessage")(readFileSync("./test/index.bot", { "encoding": "utf-8" }), json);

console.log(json);

writeFile("./test/commands.json", JSON.stringify(json), (err) => { console.log(err) });