const mouseOn = (cell) => {
    cell.style.backgroundColor = "#f00";
    (cell.innerText == "Gmail") ?  window.open("https://gmail.com", "_blank") :
    (cell.innerText == "Yahoo") ?  window.open("https://mail.yahoo.com/", "_blank") :
    window.open("https://hotmail.com", "_blank")
}

const mouseOut = (cell) => {
    cell.style.backgroundColor = "white"
}