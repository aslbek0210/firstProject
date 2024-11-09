let USERS = []
function addUser(){
    let userName = document.getElementById('userName').value
    let old = document.getElementById('old').value
    if(userName !== ''&& old !==''){
        USERS.push({ userName, old })
        chizish()
    }else{
        alert('inputlarni toldiring!')
    }
}
function chizish(){
    h4 = ''
    USERS.map((item, index) => h4 = h4 + `
    <div class='d-flex justify-content-between my-2'>
        <h4>${item.userName} ${item.old}<h4>
        <button class='btn btn-danger btn-sm' onclick='delUser(${index})'> del </burron>
    </div>
    `)
    document.getElementById('display').innerHTML = h4
    document.getElementById('userName').value = ''
    document.getElementById('old').value = ''
}
function delUser(index){ USERS.splice(index, 1); chizish()}