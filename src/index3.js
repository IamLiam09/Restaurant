const hamburger = document.getElementById("hambuger")
const burgeric = document.querySelector(".hambuger__burger")
const icon = document.getElementById("icon")
var boo = false
hamburger.addEventListener("click", open)
function open(){
    if(!boo){
        burgeric.classList.add("open")
        icon.classList.add("cover")
        icon.style.visibility = "visible"
        boo = true
    }else{
        burgeric.classList.remove("open")
        icon.classList.remove("cover")
        icon.style.visibility = "hidden"
        boo = false
    }
}
