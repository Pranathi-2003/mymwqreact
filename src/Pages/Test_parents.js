import React from 'react';

function Test_parents(){
    return(
       <>
       <div className="main-div">
            <div className="inner-div">
                <h2 className="question">Question comes here</h2>
                <ul>
                    <li>
                        <input type="radio" name="answer" id="ans1" className="answer"/>
                        <label for="ans1" id="option1">Answer option</label>
                    </li>
                    <li>
                        <input type="radio" name="answer" id="ans2" className="answer"/>
                        <label for="ans2" id="option2">Answer option</label>
                    </li>
                    <li>
                        <input type="radio" name="answer" id="ans3" className="answer"/>
                        <label for="ans3" id="option3">Answer option</label>
                    </li>
                    <li>
                        <input type="radio" name="answer" id="ans4" className="answer"/>
                        <label for="ans4" id="option4">Answer option</label>
                    </li>
                </ul>
                <button id="submit">submit</button>
                <div id="showscore" className="scorearea"></div>
            </div>
        </div>

       </>
    )
}

export default Test_parents;