
/**
 * @param {string} content
 * @param {Array<object>} json
 */
module.exports = function(content, json) {
    let regex = /Send_channel_message then:/g;
    let slice_content = "Send_channel_message then:";
    let sliced = content.slice(content.indexOf(slice_content), content.lastIndexOf(slice_content) - 12);
    console.log(sliced)
    let keys = content.slice(content.indexOf(slice_content) + 27, content.lastIndexOf(slice_content) - 5);
    sliced = sliced.slice(0, content.indexOf("then:") + 5);
    
    if (!regex.test(sliced)) {
        throw new SyntaxError(`"Send_channel_message then" is not correct. recieved: ${sliced}`);
    };
}