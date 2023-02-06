const Quiz_students=()=>{

    const quiz=[
        {
            question:"Q1:What is the condition of toilets in your school?",
            a:"maintatined hygienically",
            b:"not maintatined hygienically",
            c:"they are good but not excellent",
            d:"no toilets at all",
            ans:"ans4"
        },
        {
            question:"Q2:How well your teachers will help you in doubts clarification?",
            a:"very good",
            b:"acceptable",
            c:"scared to ask doubts",
            d:"no teachers at all",
            ans:"ans1"
        },
        {
            question:"Q3:Are you afraid of your techers?",
            a:"no,they are friendly",
            b:"sometimes",
            c:"yes,they are vey serious",
            d:"we don't interact with our teachers regularly",
            ans:"ans4"
        },
        {
            question:"Q4:Do you have sports period?",
            a:"yes,30 min daily",
            b:"once in a week",
            c:"we have a period,but never went to ground",
            d:"no",
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
    
}
export default {
    Quiz_students
};


// const quiz=[
//     {
//         question:"Q1:What is the condition of toilets in your school?",
//         a:"maintatined hygienically",
//         b:"not maintatined hygienically",
//         c:"they are good but not excellent",
//         d:"no toilets at all",
//         ans:"ans4"
//     },
//     {
//         question:"Q2:How well your teachers will help you in doubts clarification?",
//         a:"very good",
//         b:"acceptable",
//         c:"scared to ask doubts",
//         d:"no teachers at all",
//         ans:"ans1"
//     },
//     {
//         question:"Q3:Are you afraid of your techers?",
//         a:"no,they are friendly",
//         b:"sometimes",
//         c:"yes,they are vey serious",
//         d:"we don't interact with our teachers regularly",
//         ans:"ans4"
//     },
//     {
//         question:"Q4:Do you have sports period?",
//         a:"yes,30 min daily",
//         b:"once in a week",
//         c:"we have a period,but never went to ground",
//         d:"no",
//         ans:"ans1"
//     }
// ];

// const question=document.querySelector('.question');
// const submit=document.querySelector('#submit');
// const answers = document.querySelectorAll('.answer');
// const showscore = document.querySelector('#showscore');

// let questionCount=0;
// let score=0;

// const loadQuestion = () => {

//     const questionList=quiz[questionCount];  //quiz[0]

//     question.innerText=questionList.question;

//     document.getElementById("option1").innerHTML =questionList.a;
//     document.getElementById("option2").innerHTML =questionList.b;
//     document.getElementById("option3").innerHTML =questionList.c;
//     document.getElementById("option4").innerHTML =questionList.d;
// };

// loadQuestion();

// const getcheckAnswer=()=>{
//     let answer;
//     answers.forEach((curAnsElem)=>{
//         if(curAnsElem.checked){
//             answer=curAnsElem.id;
//         }
//     });
//     return answer;
// };

// const deselectAll = () =>{
//     answers.forEach((curAnsElem)=> curAnsElem.checked=false);
// }

// submit.addEventListener('click',()=>{
//     const checkedanswer= getcheckAnswer();
    
//     //check whether answer is crct or not
//     if(checkedanswer === quiz[questionCount].ans){
//         score++;
//     };

//     //call next question
//     questionCount++;
//     deselectAll();
//     if(questionCount < quiz.length){
//         loadQuestion();
//     }
//     else{
//         showscore.innerHTML=`
//             <h3> You scored ${score}/${quiz.length}</h3><br>
//             <h1>Thank you for your response!!</h1>
//         `;
//         showscore.classList.remove('scorearea');
//     }

// });


