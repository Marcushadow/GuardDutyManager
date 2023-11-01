const form = document.querySelector('form#csvUploadForm');
const csvFile = document.getElementById("csvFile");



const fileHandler = (f) => {
    const text = f.target.result;
    setCookie("csvData", text, 300)
    var data = $.csv.toArrays(text);
    console.log(data);
    
}


const formHandler = (event) => {
    event.preventDefault();
    
    const input = csvFile.files[0];
    const reader = new FileReader();

    reader.onload = fileHandler
    reader.readAsText(input);
    window.location.replace("../static/menu.html");
}


  
//   tableCreate();

document.addEventListener("DOMContentLoaded", (event) => {
    
    form.addEventListener('submit', formHandler);

    
});

