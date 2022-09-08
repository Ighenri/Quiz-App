//getting all the required elements
const start_btn = document.querySelector(".start-btn button");
const info_box = document.querySelector(".info-box");
const exit_btn = info_box.querySelector(".buttons .exit");
const continue_btn = info_box.querySelector(".buttons .continue");
const quiz_box = document.querySelector(".quiz-box");
const timeCount = quiz_box.querySelector(".timer .time-sec");

const option_list = document.querySelector(".option-list");

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
    showQuestions(0);
    queCounter(1);
    startTimer(15);
}
let que_count = 0;
let que_numb = 1;
let counter;
let timevalue =15;

const next_btn = quiz_box.querySelector(".next-btn");

//if Next_btn clicked
 next_btn.onclick = ()=>{
    if(que_count < questions.length -1){
        que_count++;
        que_numb++;
        showQuestions(que_count);
        queCounter(que_numb);
        clearInterval(counter);
        startTimer(timevalue);
        
    }
    else{
        console.log("Questions completed");
    }
 }

//getting questions and option from array
function showQuestions(index){
    const que_text = document.querySelector(".que-text");
    let que_tag = '<span>'+ questions[index].numb + ". " + questions[index].question + '</span>';
    let option_tag = '<div class="option">'+ questions[index].options[0] +'<span></span></div>'
                     +'<div class="option">'+ questions[index].options[1] +'<span></span></div>'
                     + '<div class="option">'+ questions[index].options[2] +'<span></span></div>'
                     + '<div class="option">'+ questions[index].options[3] +'<span></span></div>';
    que_text.innerHTML = que_tag;
    option_list.innerHTML = option_tag;
    const option = option_list.querySelectorAll(".option");
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}

let tickIcon = '<div class="icon tick"><i class="fa-solid fa-check"></i></div>';
let crossIcon = '<div class="icon xmark"><i class="fa-solid fa-xmark"></i></div>';

function optionSelected(answer){
    clearInterval(counter);
    let userAns = answer.textContent;
    let correctAns = questions[que_count].answer;
    let alloptions = option_list.children.length;
    if (userAns == correctAns){
        answer.classList.add("correct");
        console.log("Answer is correct");
        answer.insertAdjacentHTML("beforeend", tickIcon);
    }
    else{
        answer.classList.add("incorrect");
        console.log("Answer is wrong");
        answer.insertAdjacentHTML("beforeend", crossIcon);

        //if answers is incorrect then automatically select the correct answer

        for (let i = 0; i < alloptions; i++) {
            if(option_list.children[i].textContent == correctAns){
                option_list.children[i].setAttribute("class", "option correct");
                option_list.children[i].insertAdjacentHTML("beforeend", tickIcon);
            }
        }
    }

    //once user selected disabled all options
    for (let i = 0; i < alloptions; i++) {
       option_list.children[1].classList.add("disabled");
    }
}


function startTimer(time){
    counter = setInterval(timer, 1000);
    function timer(){
        timeCount.textContent = time;
        time--;
    }
}

function queCounter(index){
    const bottom_ques_counter = quiz_box.querySelector(".total-que");
    let totalQuesCounTag =  '<span><p>'+ index +'</p>of<p>'+ questions.length +'</p>Questions</span>';
    bottom_ques_counter.innerHTML = totalQuesCounTag;
}
