var span = document.getElementById('span');

function time(){
    var d = new Date();
    var s = d.getSeconds();
    var m = d.getMinutes();
    var h = d.getHours();
    span.textContent = String(h).padStart(2, "0")+ ":"+String(m).padStart(2, "0") +":"+String(s).padStart(2, "0");

}

setInterval(time,1000);