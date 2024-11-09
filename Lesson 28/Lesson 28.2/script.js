let arr = ["img/1.jfif", "img/2.jfif", "img/3.jfif", "img/4.jfif", 'img/5.jfif', 'img/6.jfif', 'img/7.jfif', 'img/8.jfif', 'img/9.jfif','img/10.jfif'];

document.getElementById('btn').onclick = function(){
    let list = "";
    for (let i of arr) {
          list = list +
          `
            <div class='col-4 my2'>
                <div class = 'card card-body'>
                    <img src = '${i}' alt = ''>
                </div>
            </div>
          `
    }

    arr.push("img/1.jfif", "img/2.jfif", "img/3.jfif", "img/4.jfif", 'img/5.jfif', 'img/6.jfif', 'img/7.jfif', 'img/8.jfif', 'img/9.jfif','img/10.jfif');
    document.getElementById('display').innerHTML = list
}
