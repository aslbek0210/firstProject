let arr = []

const AddUser = () => {
    let fish = document.getElementById('fish').value
    let match = document.getElementById('match').value
    let pay = document.getElementById('pay').value
    let qator = document.getElementById('qator').value
    let date = new Date().getDate()+'.'+(new Date().getMonth()+1)+'.'+(new Date().getFullYear())
    
    if (fish !=='' && pay !=='' && match !=='' && qator !==''){
        arr.push({fish, match, pay, qator, date})
    }else{
        alert('Inputlarni toldiring')
    }
    Draw()
}

function Draw(){
    let tr = ''
    arr.map((item, index) => tr = tr+
        `<tr>
            <td>${index + 1}</td>
            <td>${item.fish}</td>
            <td>${item.match}</td>
            <td>${item.pay}</td>
            <td>${item.qator}</td>
            <td>${item.sana}</td>
            <td>
                <button class='btn btn-danger btn-sm' onclick='deleteUser(${index})'>
                del
                </button>
            </td>
        </tr>`)
    document.getElementById('display').innerHTML = tr


    document.getElementById('fish').value = ''
    document.getElementById('match').value = ''
    document.getElementById('pay').value = ''
    document.getElementById('qator').value = ''
    document.getElementById('date').value = ''
}


function deleteUser(index){
    arr.splice(index,1)
    Draw()
}