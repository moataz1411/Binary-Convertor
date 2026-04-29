function TexttoBinary(){
    let text=document.getElementById("textInput").value;
    if (text===""){
    alert("please enter some text to convert")
    return;
}
    let result="";
    for(let i=0;i<text.length;i++){
        let binary=text[i].charCodeAt(0).toString(2);
        result+=binary+" ";
    }
    document.getElementById("binaryoutput").value=result.trim();
}
function BinarytoText(){

    let binary=document.getElementById("textInput").value;
        if (binary===""){
    alert("please enter some text to convert")
    return;
}
    let result="";
    let array=binary.split(" ");
    for(let i=0;i<array.length;i++){
        if(array[i]!==""){
            let char=String.fromCharCode(parseInt(array[i],2))
            result+=char;
        }    
    }
    document.getElementById("binaryoutput").value=result;
}
function CopyToClipboard(){
    let text=document.getElementById("binaryoutput");
    text.select();
    document.execCommand("copy");
    alert("copied successfully, Yaay!!");
}
function clearbtn(){
    document.getElementById("textInput").value="";
    document.getElementById("binaryoutput").value="";
}
document.getElementById("textInput").addEventListener("input",function(){
    let text= this.value;
    document.getElementById("count").textContent=`characters: ${text.length}`;
});

