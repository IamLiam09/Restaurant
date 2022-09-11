const headcomponent = () => {
    let header = document.createElement("header")
        // Heading innerHTML
    header.innerHTML = `
                    <div class="hambuger" id="hambuger">
                        <div class="hambuger__burger" id="burgerham"></div>
                    </div>
                    <div class="icon" id="icon">
                        <div class="Home button active"><a href="#">Home</a></div>
                        <div class="button Catalog"><a href="#">Catalog</a></div>
                        <div class="button Contact"><a href="#">Contact</a></div>
                    </div>`
    return header
}
export default headcomponent