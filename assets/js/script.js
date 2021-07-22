
var text = document.getElementById('text');
var max = 20;
var textlive = document.getElementById('text-live');

text.onkeyup = text.onkeypress = function(){
    
    document.getElementById('text-live').innerHTML = this.value;

    let backcount = text.value.length;
    let count = max - textlive.textContent.length;
    document.getElementById('count').innerHTML = count; 
    if (count == 0){
        text.setAttribute('maxlength',backcount)
    }

    let progress = 100*textlive.textContent.length/max;

    document.getElementById("progress-bar").style.setProperty('width',progress+'%');
    
    // if (KeyboardEvent.keyCode == 13) mafonction()

    //LE SWITCH VEUT PAS MARCHER DONC YEET

    if (progress<8){
        document.getElementById("progress-bar").style.setProperty('background-color', "#18DC54");                       //Fonctionne comme style.backgroundColor
    } else if (progress>=8 && progress<16){
        document.getElementById("progress-bar").style.backgroundColor = "#59df49";
    } else if (progress>=16 && progress<25){
        document.getElementById("progress-bar").style.backgroundColor = "#7de23e";
    } else if (progress>=25 && progress<33){
        document.getElementById("progress-bar").style.backgroundColor = "#9be435";
    } else if (progress>=33 && progress<42){
        document.getElementById("progress-bar").style.backgroundColor = "#b6e62f";
    } else if (progress>=42 && progress<50){
        document.getElementById("progress-bar").style.backgroundColor = "#c9da19";
    } else if (progress>=50 && progress<59){
        document.getElementById("progress-bar").style.backgroundColor = "#dace04";
    } else if (progress>=59 && progress<67){
        document.getElementById("progress-bar").style.backgroundColor = "#e8c100";
    } else if (progress>=67 && progress<76){
        document.getElementById("progress-bar").style.backgroundColor = "#f1a300";
    } else if (progress>=76 && progress<84){
        document.getElementById("progress-bar").style.backgroundColor = "#f88100";
    } else if (progress>=84 && progress<92){
        document.getElementById("progress-bar").style.backgroundColor = "#fd5800";
    } else {
        document.getElementById("progress-bar").style.backgroundColor = "#FF0000";
    }
}

let loading = document.getElementById('img');

text.onfocus = () => {
    loading.style.visibility = "visible";
} 
text.onblur = () => {
    loading.style.visibility = "hidden";
}

function bold(){
    text.value += "<b></b>";
}
function italic(){
    text.value += "<i></i>";
}
