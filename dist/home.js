/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"html, * {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n}\\n\\n#content {\\n  height: 450vh;\\n}\\n#content header {\\n  position: fixed;\\n  top: 0 !important;\\n}\\n#content header.extra {\\n  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3);\\n  backdrop-filter: blur(10px);\\n}\\n#content .menu {\\n  overflow: hidden;\\n  font-family: \\\"Poppins\\\", sans-serif;\\n  margin: 0 auto;\\n  margin-top: 40px !important;\\n  max-width: 1200px;\\n  width: 95%;\\n  scroll-behavior: smooth;\\n}\\n#content .menu span {\\n  color: #FFC440;\\n}\\n#content .menu .delicacies .heading {\\n  display: flex;\\n  justify-content: space-between;\\n  margin-bottom: 15px;\\n}\\n#content .menu .delicacies .heading .scrollers {\\n  position: relative;\\n  left: -2%;\\n  top: 0;\\n  overflow: hidden;\\n  display: flex;\\n  width: 80px;\\n  justify-content: center;\\n  align-items: center;\\n  z-index: 2;\\n}\\n#content .menu .delicacies .heading .scrollers .holder {\\n  width: 25px;\\n  height: 25px;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  border-radius: 50%;\\n  margin: 5px;\\n  visibility: hidden;\\n}\\n#content .menu .delicacies .heading .scrollers .holder:focus {\\n  background-color: #FFC440;\\n}\\n#content .menu .delicacies .heading .scrollers .holder:hover {\\n  background-color: #FFC440;\\n}\\n#content .menu .delicacies .heading .scrollers .holder .fa {\\n  visibility: hidden;\\n  width: 15px;\\n  height: 15px;\\n  color: black;\\n}\\n#content .menu .delicacies .heading .scrollers .holder .fa:focus {\\n  color: white;\\n}\\n#content .menu .delicacies .heading .scrollers .holder .fa:hover {\\n  color: white;\\n}\\n#content .menu .category .foodselection, #content .menu .category .swiper-wrapper {\\n  display: grid;\\n  grid-template-columns: 1fr 1fr 1fr 1fr;\\n  text-align: center;\\n  gap: 20px;\\n  margin-bottom: 40px;\\n}\\n#content .menu .category .foodselection .food_in_selection, #content .menu .category .swiper-wrapper .food_in_selection {\\n  width: 250px;\\n  height: 50px;\\n  padding: 10px;\\n  box-shadow: 0.5px 0.5px 3px 0.5px black;\\n  display: grid;\\n  align-items: center;\\n  justify-items: center;\\n  grid-template-columns: 0.6fr 2fr;\\n  border-radius: 10px;\\n  margin: 5px;\\n}\\n#content .menu .category .foodselection .food_in_selection h3, #content .menu .category .swiper-wrapper .food_in_selection h3 {\\n  justify-self: left;\\n}\\n#content .menu .category .foodselection .food_in_selection .cont, #content .menu .category .swiper-wrapper .food_in_selection .cont {\\n  width: 30px;\\n  height: 30px;\\n  border-radius: 50%;\\n}\\n#content .menu .category .foodselection .food_in_selection .cont img, #content .menu .category .swiper-wrapper .food_in_selection .cont img {\\n  width: 100%;\\n  height: 100%;\\n  object-fit: cover;\\n  border-radius: 50%;\\n}\\n#content .menu__bestseller .__bestmenu, #content .menu__bestseller .swiper-wrapper {\\n  display: grid;\\n  grid-template-columns: 1fr 1fr 1fr 1fr;\\n  gap: 22px;\\n  text-align: center;\\n  margin-bottom: 40px;\\n}\\n#content .menu__bestseller .__bestmenu .__bestmain, #content .menu__bestseller .swiper-wrapper .__bestmain {\\n  width: 250px;\\n  height: 300px;\\n  box-shadow: 0.5px 0.5px 3px 0.5px black;\\n  display: grid;\\n  grid-template-rows: 1fr 0.1fr 0.1fr 0.9fr;\\n  border-radius: 10px;\\n  text-align: left;\\n  margin: 5px;\\n}\\n#content .menu__bestseller .__bestmenu .__bestmain .star, #content .menu__bestseller .swiper-wrapper .__bestmain .star {\\n  padding-left: 5px;\\n}\\n#content .menu__bestseller .__bestmenu .__bestmain .fa-star, #content .menu__bestseller .swiper-wrapper .__bestmain .fa-star {\\n  color: #FFC440;\\n  padding-bottom: 30px;\\n  justify-items: start;\\n}\\n#content .menu__bestseller .__bestmenu .__bestmain h4, #content .menu__bestseller .swiper-wrapper .__bestmain h4 {\\n  padding: 5px;\\n}\\n#content .menu__bestseller .__bestmenu .__bestmain img, #content .menu__bestseller .swiper-wrapper .__bestmain img {\\n  width: 100%;\\n  object-fit: cover;\\n  background-image: cover;\\n  border-radius: 10px 10px 0px 0px;\\n}\\n#content .menu__bestseller .heading {\\n  display: flex;\\n  justify-content: space-between;\\n  margin-bottom: 15px;\\n}\\n#content .menu__bestseller .heading .scrollers {\\n  position: relative;\\n  left: -2%;\\n  top: 0;\\n  overflow: hidden;\\n  display: flex;\\n  width: 80px;\\n  justify-content: center;\\n  align-items: center;\\n  z-index: 2;\\n}\\n#content .menu__bestseller .heading .scrollers .holder {\\n  width: 25px;\\n  height: 25px;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  border-radius: 50%;\\n  margin: 5px;\\n  visibility: hidden;\\n}\\n#content .menu__bestseller .heading .scrollers .holder:focus {\\n  background-color: #FFC440;\\n}\\n#content .menu__bestseller .heading .scrollers .holder:hover {\\n  background-color: #FFC440;\\n}\\n#content .menu__bestseller .heading .scrollers .holder .fa {\\n  visibility: hidden;\\n  width: 15px;\\n  height: 15px;\\n  color: black;\\n}\\n#content .menu__bestseller .heading .scrollers .holder .fa:focus {\\n  color: white;\\n}\\n#content .menu__bestseller .heading .scrollers .holder .fa:hover {\\n  color: white;\\n}\\n#content .menu__newitems .__newmenu, #content .menu__newitems .swiper-wrapper {\\n  display: grid;\\n  grid-template-columns: 1fr 1fr 1fr 1fr;\\n  gap: 22px;\\n  width: 100%;\\n  text-align: center;\\n  margin-bottom: 40px;\\n}\\n#content .menu__newitems .__newmenu .__newmain, #content .menu__newitems .swiper-wrapper .__newmain {\\n  width: 250px;\\n  height: 300px;\\n  box-shadow: 0.5px 0.5px 3px 0.5px black;\\n  display: grid;\\n  align-items: center;\\n  grid-template-rows: 1fr 0.1fr 0.8fr 0.1fr;\\n  border-radius: 10px;\\n  text-align: left;\\n  margin: 5px;\\n}\\n#content .menu__newitems .__newmenu .__newmain .star, #content .menu__newitems .swiper-wrapper .__newmain .star {\\n  padding-left: 5px;\\n}\\n#content .menu__newitems .__newmenu .__newmain .fa-star, #content .menu__newitems .swiper-wrapper .__newmain .fa-star {\\n  color: #FFC440;\\n  padding-bottom: 30px;\\n  justify-items: start;\\n}\\n#content .menu__newitems .__newmenu .__newmain h4, #content .menu__newitems .swiper-wrapper .__newmain h4 {\\n  padding: 5px;\\n}\\n#content .menu__newitems .__newmenu .__newmain img, #content .menu__newitems .swiper-wrapper .__newmain img {\\n  width: 100%;\\n  object-fit: cover;\\n  background-image: cover;\\n  border-radius: 10px 10px 0px 0px;\\n}\\n#content .menu__newitems .heading {\\n  display: flex;\\n  justify-content: space-between;\\n  margin-bottom: 15px;\\n}\\n#content .menu__newitems .heading .scrollers {\\n  position: relative;\\n  left: -2%;\\n  top: 0;\\n  overflow: hidden;\\n  display: flex;\\n  width: 80px;\\n  justify-content: center;\\n  align-items: center;\\n  z-index: 2;\\n}\\n#content .menu__newitems .heading .scrollers .holder {\\n  width: 25px;\\n  height: 25px;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  border-radius: 50%;\\n  margin: 5px;\\n  visibility: hidden;\\n}\\n#content .menu__newitems .heading .scrollers .holder:focus {\\n  background-color: #FFC440;\\n}\\n#content .menu__newitems .heading .scrollers .holder:hover {\\n  background-color: #FFC440;\\n}\\n#content .menu__newitems .heading .scrollers .holder .fa {\\n  visibility: hidden;\\n  width: 15px;\\n  height: 15px;\\n  color: black;\\n}\\n#content .menu__newitems .heading .scrollers .holder .fa:focus {\\n  color: white;\\n}\\n#content .menu__newitems .heading .scrollers .holder .fa:hover {\\n  color: white;\\n}\\n#content .menu .article {\\n  margin-top: 70px;\\n  position: relative;\\n}\\n#content .menu .article__details {\\n  display: grid;\\n  grid-template-columns: 1fr 1fr;\\n  margin-top: 20px;\\n  border-radius: 1px 50px 0px 50px;\\n}\\n#content .menu .article__details .__imgcont {\\n  height: 80%;\\n  width: 75%;\\n}\\n#content .menu .article__details .__imgcont .createdzig {\\n  width: 30%;\\n  height: 30%;\\n  position: absolute;\\n  top: -7%;\\n  left: 20%;\\n  transform: rotate(30deg);\\n}\\n#content .menu .article__details .__imgcont .createdzig:nth-child(2) {\\n  width: 30%;\\n  height: 30%;\\n  position: absolute;\\n  z-index: 2;\\n  top: -8%;\\n  left: -8%;\\n  transform: rotate(350deg);\\n}\\n#content .menu .article__details .__imgcont .circle2 {\\n  width: 30px;\\n  height: 30px;\\n  border-radius: 50%;\\n  border: 6px solid #FFC440;\\n  position: absolute;\\n  top: 79%;\\n  display: inline;\\n  left: 35%;\\n}\\n#content .menu .article__details .__imgcont .circle {\\n  width: 350px;\\n  height: 350px;\\n  border-radius: 50%;\\n  border: 2px solid #FFC440;\\n  position: absolute;\\n  display: inline;\\n  z-index: -1;\\n  top: -5%;\\n  left: -20%;\\n}\\n#content .menu .article__details .__imgcont img {\\n  width: 100%;\\n  height: 100%;\\n  object-fit: cover;\\n  border-radius: 1px 50px 0px 50px;\\n}\\n#content .menu .article__details .__writeup {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  gap: 10px;\\n  width: 70%;\\n  margin-bottom: 40%;\\n}\\n#content .menu .article__details .__writeup .createdzig {\\n  width: 30%;\\n  height: 30%;\\n  position: absolute;\\n  z-index: 2;\\n  top: 0%;\\n  right: -8%;\\n  transform: rotate(120deg);\\n}\\n#content .menu .article__details .__writeup p {\\n  font-size: 0.8rem;\\n}\\n#content .menu .article__details .__writeup .fillercont {\\n  display: flex;\\n  gap: 8px;\\n}\\n#content .menu .article__details .__writeup .fillercont .fillerwords {\\n  background-color: hsl(100deg, 0%, 89%);\\n  border-radius: 10px;\\n  padding: 5px;\\n  width: 100px;\\n  height: 25px;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n#content .menu .article2 {\\n  position: relative;\\n}\\n#content .menu .article2__details {\\n  display: grid;\\n  grid-template-columns: 1fr 1fr;\\n  margin-top: 20px;\\n  margin-bottom: 20px;\\n}\\n#content .menu .article2__details .__imgcont {\\n  height: 140%;\\n  width: 80%;\\n}\\n#content .menu .article2__details .__imgcont #createdzig3 {\\n  width: 30%;\\n  height: 30%;\\n  position: absolute;\\n  top: 14%;\\n  right: 65%;\\n  transform: rotate(30deg);\\n}\\n#content .menu .article2__details .__imgcont #createdzig4 {\\n  width: 30%;\\n  height: 30%;\\n  position: absolute;\\n  top: -34%;\\n  right: 25%;\\n  transform: rotate(30deg);\\n}\\n#content .menu .article2__details .__imgcont #createdzig5 {\\n  width: 20%;\\n  height: 20%;\\n  position: absolute;\\n  top: 85%;\\n  left: 20%;\\n  transform: rotate(0deg);\\n}\\n#content .menu .article2__details .__imgcont .circle {\\n  width: 30px;\\n  height: 30px;\\n  border-radius: 50%;\\n  border: 6px solid #FFC440;\\n  position: absolute;\\n  top: 110%;\\n  display: inline;\\n  right: 90%;\\n}\\n#content .menu .article2__details .__imgcont .circle:nth-child(2) {\\n  width: 30px;\\n  height: 30px;\\n  border-radius: 50%;\\n  border: 6px solid #FFC440;\\n  position: absolute;\\n  top: 9%;\\n  display: inline;\\n  left: 2%;\\n}\\n#content .menu .article2__details .__imgcont .circle:nth-child(3) {\\n  width: 30px;\\n  height: 30px;\\n  border-radius: 50%;\\n  border: 6px solid #FFC440;\\n  position: absolute;\\n  bottom: 0%;\\n  display: inline;\\n  left: 35%;\\n}\\n#content .menu .article2__details .__imgcont .square {\\n  width: 350px;\\n  height: 350px;\\n  border: 2px solid #FFC440;\\n  position: absolute;\\n  z-index: -1;\\n  top: -7%;\\n  display: inline;\\n  right: 5%;\\n}\\n#content .menu .article2__details .__imgcont img {\\n  width: 100%;\\n  height: 100%;\\n  object-fit: cover;\\n  border-radius: 1px 50px 0px 50px;\\n}\\n#content .menu .article2__details .__writeup {\\n  display: flex;\\n  flex-direction: column;\\n  gap: 10px;\\n  width: 70%;\\n  margin-top: 20%;\\n  justify-content: center;\\n}\\n#content .menu .article2__details .__writeup p {\\n  font-size: 0.8rem;\\n}\\n#content .menu .article2__details .__writeup .fillercont {\\n  display: flex;\\n  gap: 8px;\\n}\\n#content .menu .article2__details .__writeup .fillercont .fillerwords {\\n  background-color: hsl(100deg, 0%, 89%);\\n  border-radius: 10px;\\n  padding: 5px;\\n  width: 100px;\\n  height: 25px;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n#content .menu .review {\\n  margin-top: 250px;\\n  margin-bottom: 50px;\\n}\\n#content .menu .review .details {\\n  display: grid;\\n  grid-template-columns: 0.3fr 1fr;\\n  margin-top: 25px;\\n  position: relative;\\n  left: 25;\\n  transform: translate(15%, 25%);\\n}\\n#content .menu .review .details .__imgcont {\\n  height: 140%;\\n  width: 80%;\\n  position: relative;\\n  z-index: -1;\\n  border-radius: 1px 50px 0px 50px;\\n}\\n#content .menu .review .details .__imgcont img {\\n  width: 100%;\\n  height: 100%;\\n  object-fit: cover;\\n  border-radius: 1px 50px 0px 50px;\\n}\\n#content .menu .review .details__writeup {\\n  width: 60%;\\n  height: 140%;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  margin-left: -30px;\\n  padding: 0 10px;\\n  align-items: left;\\n  box-shadow: 0.5px 0.5px 3px 0.5px black;\\n}\\n#content .menu .review .details__writeup .fa-star {\\n  color: #FFC440;\\n  justify-items: start;\\n}\\n#content .menu .review .details__writeup p {\\n  font-size: 0.8rem;\\n}\\n\\n@media screen and (max-width: 780px) {\\n  #content html {\\n    font-size: 0.8rem;\\n  }\\n  #content body {\\n    overflow: auto;\\n  }\\n  #content .bg__image {\\n    display: none;\\n  }\\n  #content .plate {\\n    position: fixed;\\n    top: 50%;\\n    left: 36%;\\n    transform: translate(0, 50%);\\n  }\\n  #content .plate__image {\\n    position: fixed;\\n    bottom: -4%;\\n    right: 0%;\\n  }\\n  #content .wording {\\n    top: 20%;\\n    transform: translate(0, -25%);\\n    z-index: 3;\\n  }\\n  #content .socials {\\n    color: #FFC440;\\n  }\\n  #content .menu {\\n    height: 410vh;\\n  }\\n  #content .menu .review .details .__imgcont {\\n    min-height: 100px;\\n    min-width: 130px;\\n  }\\n  #content .menu .review .details__writeup {\\n    min-width: 150px;\\n    margin-left: -5px;\\n  }\\n  #content .menu .article2 {\\n    margin-bottom: 50px;\\n  }\\n  #content .menu .article2__details .__imgcont {\\n    min-height: 100px;\\n    min-width: 120px;\\n  }\\n  #content .menu .article2__details .__imgcont img {\\n    width: 90%;\\n    height: 70%;\\n  }\\n  #content .menu .article2__details .__imgcont .square {\\n    visibility: hidden;\\n  }\\n  #content .menu .article2__details .__writeup {\\n    min-width: 300px;\\n  }\\n  #content .menu .article__details .__imgcont {\\n    min-height: 100px;\\n    min-width: 120px;\\n  }\\n  #content .menu .article__details .__imgcont img {\\n    width: 90%;\\n    height: 70%;\\n  }\\n  #content .menu .article__details .__writeup {\\n    min-width: 300px;\\n  }\\n  #content .menu__newitems .swiper {\\n    width: 280px;\\n    max-height: 320px;\\n  }\\n  #content .menu__newitems .__newmain {\\n    max-width: 250px;\\n    max-height: 300x;\\n  }\\n  #content .menu__newitems .heading .scrollers .holder {\\n    visibility: visible;\\n  }\\n  #content .menu__newitems .heading .scrollers .holder .fa {\\n    visibility: visible;\\n  }\\n  #content .menu__bestseller .__bestmain {\\n    max-width: 250px;\\n    max-height: 300px;\\n  }\\n  #content .menu__bestseller .swiper {\\n    width: 280px;\\n    max-height: 320px;\\n  }\\n  #content .menu__bestseller .heading .scrollers .holder {\\n    visibility: visible;\\n  }\\n  #content .menu__bestseller .heading .scrollers .holder .fa {\\n    visibility: visible;\\n  }\\n  #content .menu .category .food_in_selection {\\n    max-width: 250px;\\n    max-height: 50px;\\n  }\\n  #content .menu .category .swiper {\\n    width: 280px;\\n    max-height: 60px;\\n  }\\n  #content .menu .category .delicacies .scrollers .holder {\\n    visibility: visible;\\n  }\\n  #content .menu .category .delicacies .scrollers .holder .fa {\\n    visibility: visible;\\n  }\\n}\\n@media screen and (max-width: 500px) {\\n  html {\\n    font-size: 0.7rem;\\n  }\\n  #content header .icon {\\n    visibility: hidden;\\n  }\\n  #content header .icon.cover {\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    justify-content: center !important;\\n    position: fixed;\\n    top: 0;\\n    right: 0;\\n    left: 0;\\n    gap: 25px;\\n    z-index: 5;\\n    font-size: 3rem;\\n    background-color: rgba(0, 0, 0, 0.8);\\n    height: 100vh;\\n    width: 100vw;\\n    visibility: visible;\\n    transition: top 6s ease;\\n  }\\n  #content header .icon.cover .button a {\\n    color: white !important;\\n  }\\n  #content .socials {\\n    display: none !important;\\n  }\\n  #content .hambuger {\\n    position: absolute;\\n    z-index: 9;\\n    height: 25px;\\n    width: 28px;\\n    top: 1.5rem;\\n    right: 1.5rem;\\n    cursor: pointer;\\n    transition: all 0.5 ease-in-out;\\n  }\\n  #content .hambuger__burger {\\n    width: 25px;\\n    height: 3px;\\n    border: 5px;\\n    background-color: black;\\n    position: absolute;\\n    top: 0.5rem;\\n    right: 0;\\n    z-index: 7;\\n    transition: all 0.5 ease-in-out;\\n  }\\n  #content .hambuger__burger::after {\\n    content: \\\"\\\";\\n    width: 25px;\\n    height: 3px;\\n    border: 5px;\\n    background-color: black;\\n    position: absolute;\\n    top: 8px;\\n    transition: all 0.5 ease-in-out;\\n  }\\n  #content .hambuger__burger::before {\\n    content: \\\"\\\";\\n    width: 25px;\\n    height: 3px;\\n    border: 5px;\\n    background-color: black;\\n    position: absolute;\\n    top: -8px;\\n    transition: all 0.5 ease-in-out;\\n  }\\n  #content .hambuger__burger.open {\\n    transform: rotate(360deg);\\n    background: transparent;\\n  }\\n  #content .hambuger__burger.open::before {\\n    transform: rotate(45deg) translate(5px, 8px);\\n    background-color: black;\\n  }\\n  #content .hambuger__burger.open::after {\\n    width: 28px;\\n    transform: rotate(-45deg) translate(3px, -7px);\\n    background-color: black;\\n  }\\n  #content .wording {\\n    width: 200px;\\n    padding: 3px;\\n  }\\n  #content .wording__booknow {\\n    width: 20%;\\n  }\\n  #content .menu {\\n    height: 330vh;\\n  }\\n  #content .menu .review {\\n    margin-bottom: 50px;\\n    margin-top: 60px;\\n  }\\n  #content .menu .review .details {\\n    display: grid;\\n    justify-content: center;\\n    align-items: center;\\n    position: relative;\\n    right: -3%;\\n    transform: translate(10%, 10%);\\n  }\\n  #content .menu .review .details .__imgcont {\\n    min-height: 80px;\\n    min-width: 150px;\\n  }\\n  #content .menu .review .details__writeup {\\n    min-height: 80px;\\n    min-width: 220px;\\n    margin-left: 2px;\\n  }\\n  #content .menu .article2__details {\\n    display: grid;\\n    grid-template-columns: 1fr 0.4fr;\\n  }\\n  #content .menu .article2__details .__imgcont {\\n    min-width: 80px;\\n    min-height: 20px;\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n  }\\n  #content .menu .article2__details .__imgcont #about_comp {\\n    display: none;\\n  }\\n  #content .menu .article2__details .__imgcont .square {\\n    width: 100px;\\n    height: 100px;\\n  }\\n  #content .menu .article2__details .__imgcont .circle {\\n    width: 15px;\\n    height: 15px;\\n    border: 1.5px solid #FFC440;\\n  }\\n  #content .menu .article2__details .__imgcont .circle:nth-child(2) {\\n    width: 15px;\\n    height: 15px;\\n    border: 1.5px solid #FFC440;\\n  }\\n  #content .menu .article2__details .__imgcont .circle:nth-child(3) {\\n    width: 15px;\\n    height: 15px;\\n    border: 1.5px solid #FFC440;\\n  }\\n  #content .menu .article2__details .__writeup {\\n    min-width: 130%;\\n  }\\n  #content .menu .article2__details .__writeup .wording__booknow {\\n    font-size: 1.5rem;\\n  }\\n  #content .menu .article {\\n    margin-bottom: 0px;\\n  }\\n  #content .menu .article__details {\\n    display: grid;\\n    grid-template-columns: 0.4fr 1fr;\\n  }\\n  #content .menu .article__details .__imgcont {\\n    min-width: 80px;\\n    min-height: 20px;\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n  }\\n  #content .menu .article__details .__imgcont #popular_delicacies {\\n    display: block;\\n    height: 75%;\\n    width: 140%;\\n  }\\n  #content .menu .article__details .__imgcont .square {\\n    width: 100px;\\n    height: 100px;\\n    visibility: visible;\\n  }\\n  #content .menu .article__details .__imgcont .circle2 {\\n    width: 15px;\\n    height: 15px;\\n    border: 1.5px solid #FFC440;\\n  }\\n  #content .menu .article__details .__writeup {\\n    min-width: 100%;\\n    font-size: 1.5rem;\\n  }\\n  #content .menu .article__details .__writeup h2 {\\n    font-size: 1.5rem;\\n  }\\n  #content .menu .article__details .__writeup .fillercont .fillerwords {\\n    font-size: 1.5rem;\\n  }\\n  #content .menu .article__details .__writeup .wording__booknow {\\n    font-size: 1.5rem;\\n  }\\n}\\n@media screen and (max-width: 780px) {\\n  #content html {\\n    font-size: 0.8rem;\\n  }\\n  #content body {\\n    overflow: auto;\\n  }\\n  #content .bg__image {\\n    display: none;\\n  }\\n  #content .plate {\\n    position: fixed;\\n    top: 50%;\\n    left: 36%;\\n    transform: translate(0, 50%);\\n  }\\n  #content .plate__image {\\n    position: fixed;\\n    bottom: -4%;\\n    right: 0%;\\n  }\\n  #content .wording {\\n    top: 20%;\\n    transform: translate(0, -25%);\\n    z-index: 3;\\n  }\\n  #content .socials {\\n    color: #FFC440;\\n  }\\n  #content .menu {\\n    height: 410vh;\\n  }\\n  #content .menu .review .details .__imgcont {\\n    min-height: 100px;\\n    min-width: 130px;\\n  }\\n  #content .menu .review .details__writeup {\\n    min-width: 150px;\\n    margin-left: -5px;\\n  }\\n  #content .menu .article2 {\\n    margin-bottom: 50px;\\n  }\\n  #content .menu .article2__details .__imgcont {\\n    min-height: 100px;\\n    min-width: 120px;\\n  }\\n  #content .menu .article2__details .__imgcont img {\\n    width: 90%;\\n    height: 70%;\\n  }\\n  #content .menu .article2__details .__imgcont .square {\\n    visibility: hidden;\\n  }\\n  #content .menu .article2__details .__writeup {\\n    min-width: 300px;\\n  }\\n  #content .menu .article__details .__imgcont {\\n    min-height: 100px;\\n    min-width: 120px;\\n  }\\n  #content .menu .article__details .__imgcont img {\\n    width: 90%;\\n    height: 70%;\\n  }\\n  #content .menu .article__details .__writeup {\\n    min-width: 300px;\\n  }\\n  #content .menu__newitems .swiper {\\n    width: 280px;\\n    max-height: 320px;\\n  }\\n  #content .menu__newitems .__newmain {\\n    max-width: 250px;\\n    max-height: 300x;\\n  }\\n  #content .menu__newitems .heading .scrollers .holder {\\n    visibility: visible;\\n  }\\n  #content .menu__newitems .heading .scrollers .holder .fa {\\n    visibility: visible;\\n  }\\n  #content .menu__bestseller .__bestmain {\\n    max-width: 250px;\\n    max-height: 300px;\\n  }\\n  #content .menu__bestseller .swiper {\\n    width: 280px;\\n    max-height: 320px;\\n  }\\n  #content .menu__bestseller .heading .scrollers .holder {\\n    visibility: visible;\\n  }\\n  #content .menu__bestseller .heading .scrollers .holder .fa {\\n    visibility: visible;\\n  }\\n  #content .menu .category .food_in_selection {\\n    max-width: 250px;\\n    max-height: 50px;\\n  }\\n  #content .menu .category .swiper {\\n    width: 280px;\\n    max-height: 60px;\\n  }\\n  #content .menu .category .delicacies .scrollers .holder {\\n    visibility: visible;\\n  }\\n  #content .menu .category .delicacies .scrollers .holder .fa {\\n    visibility: visible;\\n  }\\n}\\n@media screen and (max-width: 500px) {\\n  html {\\n    font-size: 0.7rem;\\n  }\\n  #content header .icon {\\n    visibility: hidden;\\n  }\\n  #content header .icon.cover {\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    justify-content: center !important;\\n    position: fixed;\\n    top: 0;\\n    right: 0;\\n    left: 0;\\n    gap: 25px;\\n    z-index: 5;\\n    font-size: 3rem;\\n    background-color: rgba(0, 0, 0, 0.8);\\n    height: 100vh;\\n    width: 100vw;\\n    visibility: visible;\\n    transition: top 6s ease;\\n  }\\n  #content header .icon.cover .button a {\\n    color: white !important;\\n  }\\n  #content .socials {\\n    display: none !important;\\n  }\\n  #content .hambuger {\\n    position: absolute;\\n    z-index: 9;\\n    height: 25px;\\n    width: 28px;\\n    top: 1.5rem;\\n    right: 1.5rem;\\n    cursor: pointer;\\n    transition: all 0.5 ease-in-out;\\n  }\\n  #content .hambuger__burger {\\n    width: 25px;\\n    height: 3px;\\n    border: 5px;\\n    background-color: black;\\n    position: absolute;\\n    top: 0.5rem;\\n    right: 0;\\n    z-index: 7;\\n    transition: all 0.5 ease-in-out;\\n  }\\n  #content .hambuger__burger::after {\\n    content: \\\"\\\";\\n    width: 25px;\\n    height: 3px;\\n    border: 5px;\\n    background-color: black;\\n    position: absolute;\\n    top: 8px;\\n    transition: all 0.5 ease-in-out;\\n  }\\n  #content .hambuger__burger::before {\\n    content: \\\"\\\";\\n    width: 25px;\\n    height: 3px;\\n    border: 5px;\\n    background-color: black;\\n    position: absolute;\\n    top: -8px;\\n    transition: all 0.5 ease-in-out;\\n  }\\n  #content .hambuger__burger.open {\\n    transform: rotate(360deg);\\n    background: transparent;\\n  }\\n  #content .hambuger__burger.open::before {\\n    transform: rotate(45deg) translate(5px, 8px);\\n    background-color: black;\\n  }\\n  #content .hambuger__burger.open::after {\\n    width: 28px;\\n    transform: rotate(-45deg) translate(3px, -7px);\\n    background-color: black;\\n  }\\n  #content .wording {\\n    width: 200px;\\n    padding: 3px;\\n  }\\n  #content .wording__booknow {\\n    width: 20%;\\n  }\\n  #content .menu {\\n    height: 330vh;\\n  }\\n  #content .menu .review {\\n    margin-bottom: 50px;\\n    margin-top: 60px;\\n  }\\n  #content .menu .review .details {\\n    display: grid;\\n    justify-content: center;\\n    align-items: center;\\n    position: relative;\\n    right: -3%;\\n    transform: translate(10%, 10%);\\n  }\\n  #content .menu .review .details .__imgcont {\\n    min-height: 80px;\\n    min-width: 150px;\\n  }\\n  #content .menu .review .details__writeup {\\n    min-height: 80px;\\n    min-width: 220px;\\n    margin-left: 2px;\\n  }\\n  #content .menu .article2__details {\\n    display: grid;\\n    grid-template-columns: 1fr 0.4fr;\\n  }\\n  #content .menu .article2__details .__imgcont {\\n    min-width: 80px;\\n    min-height: 20px;\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n  }\\n  #content .menu .article2__details .__imgcont #about_comp {\\n    display: none;\\n  }\\n  #content .menu .article2__details .__imgcont .square {\\n    width: 100px;\\n    height: 100px;\\n  }\\n  #content .menu .article2__details .__imgcont .circle {\\n    width: 15px;\\n    height: 15px;\\n    border: 1.5px solid #FFC440;\\n  }\\n  #content .menu .article2__details .__imgcont .circle:nth-child(2) {\\n    width: 15px;\\n    height: 15px;\\n    border: 1.5px solid #FFC440;\\n  }\\n  #content .menu .article2__details .__imgcont .circle:nth-child(3) {\\n    width: 15px;\\n    height: 15px;\\n    border: 1.5px solid #FFC440;\\n  }\\n  #content .menu .article2__details .__writeup {\\n    min-width: 130%;\\n  }\\n  #content .menu .article2__details .__writeup .wording__booknow {\\n    font-size: 1.5rem;\\n  }\\n  #content .menu .article {\\n    margin-bottom: 0px;\\n  }\\n  #content .menu .article__details {\\n    display: grid;\\n    grid-template-columns: 0.4fr 1fr;\\n  }\\n  #content .menu .article__details .__imgcont {\\n    min-width: 80px;\\n    min-height: 20px;\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n  }\\n  #content .menu .article__details .__imgcont #popular_delicacies {\\n    display: block;\\n    height: 75%;\\n    width: 140%;\\n  }\\n  #content .menu .article__details .__imgcont .square {\\n    width: 100px;\\n    height: 100px;\\n    visibility: visible;\\n  }\\n  #content .menu .article__details .__imgcont .circle2 {\\n    width: 15px;\\n    height: 15px;\\n    border: 1.5px solid #FFC440;\\n  }\\n  #content .menu .article__details .__writeup {\\n    min-width: 100%;\\n    font-size: 1.5rem;\\n  }\\n  #content .menu .article__details .__writeup h2 {\\n    font-size: 1.5rem;\\n  }\\n  #content .menu .article__details .__writeup .fillercont .fillerwords {\\n    font-size: 1.5rem;\\n  }\\n  #content .menu .article__details .__writeup .wording__booknow {\\n    font-size: 1.5rem;\\n  }\\n}\\n#content {\\n  height: 100vh;\\n}\\n#content .contact .consquare {\\n  display: flex;\\n  position: absolute;\\n  width: 50%;\\n  height: 50%;\\n  min-width: 300px;\\n  top: 50%;\\n  right: 50%;\\n  transform: translate(50%, -50%);\\n  justify-content: center;\\n  flex-direction: column;\\n  align-items: center;\\n  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3);\\n  backdrop-filter: blur(10px);\\n}\\n#content .contact .consquare h1 {\\n  color: #FFC440;\\n}\\n\\nbody {\\n  background: white;\\n  font-size: 16px;\\n}\\n\\n#content {\\n  height: 100vh;\\n  max-width: 1200px;\\n  margin: 0 auto;\\n}\\n#content #bgimage {\\n  object-fit: contain;\\n  position: absolute;\\n  right: 0;\\n  overflow: hidden;\\n  height: 100vh;\\n  z-index: -5;\\n  user-select: none;\\n  pointer-events: none;\\n  overflow: hidden;\\n}\\n#content header {\\n  display: flex;\\n  justify-content: space-between;\\n  position: fixed;\\n  z-index: 3;\\n  left: 0;\\n  max-width: 100%;\\n  width: 100%;\\n  margin: 0 auto;\\n  padding: 5px;\\n  height: 50px;\\n}\\n#content header .icon {\\n  display: flex;\\n  justify-content: space-between;\\n  position: absolute;\\n  right: 0%;\\n  padding-right: 10px;\\n  gap: 10px;\\n  cursor: pointer;\\n}\\n#content header .icon a {\\n  text-decoration: none;\\n  padding: 10px;\\n  color: black;\\n  overflow: hidden;\\n}\\n#content header .icon a:hover {\\n  background-color: hsl(240deg, 78%, 65%);\\n  color: white;\\n}\\n#content header .icon a span {\\n  position: absolute;\\n  background: white;\\n  transform: translate(-50%, -50%);\\n  pointer-events: none;\\n  border-radius: 50%;\\n  animation: animate 1s linear infinite;\\n}\\n@keyframes animate {\\n  0% {\\n    width: 0px;\\n    height: 0px;\\n  }\\n  100% {\\n    width: 200px;\\n    height: 200px;\\n  }\\n}\\n#content header .icon .button {\\n  padding: 10px;\\n  border-radius: 10px;\\n}\\n#content header .icon .button:hover {\\n  background-color: hsl(240deg, 78%, 65%);\\n  color: white;\\n}\\n#content header .icon .button:focus {\\n  background-color: hsl(240deg, 78%, 65%);\\n  color: white;\\n}\\n#content header .icon .active {\\n  background-color: hsl(240deg, 78%, 65%);\\n  color: white;\\n}\\n#content header .icon .active a {\\n  color: white;\\n}\\n#content .ziglines__1 {\\n  width: 10%;\\n  position: absolute;\\n  top: 20%;\\n  left: 10%;\\n  overflow: hidden;\\n}\\n#content .ziglines__2 {\\n  width: 25%;\\n  height: 25%;\\n  position: absolute;\\n  top: 63%;\\n  left: 17%;\\n  transform: rotate(150deg);\\n  overflow: hidden;\\n}\\n#content .ziglines__3 {\\n  width: 25%;\\n  height: 25%;\\n  position: absolute;\\n  top: 23%;\\n  left: 37%;\\n  transform: rotate(140deg);\\n}\\n#content .ziglines__4 {\\n  width: 25%;\\n  height: 25%;\\n  position: absolute;\\n  top: 58%;\\n  z-index: 2;\\n  left: 38%;\\n  transform: rotate(210deg);\\n  overflow: hidden;\\n}\\n#content .ziglines .circle {\\n  width: 10px;\\n  height: 10px;\\n  border-radius: 50%;\\n  border: 2px solid black;\\n  position: absolute;\\n  top: 20%;\\n  left: 40%;\\n}\\n#content .ziglines .circle2 {\\n  width: 30px;\\n  height: 30px;\\n  border-radius: 50%;\\n  border: 6px solid black;\\n  position: absolute;\\n  top: 75%;\\n  left: 10%;\\n}\\n#content .plate {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  position: absolute;\\n  right: 15%;\\n  top: 4%;\\n  overflow: hidden;\\n  z-index: -1;\\n  width: 550px;\\n  height: 550px;\\n  border-radius: 50%;\\n  border: 1px solid #FFC440;\\n  user-select: none;\\n  pointer-events: none;\\n}\\n#content .plate__image {\\n  position: relative;\\n  right: 15%;\\n  height: 80%;\\n  filter: drop-shadow(1px 1px 3px black);\\n}\\n#content .wording {\\n  width: 500px;\\n  height: 300px;\\n  display: grid;\\n  grid-template-rows: 0.1fr 0.1fr 0.1fr 0.8fr;\\n  position: absolute;\\n  padding: 5px;\\n  top: 25%;\\n  z-index: 2;\\n  font-family: \\\"Poppins\\\", sans-serif;\\n  left: 7%;\\n  transform: tranlate(0, -50%);\\n}\\n#content .wording__word {\\n  font-size: 4rem;\\n}\\n#content .wording__african {\\n  color: green;\\n  font-size: 4rem;\\n}\\n#content .wording__list {\\n  font-size: 16px;\\n}\\n#content .wording__booknow {\\n  border-radius: 15px;\\n  height: 45px;\\n  width: 60%;\\n  margin-top: 4px;\\n  text-transform: capitalize;\\n  color: white;\\n  background-color: #FFC440;\\n  font-size: 16px;\\n  border: none;\\n}\\n#content .bg {\\n  position: absolute;\\n  right: 0;\\n  top: 2%;\\n  z-index: -4;\\n}\\n#content .socials {\\n  width: 50px;\\n  height: 200px;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  position: absolute;\\n  padding: 2px;\\n  font-size: 30px;\\n  gap: 30px;\\n  right: 0;\\n  top: 35%;\\n  transform: tranlate(0, -50%);\\n  background-color: white;\\n  border-radius: 25px 0 0 25px;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant/./src/styles/main.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/assets/catalogimg/Barque_fish.png":
/*!***********************************************!*\
  !*** ./src/assets/catalogimg/Barque_fish.png ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"img/Barque_fish.png\");\n\n//# sourceURL=webpack://restaurant/./src/assets/catalogimg/Barque_fish.png?");

/***/ }),

