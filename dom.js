console.dir("hello");

console.log(document.title);
console.log(document.domain);
console.log(document.url);
console.log(document.all); 
document.title=576;
document.all[10].textContent='hello';

var headerT=document.getElementById("header-title");
var header=document.getElementById("main-header");

console.log(headerT);
console.log(header);

headerT.textContent='Heyaa';
headerT.innerHTML='<h2> HEYAA</h2>';

header.style.borderBottom='solid 3px #000';