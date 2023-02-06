import React from 'react';

function Login_parent(){
    return(
       <>

<div className="main-parent_login login_form">
        <div className="inner-parent_login">
            <form action="Test_parents" method="get">  
                <div className="container-fluid">  
                    <div className="details">
                        <h1> Parent Registration Form </h1> <br/><br/>
                        <label>Child name : </label> 
                        <input type="text" placeholder="Enter child name" name="username" required/><br/><br/>
                        <label>Child id: </label> 
                        <input type="text" placeholder="Enter chid id" name="username" required/><br/><br/>
                        <label>Parent name : </label> 
                        <input type="text" placeholder="Enter your name" name="username" required/> <br/><br/>
                    </div>
                    
                    <label>Relation to child:</label><br/><br/>
                    <input type="radio" id="dad" name="parent" value="Father"/>
                    <label for="dad">Father</label>
                    <input type="radio" id="mom" name="parent" value="Mother"/>
                    <label for="mom">Mother</label>
                    <input type="radio" id="guardian" name="parent" value="Guardian"/>
                    <label for="guardian">Guardian</label><br/><br/>

                    <div className="details">
                        <label>Password : </label>   
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

export default Login_parent;