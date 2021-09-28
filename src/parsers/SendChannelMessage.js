
/**
 * @param {string} content
 * @param {Array<command_json>} json
 * @param {meta} metaData
 */
module.exports = function(content, json, metaData) {
    let regex = /Send_channel_message then:/g;
    let json_regex = /[A-z]/g;

    let slice_content = "Send_channel_message then:";
    
    let sliced = content.slice(content.indexOf(slice_content), content.lastIndexOf("then:"));

    if (!regex.test(`${sliced}then:`)) {
        throw new SyntaxError(`"Send_channel_message then" is not correct. recieved: ${sliced}`);
    };
}