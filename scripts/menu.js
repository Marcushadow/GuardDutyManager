const backButton = document.getElementById("backButton")

window.onbeforeunload = function (e) {
    var e = e || window.event;

    window.location.replace("../index.html");
    // For IE and Firefox
    if (e) {
        e.returnValue = 'Leaving the page';
    }

    // For Safari
    return 'Leaving the page';
};



function tableCreate() {
    const location = document.getElementById("pointsList");
    const tbl = document.createElement('table');
    tbl.style.width = '100px';
    tbl.style.border = '1px solid black';
  
    for (let i = 0; i < 3; i++) {
      const tr = tbl.insertRow();
      for (let j = 0; j < 2; j++) {
        if (i === 2 && j === 1) {
          break;
        } else {
          const td = tr.insertCell();
          td.appendChild(document.createTextNode(`Cell I${i}/J${j}`));
          td.style.border = '1px solid black';
          if (i === 1 && j === 1) {
            td.setAttribute('rowSpan', '2');
          }
        }
      }
    }
    location.appendChild(tbl);
}

backButton.addEventListener("click", (e)=> {
    eraseCookie("csvData")
    window.location.replace("../index.html")
})

document.addEventListener("DOMContentLoaded", (event) => {
    const csvData = getCookie("csvData");
    
    console.log(csvData);
} )