/***/ "./src/assets/catalogimg/about_comp.png":
/*!**********************************************!*\
  !*** ./src/assets/catalogimg/about_comp.png ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"img/about_comp.png\");\n\n//# sourceURL=webpack://restaurant/./src/assets/catalogimg/about_comp.png?");

/***/ }),

/***/ "./src/assets/catalogimg/burger.png":
/*!******************************************!*\
  !*** ./src/assets/catalogimg/burger.png ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"img/burger.png\");\n\n//# sourceURL=webpack://restaurant/./src/assets/catalogimg/burger.png?");

/***/ }),

/***/ "./src/assets/catalogimg/chocolate_cupcake.png":
/*!*****************************************************!*\
  !*** ./src/assets/catalogimg/chocolate_cupcake.png ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"img/chocolate_cupcake.png\");\n\n//# sourceURL=webpack://restaurant/./src/assets/catalogimg/chocolate_cupcake.png?");

/***/ }),

/***/ "./src/assets/catalogimg/clean_fried_rice.png":
/*!****************************************************!*\
  !*** ./src/assets/catalogimg/clean_fried_rice.png ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"img/clean_fried_rice.png\");\n\n//# sourceURL=webpack://restaurant/./src/assets/catalogimg/clean_fried_rice.png?");

/***/ }),

