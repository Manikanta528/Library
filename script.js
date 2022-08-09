let myLib = [];
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
    console.log(myLib); 
      
    e.preventDefault();
    const form1 = document.getElementById('book-adder');
    form1.style.visibility = 'hidden';
    
});


function formDisplay(){
    const form = document.getElementById('book-adder');
    form.style.visibility = 'visible';
}

// function addBookToLibrary(){
//     const obj = Object.create(Book);
//     obj.book = document.getElementById('#title').value;
//     obj.author = document.getElementById('#author').value;
//     obj.pages = document.getElementById('#pages').value;
//     obj.read = document.querySelector('#read').value;
//     myLib.push(obj); 
//     console.log(myLib);  
//     const form = document.getElementById('book-adder');
//     form.style.visibility = 'none';
// }