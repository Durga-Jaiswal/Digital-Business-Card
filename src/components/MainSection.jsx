import React from 'react';
export default function MainSection(){
    return(
        <section className="main-section">
            <h1>Durga Jaiswal</h1>
            <p className="job-role">Frontend Developer</p>
            <a href="https://www.frontendmentor.io/profile/Durga-Jaiswal" className="link-to-website">Portfolio-Projects</a>
            <div className="button-section">
              <div className="linkedin-link">
               <i className="fa-brands fa-linkedin"></i>
                <a href="https://www.linkedin.com/in/durga-jaiswal-54398724a/">Linked In</a>
              </div>
              <div className="email-link">
                
                <i className="fa-regular fa-envelope"></i>
                <a href="mailto: 'jaiswaldurga555@gmail.com'">
                Email
                </a>
              </div>
            </div>
        </section>
    )
}