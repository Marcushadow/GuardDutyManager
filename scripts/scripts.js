const form = document.querySelector('form#csvUploadForm');
const csvFile = document.getElementById("csvFile");

const fileHandler = (f) => {
    const text = f.target.result;
    console.log(text);
    var data = $.csv.toArrays(text);
    console.log(data);
    
}

const formHandler = (event) => {
    event.preventDefault();
    
    const input = csvFile.files[0];
    const reader = new FileReader();

    reader.onload = fileHandler
    reader.readAsText(input);
//     var data = $.csv.toArrays(csv)
//     console.log(data)
}

document.addEventListener("DOMContentLoaded", (event) => {
    
    form.addEventListener('submit', formHandler);

    
});