/***/ "./src/assets/catalogimg/complete_chicken.png":
/*!****************************************************!*\
  !*** ./src/assets/catalogimg/complete_chicken.png ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"img/complete_chicken.png\");\n\n//# sourceURL=webpack://restaurant/./src/assets/catalogimg/complete_chicken.png?");

/***/ }),

/***/ "./src/assets/catalogimg/complete_rice.png":
/*!*************************************************!*\
  !*** ./src/assets/catalogimg/complete_rice.png ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"img/complete_rice.png\");\n\n//# sourceURL=webpack://restaurant/./src/assets/catalogimg/complete_rice.png?");

/***/ }),

/***/ "./src/assets/catalogimg/createdzig.png":
/*!**********************************************!*\
  !*** ./src/assets/catalogimg/createdzig.png ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"img/createdzig.png\");\n\n//# sourceURL=webpack://restaurant/./src/assets/catalogimg/createdzig.png?");

/***/ }),

/***/ "./src/assets/catalogimg/drink.png":
/*!*****************************************!*\
  !*** ./src/assets/catalogimg/drink.png ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"img/drink.png\");\n\n//# sourceURL=webpack://restaurant/./src/assets/catalogimg/drink.png?");

/***/ }),

/***/ "./src/assets/catalogimg/egusi.png":
/*!*****************************************!*\
  !*** ./src/assets/catalogimg/egusi.png ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"img/egusi.png\");\n\n//# sourceURL=webpack://restaurant/./src/assets/catalogimg/egusi.png?");

/***/ }),

