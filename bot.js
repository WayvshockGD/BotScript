const { readFileSync, writeFile } = require("fs");

/**
 * @type {Array<command_json>}
 */
let json = [];
let arr_data = [];
let count = 0;

let file = readFileSync("./test/index.bot", { "encoding": "utf-8" });


for (let code of file.split("\n")) {
    useArray(code);
    let json_content_name = code.slice(code.indexOf("{name") + 6);
    let json_data_name = json_content_name.slice(0, json_content_name.lastIndexOf("name}")).trim();

    let data = json.find(d => d.command === json_data_name);

    if (!data) {
        json.push({ command: json_data_name });
    }

    //require("./src/parsers/SendChannelMessage")(code, json, {
    //    command: json_content_name
    //});
}

console.log(json);

writeFile("./test/commands.json", JSON.stringify(json), (err) => { if (err) console.log(err) });

function useArray(c) {
    let arr = [];
    count =+ 1;

    arr.push(c);

    if (count < 4) {
        count = 0;

        arr_data.push(arr.join("\n"));
        
        for (let i of arr) {
            delete i;
        }

        console.log(arr)
    }
}