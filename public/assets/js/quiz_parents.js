const quiz=[
    {
        question:"Q1:Do you help your child in his/her homeworks?",
        a:"yes,daily",
        b:"yes,whenever i get free time",
        c:"whenever he/she has some extra guidance i will help.",
        d:"no,because i am not educated",
        ans:"ans4"
    },
    {
        question:"Q2:How much time will your child spend on his/her homeworks?",
        a:"1-2hrs",
        b:"3hrs",
        c:"4hrs",
        d:"above 4hrs",
        ans:"ans1"
    },
    {
        question:"Q3:Is your child getting irritated very often with regard to their studies?",
        a:"yes,daily",
        b:"yes,whenever he/she has exams",
        c:"no,he/she is very calm",
        d:"i don't observe",
        ans:"ans4"
    },
    {
        question:"Q4:Do you encourage you child to perform in extra curriculars?",
        a:"yes,always",
        b:"yes,if he/she is interested",
        c:"np,beacuse i feel it waste of time and energy",
        d:"no,i don't know what they are",
        ans:"ans1"
    }
];

const question=document.querySelector('.question');
const submit=document.querySelector('#submit');
const answers = document.querySelectorAll('.answer');
const showscore = document.querySelector('#showscore');

let questionCount=0;
let score=0;

const loadQuestion = () => {

    const questionList=quiz[questionCount];  //quiz[0]

    question.innerText=questionList.question;

    document.getElementById("option1").innerHTML =questionList.a;
    document.getElementById("option2").innerHTML =questionList.b;
    document.getElementById("option3").innerHTML =questionList.c;
    document.getElementById("option4").innerHTML =questionList.d;
};
loadQuestion();

const getcheckAnswer=()=>{
    let answer;
    answers.forEach((curAnsElem)=>{
        if(curAnsElem.checked){
            answer=curAnsElem.id;
        }
    });
    return answer;
};

const deselectAll = () =>{
    answers.forEach((curAnsElem)=> curAnsElem.checked=false);
}

submit.addEventListener('click',()=>{
    const checkedanswer= getcheckAnswer();
    
    //check whether answer is crct or not
    if(checkedanswer === quiz[questionCount].ans){
        score++;
    };

    //call next question
    questionCount++;
    deselectAll();
    if(questionCount < quiz.length){
        loadQuestion();
    }
    else{
        showscore.innerHTML=`
            <h3> You scored ${score}/${quiz.length}</h3><br>
            <h1>Thank you for your response!!</h1>
        `;
        showscore.classList.remove('scorearea');
    }

});