/***/ "./src/assets/catalogimg/fried_rice_chicken.png":
/*!******************************************************!*\
  !*** ./src/assets/catalogimg/fried_rice_chicken.png ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"img/fried_rice_chicken.png\");\n\n//# sourceURL=webpack://restaurant/./src/assets/catalogimg/fried_rice_chicken.png?");

/***/ }),

/***/ "./src/assets/catalogimg/pie.png":
/*!***************************************!*\
  !*** ./src/assets/catalogimg/pie.png ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"img/pie.png\");\n\n//# sourceURL=webpack://restaurant/./src/assets/catalogimg/pie.png?");

/***/ }),

/***/ "./src/assets/catalogimg/review_cust.png":
/*!***********************************************!*\
  !*** ./src/assets/catalogimg/review_cust.png ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"img/review_cust.png\");\n\n//# sourceURL=webpack://restaurant/./src/assets/catalogimg/review_cust.png?");

/***/ }),

/***/ "./src/assets/catalogimg/uglyplantain.png":
/*!************************************************!*\
  !*** ./src/assets/catalogimg/uglyplantain.png ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"img/uglyplantain.png\");\n\n//# sourceURL=webpack://restaurant/./src/assets/catalogimg/uglyplantain.png?");

/***/ }),

/***/ "./src/assets/chicken.png":
/*!********************************!*\
  !*** ./src/assets/chicken.png ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"img/chicken.png\");\n\n//# sourceURL=webpack://restaurant/./src/assets/chicken.png?");

/***/ }),

