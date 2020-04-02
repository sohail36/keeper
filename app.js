
let notes;
if(localStorage.getItem('notes')===null){
    notes=[];
}
else{
    notes=JSON.parse(localStorage.getItem('notes'));
}


display();
function display(){
    notes.forEach(note => {
        var newelement=document.createElement('div');
        newelement.setAttribute('class','same');
        newelement.innerHTML=`
        <p style="font-weight:bold">${note.title}</p><br>
        <p>${note.content}</p>
        <i class="fa fa-trash w3-xlarge" id="delete"></i>
        `;
        document.querySelector('.cards').appendChild(newelement);
    });
}


function add(e){
    var head=document.querySelector("#title").value;
    var cont=document.querySelector("#content").value;
    var record={
        title:head,
        content:cont
    }
    notes.push(record)
    localStorage.setItem('notes',JSON.stringify(notes));
    newelement=document.createElement('div');
    newelement.setAttribute('class','same');
    newelement.innerHTML=`
    <p style="font-weight:bold">${head}</p><br>
    <p>${cont}</p>
    <i class="fa fa-trash w3-xlarge" id="delete"></i>
     `;
    document.querySelector('.cards').appendChild(newelement);
    document.querySelector("#title").value="";
    document.querySelector("#content").value="";
}

document.querySelector('.cards').addEventListener('click',(e)=>{
    if(e.target.classList.contains('fa'))
    delet(e);
});

function delet(e){
    var ele=(e.target.parentElement);
    notes.forEach((note,index) => {
        if(ele.children[0].innerHTML==note.title)
        notes.splice(index,1);
    });
    // console.log(ele.children[0].innerHTML);
    e.target.parentElement.remove();
    localStorage.setItem('notes',JSON.stringify(notes));
}


