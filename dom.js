console.dir("hello");

console.log(document.title);
console.log(document.domain);
console.log(document.url);
console.log(document.all); 
document.title=576;
document.all[10].textContent='hello';

var headerT=document.getElementById("header-title");
var header=document.getElementById("main-header");


headerT.textContent='Heyaa';
headerT.innerHTML='<h2> HEYAA</h2>';

header.style.borderBottom='solid 3px #000';

var items=document.getElementsByClassName("list-group-item");
console.log(items);

for(var i=0;i<items.length;i++)
{
    items[i].style.fontWeight='bold';
}

var itm=document.getElementsByTagName('li');

console.log(itm[1]);
itm[4].textContent='hello bro';
itm[4].style.fontWeight='bold';

items[1].style.backgroundColor='green';

var second=document.querySelectorAll('.list-group-item');
second[1].style.color='green';

var odd=document.querySelectorAll('li:nth-child(odd)');

for(var i=0;i<odd.length;i++)
{
   odd[i].style.backgroundColor='';
}

var node=document.querySelector("#items");

console.log(node.parentNode);
node.parentNode.style.backgroundColor='#f4f4f4';


console.log(node.lastChild);

node.lastElementChild.style.color='blue';
node.lastElementChild.textContent='beach'
node.firstElementChild.style.color='orange';
node.firstElementChild.textContent='Storm'
console.log(node.nextElementSibling);
node.previousSibling.textContent='HEllo'


var newdiv=document.createElement('div');
newdiv.className='hello';
newdiv.id='hello1';

console.log(newdiv);

var nwdivtxt=document.createTextNode('Once upon a time');
newdiv.appendChild(nwdivtxt);
node.parentNode.previousSibling.textContent='HEllo';

var  jhg=document.getElementById("main");

