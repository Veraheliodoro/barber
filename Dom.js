// selectioner img sur doc
let image = document.querySelector('.img-service') ;
console.log('image;', image );

// cree et adicioner un div au body avec Class

let div = document.createElement("div"); // creer un element
let body = document.querySelector("body"); // selectioner body 
div.classList.add("newdiv"); // adicioner une classe au div
body.appendChild(div); // adicioner le Div au document ( body)

// cree et adicioner un div au body avec Class
let condition = false ; 
let M = document.createElement("div"); // creer un element
let Y = document.querySelector("body"); // selectioner body
if (!condition){ // boolear podes utilisar ou nao == OU ===
    Y.appendChild(M); // adicioner le Div au document ( body)
}
M.setAttribute('id','new1div'); // adicioner une classe au div

 function myfuction(a , b) { // js e morto nao chama funcion et chamado
    console.log(a * b)
}
