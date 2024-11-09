//4-dars //1-vazifa
// var n = 20    
// var juft = 0
// var toq = 1

// for(var i = 1; i<n; i++){
//     if(i%2==0){
//         juft = juft+i   
//     }else{
//         toq = toq*i
//     }
// }
// console.log(juft);
// console.log(toq);

//4-dars //2-vazifa
// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]
// var juft = 0
// var toq = 0
// for(var i of arr){
//     if(i%2==0){
//         juft++
//     }else{
//         toq++
//     }
// }
// console.log('juft sonlar' + juft);
// console.log('toq sonlar' + toq);
//4-dars //3-vazifa
// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
// for(var i of arr){
//     if(i%2==0){
//         console.log(i);
//     }   
// }

//4-dars //4-vazifa
// var text = prompt('ixtipriy soz kiriting')
// text=text.toLowerCase()
// var count = 0
// for(var i of text){
//     if(i=='a') count++
//     if(i=='o') count++
//     if(i=='u') count++
//     if(i=='e') count++
//     if(i=='u') count++
//     if(i=="o'") count++
// }
// console.log(text+" so'zini ichida "+count+" ta unli harf bor!");

//5-dars //5-vazifa
// var arr = [4, 4, 5, 4, 4]
// for(var i = 0; i<arr.length; i++){
//     if(arr[i]==4){
//         arr.splice(i,1)
//         i--
//     }        
// }
// console.log(arr);