/***/ "./src/assets/createdzig.png":
/*!***********************************!*\
  !*** ./src/assets/createdzig.png ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"img/createdzig.png\");\n\n//# sourceURL=webpack://restaurant/./src/assets/createdzig.png?");

/***/ }),

/***/ "./src/assets/index2.png":
/*!*******************************!*\
  !*** ./src/assets/index2.png ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"img/index2.png\");\n\n//# sourceURL=webpack://restaurant/./src/assets/index2.png?");

/***/ }),

/***/ "./src/assets/ziglines.jpg":
/*!*********************************!*\
  !*** ./src/assets/ziglines.jpg ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"img/ziglines.jpg\");\n\n//# sourceURL=webpack://restaurant/./src/assets/ziglines.jpg?");

/***/ }),

/***/ "./src/assets/ziglines2.png":
/*!**********************************!*\
  !*** ./src/assets/ziglines2.png ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"img/ziglines2.png\");\n\n//# sourceURL=webpack://restaurant/./src/assets/ziglines2.png?");

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant/./src/styles/main.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.scss */ \"./src/styles/main.scss\");\n/* harmony import */ var _modules_clear_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/clear.js */ \"./src/modules/clear.js\");\n/* harmony import */ var _modules_homepage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/homepage.js */ \"./src/modules/homepage.js\");\n/* harmony import */ var _modules_catalog_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/catalog.js */ \"./src/modules/catalog.js\");\n/* harmony import */ var _modules_contact_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/contact.js */ \"./src/modules/contact.js\");\n/* harmony import */ var _modules_hamburger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/hamburger.js */ \"./src/modules/hamburger.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_homepage_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\r\n\r\nconst general = () => {\r\n    const home = document.querySelector(\".Home\")\r\n    const catalog = document.querySelector(\".Catalog\")\r\n    const contact = document.querySelector(\".Contact\")\r\n    const hamburger = document.getElementById(\"hambuger\")\r\n    const icon = document.getElementById(\"icon\")\r\n    hamburger.addEventListener(\"click\", _modules_hamburger_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])\r\n    home.addEventListener(\"click\", () => {\r\n        ;(0,_modules_clear_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n        ;(0,_modules_homepage_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\r\n        console.log(\"first\")\r\n    })\r\n    catalog.addEventListener(\"click\", () => {\r\n        ;(0,_modules_clear_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n        ;(0,_modules_catalog_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\r\n        console.log(\"second\")\r\n    })\r\n    contact.addEventListener(\"click\", () =>{\r\n        ;(0,_modules_clear_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n        ;(0,_modules_contact_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()\r\n        console.log(\"Third\")\r\n    })\r\n    if(icon.style.visibility === \"visible\" && icon.classList.contain(!\"open\")){\r\n        icon.style.visibility = \"hidden\"\r\n    }\r\n}\r\ngeneral()\r\n\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/modules/catalog.js":
/*!********************************!*\
  !*** ./src/modules/catalog.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _head_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./head.js */ \"./src/modules/head.js\");\n/* harmony import */ var _assets_catalogimg_Barque_fish_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/catalogimg/Barque_fish.png */ \"./src/assets/catalogimg/Barque_fish.png\");\n/* harmony import */ var _assets_catalogimg_burger_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/catalogimg/burger.png */ \"./src/assets/catalogimg/burger.png\");\n/* harmony import */ var _assets_catalogimg_complete_chicken_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/catalogimg/complete_chicken.png */ \"./src/assets/catalogimg/complete_chicken.png\");\n/* harmony import */ var _assets_catalogimg_pie_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/catalogimg/pie.png */ \"./src/assets/catalogimg/pie.png\");\n/* harmony import */ var _assets_catalogimg_egusi_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/catalogimg/egusi.png */ \"./src/assets/catalogimg/egusi.png\");\n/* harmony import */ var _assets_catalogimg_uglyplantain_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/catalogimg/uglyplantain.png */ \"./src/assets/catalogimg/uglyplantain.png\");\n/* harmony import */ var _assets_catalogimg_fried_rice_chicken_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/catalogimg/fried_rice_chicken.png */ \"./src/assets/catalogimg/fried_rice_chicken.png\");\n/* harmony import */ var _assets_catalogimg_clean_fried_rice_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/catalogimg/clean_fried_rice.png */ \"./src/assets/catalogimg/clean_fried_rice.png\");\n/* harmony import */ var _assets_catalogimg_about_comp_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/catalogimg/about_comp.png */ \"./src/assets/catalogimg/about_comp.png\");\n/* harmony import */ var _assets_catalogimg_chocolate_cupcake_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../assets/catalogimg/chocolate_cupcake.png */ \"./src/assets/catalogimg/chocolate_cupcake.png\");\n/* harmony import */ var _assets_catalogimg_drink_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../assets/catalogimg/drink.png */ \"./src/assets/catalogimg/drink.png\");\n/* harmony import */ var _assets_catalogimg_review_cust_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../assets/catalogimg/review_cust.png */ \"./src/assets/catalogimg/review_cust.png\");\n/* harmony import */ var _assets_catalogimg_complete_rice_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../assets/catalogimg/complete_rice.png */ \"./src/assets/catalogimg/complete_rice.png\");\n/* harmony import */ var _assets_catalogimg_createdzig_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../assets/catalogimg/createdzig.png */ \"./src/assets/catalogimg/createdzig.png\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst catalogHTMLHeader = () => {\r\n    let heading = (0,_head_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n    let content = document.querySelector(\"#content\")\r\n    let home = heading.querySelector(\".Home\")\r\n    let catalog = heading.querySelector(\".Catalog\")\r\n    home.classList.remove(\"active\")\r\n    catalog.classList.add(\"active\")\r\n    content.append(heading)\r\n}\r\nconst catalogHTMLBody = () => {\r\n    let content = document.querySelector(\"#content\")\r\n    let main = document.createElement(\"main\")\r\n    let section = document.createElement(\"section\")\r\n    let menu__heading = document.createElement(\"div\")\r\n    let foodselection = document.createElement(\"div\")\r\n    let wrapper = document.createElement(\"div\")\r\n    let pasteries = document.createElement(\"img\")\r\n    // Classes for the created Element\r\n    main.classList.add(\"menu\")\r\n    section.classList.add(\"category\")\r\n    menu__heading.classList.add(\"menu__heading\")\r\n    foodselection.classList.add(\"foodselection\")\r\n    foodselection.classList.add(\"swiper\")\r\n    foodselection.classList.add(\"swiper1\")\r\n    wrapper.classList.add(\"swiper-wrapper\")\r\n    // \r\n    pasteries.id = \"pasteries\"\r\n    pasteries.src = _assets_catalogimg_chocolate_cupcake_png__WEBPACK_IMPORTED_MODULE_10__[\"default\"]\r\n    // innerHTML\r\n    menu__heading.innerHTML = ` \r\n                    <h2>Catalog Section</h2>\r\n                    <div class=\"delicacies\">\r\n                        <div class=\"heading\">\r\n                            <h3><span>Delicacies</span></h3>\r\n                            <div class=\"scrollers\">\r\n                                <!-- The arrow used for the carousel -->\r\n                                <div class=\"holder\" id=\"prev1\">\r\n                                    <i class='fa fa-less-than'></i>\r\n                                </div>\r\n                                <div class=\"holder\" id=\"next1\">\r\n                                    <i class='fa fa-greater-than'></i>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>`\r\n    wrapper.innerHTML = `<div class=\"food_in_selection swiper-slide\">\r\n                            <div class=\"cont\">\r\n                                ${pasteries}\r\n                            </div>\r\n                            <h3>Pasteries</h6>\r\n                        </div>`\r\n    // appended\r\n    section.append(menu__heading)\r\n    foodselection.append(wrapper)\r\n    section.append(foodselection)\r\n    main.append(section)\r\n    content.append(main)\r\n}\r\nconst catalogHTML = () => {\r\n    catalogHTMLHeader()\r\n    catalogHTMLBody()\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (catalogHTML);\n\n//# sourceURL=webpack://restaurant/./src/modules/catalog.js?");

