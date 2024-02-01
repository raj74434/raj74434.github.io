import React, { useState } from "react";
// import {Link} from "react-router-dom"
// For scrolling on same page 
import { Link, animateScroll as scroll } from 'react-scroll';
import styles from '../compStyles/navbar.module.css';
import NavBarDrawerModel from "./NavBarDrawerModel";






function NavBar(){
    const [mobileMenu,setMobileMenu]= useState(false);


    return(
    <div  >
       

    <div className={styles.navBar} >
        <div className={styles.innerNavBar} >
       
        <div className={styles.navLeft}>
        <Link to="container" className={styles.linkTag} spy={true} smooth={true} offset={-70} duration={500} > <h3>Raj Gupta</h3></Link> 
        </div>
        <div className={styles.navRight}>
           
            <div> <Link to="container" className={styles.linkTag} spy={true} smooth={true} offset={-70} duration={500}  > <h3>Home</h3></Link> </div>
            <div> <Link to="about" className={styles.linkTag} spy={true} smooth={true} offset={-70} duration={500} > <h3>About Me</h3></Link></div>
            <div> <Link to="skills"  className={styles.linkTag} spy={true} smooth={true} offset={-70} duration={500}>  <h3>Skills</h3></Link>  </div>
            <div> <Link to="projects" className={styles.linkTag} spy={true} smooth={true} offset={-70} duration={500}>  <h3>Projects</h3> </Link> </div>
            <div> <Link to="contact" className={styles.linkTag} spy={true} smooth={true} offset={-70} duration={500}>  <h3>Contact</h3> </Link> </div>
            <div> <a href="https://drive.google.com/file/d/1t1Mu2gSaumKBlH_aOplZBDtwG9F2k8Vs/view?usp=sharing" className={styles.linkTag} target="blank" >  <h3>Resume</h3> </a> </div>
            
           
        </div>
        {/* Nav right ended */}
        </div>

        {/* ===================================================== */}

        <div className={styles.hamberger}>      
                
                {mobileMenu==false?
                // 
                <svg onClick={()=>setMobileMenu(!mobileMenu)}  width="30" height="30" viewBox="0 0 30 30" aria-hidden="true">
                    <path stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M4 7h22M4 15h22M4 23h22"></path>
                </svg>
                
                :
                <svg onClick={()=>setMobileMenu(!mobileMenu)}  xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                </svg>
                
              
                }


        </div>


    {/* ========================================================= */}

    </div>

   <div className={styles.navdrawer}>
    <NavBarDrawerModel mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />
    
    </div>

    </div>

    );

}



export default NavBar;