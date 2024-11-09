function showHide(){
    let inp = document.getElementById('inp').getAttribute('type')
    console.log(inp);
    if(inp==='text'){
        document.getElementById('inp').setAttribute('type','password')
        document.getElementById('hide').style.display='block'
        document.getElementById('show').style.display='none'
    }else{
        document.getElementById('inp').setAttribute('type','text')
        document.getElementById('hide').style.display='none'
        document.getElementById('show').style.display='block'
    }
}