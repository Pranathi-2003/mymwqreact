import React from 'react';

function Login_official(){
    return(
       <>
       <div className="main-official_login login_form">
        <div className="inner-official_login">
            <form action="Test_official" method="get">  
                <div className="container-fluid">  
                    <div className="details">

                        <h1 >Official Login Form </h1> <br/><br/><br/>

                        <label>Id: </label> 
                        <input type="text" placeholder="Enter your id" name="role_in_state" required/> <br/><br/>

                        <label>Password : </label>   
                        <input type="password" placeholder="Enter Password" name="password" required/><br/><br/> 

                        <label>Confirm Password : </label>   
                        <input type="password" placeholder="Re-enter Password" name="re-password" required/><br/><br/> 

                        
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

export default Login_official;