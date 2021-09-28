
/**
 * @param {string} content
 */
module.exports = function(content) {
    let regex = /Send_channel_message then:/g;
    let end_regex = /Send_channel_message then: [A-z] :end/;

    let sliced = content.slice(content.indexOf("Send_channel_message"));
    let sliced_then = sliced.slice(0, sliced.lastIndexOf("then:") + 5);
    let sliced_end = content.slice(content.indexOf(":end"));
    
    if (!regex.test(sliced_then)) {
        throw new SyntaxError(`"Send_channel_message then" is not correct. recieved: ${sliced_then}`);
    }

    if (!sliced_then.length) {
        throw new SyntaxError(":end is not at the end of 'Send_channel_message'.");
    }
    
    console.log(sliced_end)
}