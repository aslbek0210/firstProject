// const string = 'this is the array that we want to split';
// let splittedString = string.split('')
// let count = 0
// for (let i of splittedString){
//     count++
// }
// console.log(count);




// 7-dars // 1-vazifa
// function seventyOneTask(){
//     let textarea = document.getElementById('textarea').value
//     textarea = textarea.split(' ')
//     let result = 0
//     for (let i of textarea){
//         if (i !== ' '){
//             result++
//         }
//     }
//     document.getElementById('display').innerHTML = result
// }



// 7-dars // 2-vazifa
// function size(){
//     let inp = document.getElementById('inp').files[0].size / 1024
//     inp = parseInt(inp)
//     document.getElementById('display').innerHTML = inp + 'kb'    
// }



// 7-dars // 3-vazifa
// function checkText(){
//     let textarea = document.querySelector('#textarea').value
//     let input = document.querySelector('#input').value
//     let display = document.querySelector('#display')
//     textarea = textarea.split(' ')
//     for (let i of textarea){
//         if (i == input){
//             display.innerHTML = 'bor'
//             return
//         }
//     }
//     display.innerHTML = 'yoq'
// }



// 7-dars // 4-vazifa
document.getElementById('btn').onclick = function(){
    input = document.getElementById('input').value
    let ochiq = 0
    let yopiq = 0
    for (let i of input){
        if (i === '(') ochiq++
        else if (i === ')') yopiq++
    }
    document.getElementById('textOne').innerText =
    ochiq + 'ta ochiq qavs bor va'
    + yopiq + 'ta yopiq qavs bor'

    if (ochiq > yopiq){
        document.getElementById('textTwo').innerText = 'ochuvchi qavslar soni kop'
    }else if (ochiq===yopiq){
        document.getElementById('textTwo').innerText = 'qavslar soni teng!'
    }else{
        document.getElementById('textTwo').innerText = 'yopuvchi qavslar soni kop'
    }
}