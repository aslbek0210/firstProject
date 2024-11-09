function Translater(){
    let inp = document.getElementById('inp').value
    inp = inp.toLowerCase()
    if(inp==='apple'){
        document.getElementById("display").innerText = "olma";
        document.getElementById("display").style.color='green';
    }else{
        document.getElementById("display").innerText = "Soz topilmadi";
        document.getElementById("display").style.color='red';
    }
}