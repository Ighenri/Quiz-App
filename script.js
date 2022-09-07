//getting all the required elements
const start_btn = document.querySelector(".start-btn button");
const info_box = document.querySelector(".info-box");
const exit_btn = info_box.querySelector(".buttons .exit");
const continue_btn = info_box.querySelector(".buttons .continue");
const quiz_box = document.querySelector(".quiz-box");

//if start quiz button clicked
start_btn.onclick = ()=>{
    info_box.classList.add("activeInfo");   //show the info box
}

//if Exit button clicked
exit_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //hide the info box
    
}

//if Continue button clicked
continue_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //hide the info box
    quiz_box.classList.add("activeQuiz"); // show the quiz box
}