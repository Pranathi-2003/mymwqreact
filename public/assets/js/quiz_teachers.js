const quiz=[
    {
        question:"Q1:I am very friendly with my students.",
        a:"yes,always with everyone",
        b:"only with some students",
        c:"depends on the students behaviour.",
        d:"no,because i don't want to give leinance",
        ans:"ans1"
    },
    {
        question:"Q2:I always encourage my students to participate in the extra curricular activities.",
        a:"yes,if they are interested",
        b:"yes,if willpush them into extra curriculars",
        c:"depending on the student's academic performance",
        d:"no",
        ans:"ans1"
    },
    {
        question:"Q3:I will meet my students' parents personally after every exam.",
        a:"yes,everytime",
        b:"only when the management arranges",
        c:"if i feel interacting with parents,i will",
        d:"no,because parents are not interested",
        ans:"ans1"
    },
    {
        question:"Q4:What is your attendance percentage?",
        a:"20-40%",
        b:"40-60%",
        c:"60-80%",
        d:"above 80%",
        ans:"ans4"
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


