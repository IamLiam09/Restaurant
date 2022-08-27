import "./styles/main.scss"
import wake from "./assets/wake.svg"
import chicken from "./assets/chicken.png"
import wave from "./assets/wave.jpg"
import  ziglines from "./assets/ziglines.jpg"
import ziglines2 from "./assets/ziglines2.jpg"

const body = document.querySelector("body")
const img = document.getElementById("plate")
const bg = document.getElementById("bgimage")
const ziglinesimg = document.getElementById("zigline__1")
const ziglines2img = document.getElementById("zigline__2")
const ziglines3img = document.getElementById("zigline__3")
const ziglines4img = document.getElementById("zigline__4")
img.src = chicken
bg.src = wave
ziglinesimg.src = ziglines
ziglines2img.src = ziglines2
ziglines3img.src = ziglines2
ziglines4img.src = ziglines2

