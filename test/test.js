const generate = () => {
const randomColor = Math.floor(Math.random() * 16777215).toString(16);

   


document.querySelector(".color").style.backgroundColor = "#" + randomColor;
document.querySelector(".color").innerHTML = "#" + randomColor;


}
document.querySelector("button").addEventListener("click", generate);