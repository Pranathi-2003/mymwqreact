import React from 'react';


function Login() {
    return (
        <>
            <section className="login">
                <h2>SELECT YOUR ROLE</h2><br/><br/>

                    <div className="row">
                        <div className="col">
                            <div className="users">
                                <h3>STUDENT</h3>
                                <a href="Login_student"><img src="/assets/images/zstudent.jpg" alt="student" className="  responsive" /></a>
                            </div>
                        </div>
                        <div className="col">
                            <div className="users">
                                <h3>PARENT</h3>
                                <a href="Login_parent"><img src="/assets/images/zparent.png" alt="student" className="  responsive" /></a>
                            </div>
                        </div>

                        <div className="col">
                            <div className="users">
                                <h3>TEACHER</h3>
                                <a href="Login_teacher"><img src="/assets/images/zteacher.png" alt="student"
                                    className="  responsive" /></a>
                            </div>
                        </div>

                        <div className="col">
                            <div className="users">
                                <h3>SCHOOL</h3>
                                <a href="Login_management"><img src="/assets/images/zmanager.png" alt="student"
                                    className="  responsive" /></a>
                            </div>
                        </div>

                        <div className="col">
                            <div className="users">
                                <h3>OFFICIAL</h3>
                                <a href="Login_official"><img src="/assets/images/zofficial.jpg" alt="student"
                                    className="  responsive" /></a>
                            </div>
                        </div>

                    </div>
                </section>
        </>
    )
}

export default Login;