/***/ }),

/***/ "./src/modules/clear.js":
/*!******************************!*\
  !*** ./src/modules/clear.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst clearHTML = () => {\r\n    const content = document.querySelector(\"#content\")\r\n    content.innerHTML = \"\"\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clearHTML);\n\n//# sourceURL=webpack://restaurant/./src/modules/clear.js?");

/***/ }),

/***/ "./src/modules/contact.js":
/*!********************************!*\
  !*** ./src/modules/contact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _clear__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clear */ \"./src/modules/clear.js\");\n/* harmony import */ var _head_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./head.js */ \"./src/modules/head.js\");\n\r\n\r\nconst contactHTMLHeader = () => {\r\n    let heading = (0,_head_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n    let content = document.querySelector(\"#content\")\r\n    let home = heading.querySelector(\".Home\")\r\n    let contact = heading.querySelector(\".Contact\")\r\n    home.classList.remove(\"active\")\r\n    contact.classList.add(\"active\")\r\n    content.append(heading)\r\n}\r\nconst contactHTMLBody = () => {\r\n    const section = document.createElement(\"section\")\r\n    section.classList.add(\"contact\")\r\n    section.innerHTML = `\r\n                        <div class=\"consquare\">\r\n                            <h1>Contact us</h1>\r\n                            <h4>Open hours: 8AM-9PM</h4>\r\n                            <h4>Call us: 09123917499</h4>\r\n                            <h4>8 street, xxxvid, san franciso, california</h4>\r\n                        </div>`\r\n    content.append(section)\r\n}\r\nconst contactHTML = () => {\r\n    contactHTMLHeader()\r\n    contactHTMLBody()\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactHTML);\n\n//# sourceURL=webpack://restaurant/./src/modules/contact.js?");

