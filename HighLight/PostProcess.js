const p = document.getElementsByTagName('p');
// const span = document.querySelectorAll('span');
// const div = document.querySelectorAll('div');
// // const id = 
// // span[0].style.background = "yellow";
// console.log(span.length);
// // var i =0;

// for(let i=0;i<span.length;i++){
//     // span[i].style.background = 'yellow';
//     // div[3].remove(div[3]);
//     span[i].remove();
// }
// console.log(div[3]);

// // span.style.background="yellow";

// // console.log(p);

window.onload = function(){
    let newPage = "ProcessedFile.html";
    let newWin = window.open(newPage);
    console.log(newPage);
}


newWin.onload = function(){
    console.log('this is the new page');
}

console.log(p);
