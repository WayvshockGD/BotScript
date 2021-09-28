
/**
 * @param {string} content
 * @param {Array<command_json>} json
 */
module.exports = function(content, json) {
    let regex = /Send_channel_message then:/g;
    let json_regex = /[A-z]/g;

    let slice_content = "Send_channel_message then:";

    let json_content = content.slice(content.indexOf("{name") + 6);
    let json_data = json_content.slice(0, json_content.lastIndexOf("name}")).trim();

    if (!json_regex.test(json_data)) {
        throw new SyntaxError(`"${json_data}" does not match the regex. ${json_regex}`);
    }
    
    let sliced = content.slice(content.indexOf(slice_content), content.lastIndexOf("then:"));

    if (!regex.test(`${sliced}then:`)) {
        throw new SyntaxError(`"Send_channel_message then" is not correct. recieved: ${sliced}`);
    };

    let found_data = json.find(d => d.command === json_data);

    if (!found_data) {
        return console.log(`Could not find json data "${json_data}"`);
    }
}