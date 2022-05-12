let input = document.querySelector(".selectimg");
let row = document.querySelector(".row");
let dropzone = document.querySelector(".dropzone");
let click = document.querySelector(".btnclick");
let table = document.querySelector(".table");
let del=document.querySelector(".del")
let td1=document.querySelector(".td1")
let td2=document.querySelector(".td2")
let td3=document.querySelector(".td3")

click.addEventListener("click", () => {
  input.click();
});

input.addEventListener("change", (e) => {
  let files = Array.from(e.target.files);
  console.log(e);
  td1.innerText=files[0].name
  td2.innerText=files[0].size
  td3.innerText=files[0].type
  files.forEach((file) => {
    Showimg(file);
  });
});

function Showimg(file) {
  let filereader = new FileReader();
  filereader.readAsDataURL(file);
  filereader.addEventListener("loadend", () => {
    let col2 = document.createElement("div");
    col2.className = "col-lg-2 image";

    table.classList.add("d-block");
    
    let img = document.createElement("img");
    img.src = filereader.result;
    img.classList.add("img");
    // col2.appendChild(img);
    row.appendChild(col2);
  });
}
dropzone.addEventListener("dragover", (e) => {
  e.preventDefault();
});

dropzone.addEventListener("drop", (e) => {
  e.preventDefault();
  let files = Array.from(e.dataTransfer.files);
  files.forEach((file) => {
    Showimg(file);
    td1.innerText=files[0].name
  td2.innerText=files[0].size
  td3.innerText=files[0].type
  });
});

del.addEventListener('click',function(){
    table.remove()
})