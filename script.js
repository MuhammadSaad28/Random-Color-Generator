function randomColor() {
    const randomNumber = Math.floor(Math.random() * 16777215);
    const colorCode = "#" + randomNumber.toString(16);
    document.body.style.backgroundColor = colorCode;
    document.getElementById("h2").innerText = colorCode;
    document.getElementById("copy").addEventListener("click", () => {
        navigator.clipboard.writeText(colorCode);
        document.getElementById("copy").innerText = "Copied";
       setTimeout(() => {
        document.getElementById("copy").innerText = "Copy to Clipboard";  

       }, 2000);
        
    })
}


randomColor();

document.getElementById("color").addEventListener("click", () => {

    randomColor();
    document.getElementById("copy").innerText = "Copy to Clipboard";  

})


