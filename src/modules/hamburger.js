function open(){
    // Hamburger menu
    const burgeric = document.querySelector(".hambuger__burger")
    const icon = document.getElementById("icon")
    var boo = false
    if(window.innerWidth < 600){
        boo = true
        if(boo){
            burgeric.classList.toggle("open")
            icon.classList.toggle("cover")
            icon.classList.toggle("open")
            icon.classList.remove("small")
            boo = false
        }
    }
}
export default open