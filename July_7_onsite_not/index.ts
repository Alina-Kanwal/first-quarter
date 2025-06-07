function mycallback(text : string){
    console.log("inside mycallback " + text)
}
function callingfunction(initialtext : string , callback : (text : string) => void)
{
  callback(initialtext);
}
callingfunction("myText" , mycallback);

