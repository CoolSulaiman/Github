
var form=document.getElementById('addForm');
var itemList=document.getElementById('items');

form.addEventListener('submit',addItem);
itemList.addEventListener('click',removeItem);
filter.addEventListener('keyup', filterItems);


function addItem(e)
{ 
e.preventDefault();

var newItem=document.getElementById('item').value;
var li=document.createElement('li');
li.className='list-group-item';
// add input text node to input value
li.appendChild(document.createTextNode(newItem));

// adding description
var newD=document.getElementById('Description').value;
li.appendChild(document.createTextNode(newD));

var deleteB=document.createElement('button');
deleteB.className='btn btn-danger btn-sm float-right delete';

deleteB.appendChild(document.createTextNode('X'));

li.appendChild(deleteB);
itemList.appendChild(li);





// creating edit button
var newb=document.createElement('button');

newb.appendChild(document.createTextNode("Edit"));
newb.style.color='green';
newb.style.backgroundColor='#f4f4f4'
newb.style.borderBlockColor='yellow';
newb.style.width='100px';
newb.style.margin='10px';
li.appendChild(newb);

}

function removeItem(e)
{
    if(e.target.classList.contains('delete'))
    {
        if(confirm("are u sure"))
        {
            var li=e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

function filterItems(e){
    // convert text to lowercase
    var text = e.target.value.toLowerCase();
    // Get lis
    var items = itemList.getElementsByTagName('li');
    
    // Convert to an array
    Array.from(items).forEach(function(item){

      var itemName = item.firstChild.textContent;
      var des=item.childNodes[1].textContent;
      if(itemName.toLowerCase().indexOf(text) != -1 || des.toLowerCase().indexOf(text) != -1){
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }
  console.log(document);