/***/ }),

/***/ "./src/modules/hamburger.js":
/*!**********************************!*\
  !*** ./src/modules/hamburger.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction open(){\r\n    // Hamburger menu\r\n    const burgeric = document.querySelector(\".hambuger__burger\")\r\n    const icon = document.getElementById(\"icon\")\r\n    var boo = false\r\n    if(window.innerWidth < 600){\r\n        boo = true\r\n        if(boo){\r\n            burgeric.classList.toggle(\"open\")\r\n            icon.classList.toggle(\"cover\")\r\n            boo = false\r\n        }\r\n    }\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (open);\n\n//# sourceURL=webpack://restaurant/./src/modules/hamburger.js?");

/***/ }),

/***/ "./src/modules/head.js":
/*!*****************************!*\
  !*** ./src/modules/head.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n// header component\r\nconst headcomponent = () => {\r\n    let header = document.createElement(\"header\")\r\n        // Heading innerHTML\r\n    header.innerHTML = `\r\n                    <div class=\"hambuger\" id=\"hambuger\">\r\n                        <div class=\"hambuger__burger\" id=\"burgerham\"></div>\r\n                    </div>\r\n                    <div class=\"icon\" id=\"icon\">\r\n                        <div class=\"Home button active\"><a href=\"#\">Home</a></div>\r\n                        <div class=\"button Catalog\"><a href=\"#\">Catalog</a></div>\r\n                        <div class=\"button Contact\"><a href=\"#\">Contact</a></div>\r\n                    </div>`\r\n    return header\r\n}\r\n// An event Listner for all\r\n// combined to one function to be used\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (headcomponent);\n\n//# sourceURL=webpack://restaurant/./src/modules/head.js?");

/***/ }),

