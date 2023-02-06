import React from 'react';

function Login_student(){
    return(
        <>
         <div className="main-student-login login_form">
        <div className="inner-student-login">
            <form action="Test_students" method="get">  
                <div className="container-fluid">  
                    <div className="details">

                        <h1> Student Registration Form </h1> <br/><br/>

                        <label>Student name : </label> <br/>
                        <input type="text" placeholder="Enter your name" name="username" required/> <br/><br/>

                        <label>Student id : </label> <br/>
                        <input type="text" placeholder="Enter your id" name="id" required/> <br/><br/>

                        <label>Password : </label>   <br/>
                        <input type="password" placeholder="Enter Password" name="password" required/><br/><br/> 
                        

                        <label for="district">Choose your district:</label>
                    <select name="district" id="district" required>
                            <option value="">None</option>
                            <option value="hyd">Hyderabad</option>
                            <option value="scbd">Secunderabad</option>
                            <option value="nlg">Nalgonda</option>
                            <option value="srpt">Suryapet</option>
                            <option value="rgrd">RangaReddy</option>
                    </select><br/><br/>

                        <label for="schl">Choose your school:</label>
                        <select name="schl" id="schl" required>
                            <option value="">None</option>
                            <option value="hyd">Navodaya Vidylaya</option>
                            <option value="scbd">Gurukula Patashala</option>
                            <option value="nlg">Narayana High School</option>
                            <option value="srpt">Sri Chaitanya High School</option>
                            <option value="rgrd">Sri Gayathri High School</option>
                        </select>
                        <br/><br/>
                    </div>
                    
                    
                        
                        <button type="submit">Register</button>    
                        <button type="button" className="cancelbtn"> Cancel</button> 
                        <p>Forgot<a href="#"> Password?</a></p>
                </div>
            </form>
        </div>
    </div>
        </>
    )
}

export default Login_student;