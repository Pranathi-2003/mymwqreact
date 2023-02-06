import React from 'react';

function Index(){
    return(
        <>
        <nav className="navbar navbar-expand-sm bg-secondary navbar-light fixed-top" role="navigation">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar" >
                <span className="navbar-toggler-icon"></span>
            </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                <ul className="navbar-nav">
                    <li className="nav-item"><a className="nav-link" href="/"><b>HOME</b></a></li>
                        <li className="nav-item"><a className="nav-link" href="About"><b>ABOUT</b></a></li>
                        <li className="nav-item"><a className="nav-link" href="#contact"><b>CONTACT US</b></a></li>
                        <li className="nav-item"><a className="nav-link" href="Login"><b>CHECK UR MWQ</b></a></li>
                </ul>
            </div>
        </nav>


    <section className="landing_about_section">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-xl-5 col-lg-6 col-sm-8">
                    <div className="about-content">
                        <h2>MENTAL WELLNESS QUOTIENT</h2>
                        <div className="about-details">
                            <p className="fw-bold">What is Mental Wellness</p>
                            <p>Mental wellness is a positive state of mental health. It is more than the absence of mental illness. Discover what being mentally well means, and how it can help you lead a fulfilling life.</p>
                            <p>Being mentally well means that your mind is in order and functioning in your best interest. You are able to think, feel and act in ways that create a positive impact on your physical and social well-being.</p>

                            <a href="About">READ MORE</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    
        <section id="contact" className="footer">
            <h4>Contact US</h4>
            <p>For any help regarding your mental health,approach the following contacts</p>
            <div className="icons">
                <i className="fa fa-facebook"></i>
                <i className="fa fa-twitter"></i>
                <i className="fa fa-instagram"></i>
                <i className="fa fa-linkedin"></i>
            </div>
            <p>Made with <i className="fa fa-heart-o"></i> by Team MWQ</p>
        </section>
    
        </>
    );
}

export default Index;
