
document.getElementsByClassName("btn1")[0].addEventListener("click",addData);


console.log(length);


function addData(e){
    var flag =1;
    var siteName = document.getElementById("siteName").value;
    var siteURL = document.getElementById("siteURL").value;
    if(siteName === "" || siteURL ===  ""){
        document.getElementsByClassName("alert")[0].style.display ="block";
        flag = 0;
    }
    else{
        document.getElementsByClassName("alert")[0].style.display ="none";

    }
    let length = null;
    let storage = localStorage.getItem('bookmarks');
    storage = JSON.parse(storage);
    if(storage === null) {
        length  = 0;
    }else {
        length = storage.length;    
    }

    var bookmark={
        length: length + 1,
        name:siteName,
        url:siteURL
    }
    
   if(flag == 1){
    if(localStorage.getItem("bookmarks") === null){
        let bookmarks =[];
        bookmarks.push(bookmark);
        localStorage.setItem("bookmarks",JSON.stringify(bookmarks));
    }
    else{
        bookmarks= JSON.parse(localStorage.getItem("bookmarks"));
        console.log(bookmark);
        bookmarks.push(bookmark);
        localStorage.setItem("bookmarks",JSON.stringify(bookmarks));
    }
    fetchData();
    }
    document.getElementById("formId").reset();
    e.preventDefault();
    
}
function fetchData(){
    var htmlval =`<div class='list parent'><p>WEBSITE</p>
    <p>LINK TO VISIT</p>
    <p>DELETE BUTTON</p></div>`;
    var bookmarkvalue = JSON.parse(localStorage.getItem("bookmarks"));
    for(var i =0;i<bookmarkvalue.length;i++){
        htmlval += `<div class='list'><p>${bookmarkvalue[i].name}</p>
        <p><a href=${bookmarkvalue[i].url} target="_blank">${bookmarkvalue[i].url}</a></p>
        <button class="btn btn-danger" onclick='deleteData(this, event)'>DELETE</button></div>`;
    }
    document.getElementById("list").innerHTML = htmlval;  
}
function deleteData(ele, event){
// console.log(event.target.parentNode.parentNode.removeChild(event.target.parentNode));
var delname = event.target.parentNode.firstChild.innerHTML;
var value = JSON.parse(localStorage.getItem("bookmarks"));
for(var i =0;i<value.length;i++){
    if(value[i].name === delname){
        value.splice(i,1);
    }
}
localStorage.setItem("bookmarks",JSON.stringify(value));
fetchData();
}

