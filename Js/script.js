let text = "Welcome to Zouhair";
let encode_text = btoa(text);

let decode_text = atob(encode_text);

let textarea = document.getElementById("text");
let result = document.getElementById("result");
let select = document.getElementById("select");

textarea.addEventListener("input",()=>{
    make_result();
});
select.addEventListener("change",()=>{
    make_result();
});
function make_result(){
    if(select.value == "decode"){
        result.value = window.atob(textarea.value);
    }else{
        result.value = window.btoa(textarea.value);
    }
}