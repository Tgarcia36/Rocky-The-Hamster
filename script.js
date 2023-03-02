/* Declare variables below to save the different sections (divs) of your story*/
let button = document.querySelector(".buttons");
let buttonOne = document.querySelector(".option-one");
let buttonTwo = document.querySelector(".option-two");
let buttonThree = document.querySelector(".option-three");
let buttonFour = document.querySelector(".option-four");
let optionOne = document.querySelector(".option-one-screen");
let optionTwo = document.querySelector(".option-two-screen");
let optionGood = document.querySelector(".option-one-end");
let optionBad = document.querySelector(".option-two-end");
let hide=document.querySelector(".story-opening");
let title=document.querySelector(".title");
let begg=document.querySelector(".buttons");








buttonOne.onclick = function() {
    optionOne.style.display = "block";
    hide.style.display= "none";
      title.style.display= "none";
     begg.style.display= "none";


};


buttonTwo.onclick = function() {
    optionTwo.style.display = "block";
     hide.style.display= "none";
      title.style.display= "none";
     begg.style.display= "none";
    

};

buttonFour.onclick = function() {
    optionGood.style.display = "block";
    optionOne.style.display="none";

};




buttonThree.onclick = function() {
    optionBad.style.display = "block";
     optionOne.style.display="none";
};