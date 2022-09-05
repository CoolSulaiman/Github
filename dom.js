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

var items=document.getElementsByClassName("list-group-item");
console.log(items);

items[3].style.backgroundColor='green';
for(var i=0;i<items.length;i++)
{
    items[i].style.fontWeight='bold';
}

var itm=document.getElementsByTagName('li');

console.log(itm[1]);
itm[4].textContent='hello bro';
itm[4].style.fontWeight='bold';

