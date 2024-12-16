
const url = "http://localhost:3000/guestbook";
const listGroup = document.querySelector(".list-group");
let guest= document.getElementById("yourName");
let comment = document.getElementById("mycomment");
let signGuestbook = document.getElementById("signButton");
let guestbook = document.getElementById("viewGuestbook");
//let guestList=[];
let form = document.getElementById("myForm");


//These are my event listeners to make my buttons work 
signGuestbook.addEventListener("click", (event) => postGuestbook());
signGuestbook.addEventListener("click", (event) => renderGuestList());
signGuestbook.addEventListener("click", (event) => clearForm());
signGuestbook.addEventListener("click", (event) => createDelete());
//This is saving my data to my json server
async function postGuestbook(){

  const guestData = {
    "guest": document.getElementById("yourName").value,
    "comment": document.getElementById("myComment").value,
    }
    const response = await fetch("http://localhost:3000/guestbook",{
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(guestData)
  })
  
 const lastCreated = await response.json();

};
//this function clears the form for me I hooked it to the signguestbook button
  function clearForm() {
    form.reset();
  } 

let output="";
const getResponse= (response) => response.json();

const processJSON = (json) =>{

  if(!!Object.keys(json).length){
    output=`
    <li class = "list-group-item">${json.guest}</li>
    <li class = "list-group-item">${json.comment}</li>
    
    `;
  }
  listGroup.innerHTML = output;
};

const writeServe = (action, data) => ({
method: action,
body: JSON.stringify(data),
headers:{
  "Content-Type":"application/json; charset=UFT-8",
}

});

//GET 
fetch(`${url}/1`).then(getResponse).then(processJSON);

// Delete
const deletePost = document.getElementById("deletePost")
deletePost.addEventListener("click", ()=> {
  fetch(`
    ${url}/1`,{method: "DELETE"}).then(getResponse).then(processJSON);
});
