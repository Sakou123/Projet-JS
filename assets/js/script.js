
var text = document.getElementById('text');
var max = document.getElementById('text').maxLength;

document.getElementById('count').innerHTML = max;

text.onkeyup = text.onkeypress = function(){
    document.getElementById('text-live').innerHTML = this.value;

    let count = max - text.value.length;
    document.getElementById('count').innerHTML = count; 

    let progress = 100*this.value.length/max;

    document.getElementById("progress-bar").style.setProperty('width',progress.toString()+'%');
}



