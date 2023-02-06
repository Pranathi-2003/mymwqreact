import React from 'react';

function About(){
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

        <div className="main">
        
        <br/><br/><br/><br/>
        <h1><b>The Importance of Mental Wellness</b></h1>
        <p>Mentally well people are positive, self-assured and happy. They are in control of their thoughts, emotions and behaviour. This enables them to handle challenges, build strong relationships and enjoy life.</p>

            
            Achieving good mental health will enable you to:
            <ul>
                <li>Realise your own abilities,</li>
                <li>Cope with the stress and challenges of life,</li>
                <li>Engage in productive work,</li>
                <li>Contribute to your community.</li>
                <li>Sustaining mental health requires time and effort.</li>
                <li>The more you invest in your mental health, the stronger it will become.</li>
            </ul>
             
             
             <h1><b>Working Towards Mental Wellness</b></h1>
             <p>There are many ways you can enhance your mood, build resilience, and get more enjoyment out of life.</p>
             <ul>
                <li>Learn to be at peace</li>
                <ul>
                    <li>Get to know who you are and what makes you happy</li>
                    <li>Acknowledge what you can and cannot change about yourself</li>
                    <li>Identify your abilities and weaknesses, accept them, build on them, and do the best with what you have</li>
                </ul>
                <li>Maintain a healthy lifestyle</li>
                <ul>
                    <li>Take balanced meals</li>
                    <li>Exercising regularly</li>
                    <li>Sleeping early</li>
                </ul>
                <li>Build strong relations</li>

             </ul>

    </div>

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
        
    
        
    )
}

export default About;