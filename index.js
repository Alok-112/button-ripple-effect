let btnEl = document.querySelector(".btn")

btnEl.addEventListener("mouseover", (event) => {
    let x = event.pageX - btnEl.offsetTop;
    let y = event.pageX - btnEl.offsetTop;


    btnEl.style.setProperty("--xPos", x + "px");
    btnEl.style.setProperty("--yPos", y + "px");

})