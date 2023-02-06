import React from 'react';

function Login_management(){
    return(
       <>
       <div className="main-manage_login login_form">
        <div className="inner-manage_login">
            <form action="Test_management" method="get">  
                <div className="container-fluid">  
                    <div className="details">

                        <h1>Management Login Form </h1> <br/><br/><br/>

                        <label for="schl">Choose your instition:</label><br/><br/>
                        <select name="schl" id="schl" required>
                            <option value="">None</option>
                            <option value="hyd">Navodaya Vidylaya</option>
                            <option value="scbd">Gurukula Patashala</option>
                            <option value="nlg">Narayana High School</option>
                            <option value="srpt">Sri Chaitanya High School</option>
                            <option value="rgrd">Sri Gayathri High School</option>
                        </select>
                        <br/><br/>

                        <label for="district">Choose your district:</label><br/><br/> 
                        <select name="district" id="district" required>
                            <option value="">None</option>
                            <option value="hyd">Hyderabad</option>
                            <option value="scbd">Secunderabad</option>
                            <option value="nlg">Nalgonda</option>
                            <option value="srpt">Suryapet</option>
                            <option value="rgrd">RangaReddy</option>
                        </select><br/><br/>

                        <label>College id : </label> 
                        <input type="text" placeholder="Enter your id" name="id" required/> <br/><br/>

                        <label>Password : </label>   
                        <input type="password" placeholder="Enter Password" name="password" required/><br/><br/> 

                        <label>Designation: </label> 
                        <input type="text" placeholder="Enter your designation" name="role_in_inst" required/> <br/><br/>
                    </div>
                    
                    
                        
                        <button type="submit">Log in</button>    
                        <button type="button" className="cancelbtn"> Cancel</button> 
                        <p>Forgot<a href="#"> Password?</a></p>
                </div>
            </form>
        </div>
    </div>


       </>
    )
}

export default Login_management;