const randomRedirect = () => {
    /*let num = parseInt(Math.random()*3); ==> This version isn't necessary */ 
    num = Math.floor(Math.random()*3);
    
    (num === 0) ? window.location.href = "https://outlook.com" :
    (num === 1) ? window.location.href = "https://gmail.com" :
    window.location.href = "https://mail.yahoo.com/";
}