let tegName = document.getElementsByTagName('ul')
let className = document.getElementsByClassName('nav-items')
let idName = document.getElementById('linkId')

function func1(){
    let Inp = document.getElementById('inp').getAttribute('type')
    // let Inp = document.getElementById('inp').setAttribute('disabled', 'disabled')
    // let Inp = document.getElementById('inp').setAttribute('class', 'bg-success')

    if (Inp === 'text'){
        document.getElementById('inp').setAttribute('type', 'password')
    }else{
        document.getElementById('inp').setAttribute('type', 'text')
    }
}

function setBg(color){
    let Inp = document.getElementById('inp').style.backgroundColor = color;
    document.getElementById('inp').style.color = 'white'
    console.log(Inp)
}