
var form=document.getElementById('addForm');
var itemList=document.getElementById('items');

form.addEventListener('submit',addItem);
itemList.addEventListener('click',removeItem);

function addItem(e)
{ 
e.preventDefault();

var newItem=document.getElementById('item').value;
var li=document.createElement('li');
li.className='list-group-item';
// add input text node to input value
li.appendChild(document.createTextNode(newItem));

var deleteB=document.createElement('button');
deleteB.className='btn btn-danger btn-sm float-right delete';

deleteB.appendChild(document.createTextNode('X'));

li.appendChild(deleteB);
itemList.appendChild(li);

// creating edit button
var newb=document.createElement('button');

newb.appendChild(document.createTextNode("Edit"));

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

