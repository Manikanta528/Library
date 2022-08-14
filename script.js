let myLib = [];
let count = 0;
const Book = {
    book : null,
    author : null,
    pages : null,
    read : false
}
document.getElementById('submit').addEventListener('click',(e)=>{
    
    const obj = Object.create(Book);
    obj.book = document.getElementById('title').value;
    obj.author = document.getElementById('author').value;
    obj.pages = document.getElementById('pages').value;
    const rea = document.getElementsByName('read');
    for(let i = 0 ; i < rea.length; i++){
        if(rea[i].checked){
            if(i == 0) obj.read = true;
            else obj.read = false;
        }
    }
    myLib.push(obj); 
    document.getElementById("form-book").reset();
    
    const form1 = document.getElementById('book-adder');
    form1.style.visibility = 'hidden';
    
    const card = document.createElement('div');
    
    card.innerHTML = `<label><span class = "card-head">Book Name </span>- ${myLib[count].book}</label>
    <label><span class = "card-head">Author </span>- ${myLib[count].author} </label>
    <label><span class = "card-head">No. of pages </span>- ${myLib[count].pages} </label>
    <label><span class = "card-head">Completed </span>- 
    
    <input type="checkbox" name="ReadOrNot" id="true" ${myLib[count].read == true? "checked":""}>
    </label>
    <button class="delete" onclick="deleteBook(this)"><h6>Delete Book</h6></button>
    `
    
    card.classList.add('item')
    card.setAttribute('id',`${count}`);
    document.getElementById('books').appendChild(card);
    count++;
    e.preventDefault();
});


function formDisplay(){
    const form = document.getElementById('book-adder');
    form.style.visibility = 'visible';
}
function deleteBook(element){
    let ind = Number(element.parentNode.id)
    document.getElementById('books').removeChild(element.parentNode);
    if(document.getElementById('books').childElementCount == 0){
        myLib = [];
        count = 0;
    }
}