/***/ "./src/modules/homepage.js":
/*!*********************************!*\
  !*** ./src/modules/homepage.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _assets_index2_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/index2.png */ \"./src/assets/index2.png\");\n/* harmony import */ var _assets_ziglines_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/ziglines.jpg */ \"./src/assets/ziglines.jpg\");\n/* harmony import */ var _assets_ziglines2_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/ziglines2.png */ \"./src/assets/ziglines2.png\");\n/* harmony import */ var _assets_createdzig_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/createdzig.png */ \"./src/assets/createdzig.png\");\n/* harmony import */ var _assets_chicken_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/chicken.png */ \"./src/assets/chicken.png\");\n/* harmony import */ var _head_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./head.js */ \"./src/modules/head.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst firstpage = () => {\r\n    // creating the element that would be added to the page\r\n    let heading = (0,_head_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])()\r\n    let content = document.querySelector(\"#content\")\r\n    let bgimg = document.createElement(\"img\")\r\n    let wording = document.createElement(\"div\")\r\n    let ziglines = document.createElement(\"div\")\r\n    let plate = document.createElement(\"div\")\r\n    let plateimg = document.createElement(\"img\")\r\n    let ziglines1 = document.createElement(\"img\")\r\n    let ziglines2 = document.createElement(\"img\")\r\n    let ziglines3 = document.createElement(\"img\")\r\n    let ziglines4 = document.createElement(\"img\")\r\n    let partzig = document.createElement(\"div\")\r\n    let div = document.createElement(\"div\")\r\n    let socials= document.createElement(\"div\")\r\n    const body = document.querySelector(\"body\")\r\n    // innerHTML for those I feel need to be inner html\r\n    // Wording HTML\r\n    wording.classList.add(\"wording\")\r\n    wording.innerHTML = `<h1 class=\"wording__word\">All Delicacies</h1>\r\n                        <h1 class=\"wording__african\">African</h1>\r\n                        <p class=\"wording__list\">Egba, fufu, egusi, Chicken</p>\r\n                        <button class=\"wording__booknow\">book now</button>`\r\n    // ziglines HTML\r\n    ziglines.classList.add(\"ziglines\")\r\n    // ziglines classNames\r\n    ziglines1.classList.add(\"ziglines__1\")\r\n    ziglines2.classList.add(\"ziglines__2\")\r\n    ziglines3.classList.add(\"ziglines__3\")\r\n    ziglines4.classList.add(\"ziglines__4\")\r\n    // ziglines Id\r\n    ziglines1.id = \"ziglines__1\"\r\n    ziglines2.id = \"ziglines__2\"\r\n    ziglines3.id = \"ziglines__3\"\r\n    ziglines4.id = \"ziglines__4\"\r\n    // ziglines img source\r\n    ziglines1.src = _assets_ziglines_jpg__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\r\n    ziglines2.src = _assets_createdzig_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\r\n    ziglines3.src = _assets_ziglines2_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\r\n    ziglines4.src = _assets_ziglines2_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\r\n    partzig.innerHTML = `\r\n                            <div class=\"circle\"></div>\r\n                            <div class=\"circle2\"></div>\r\n                            <div class=\"circle3\"></div>`\r\n    ziglines.append(ziglines1, ziglines2, ziglines3, ziglines4, partzig)\r\n    bgimg.classList.add(\"bg__image\")\r\n    bgimg.id = \"bgimage\"\r\n    bgimg.src = _assets_index2_png__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\r\n    plate.classList.add(\"plate\")\r\n    plateimg.classList.add(\"plate__image\")\r\n    plateimg.id = \"plate\"\r\n    plateimg.src = _assets_chicken_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\r\n    // Social div\r\n    socials.classList.add(\"socials\")\r\n    socials.innerHTML = `\r\n                        <i class=\"fa fa-twitter\"></i>\r\n                        <i class=\"fa fa-instagram\"></i>\r\n                        <i class=\"fa fa-facebook\"></i>`\r\n    plate.append(plateimg)\r\n    div.append(bgimg) \r\n    content.append(heading, div, wording, ziglines, plate, socials)\r\n    // Checker for the width of the screen\r\n    content.style.height = \"100vh\"\r\n    function checker(){\r\n        if(content.style.height === \"100vh\"){\r\n            content.style.height = \"100vh\"\r\n            body.style.overflow = \"hidden\"\r\n        }else{\r\n            body.style.overflow = \"auto\"\r\n        }\r\n    }\r\n    checker()\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (firstpage);\n\n//# sourceURL=webpack://restaurant/./src/modules/homepage.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;