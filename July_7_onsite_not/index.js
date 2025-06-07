function mycallback(text) {
    console.log("index mycallback " + text);
}
function callingfunction(initialtext, callback) {
    callback(initialtext);
}
callingfunction("myText", mycallback);
