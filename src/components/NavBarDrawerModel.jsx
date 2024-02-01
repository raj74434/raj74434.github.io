import React from "react"
// import {Link} from "react-router-dom"
import styles from "../compStyles/navBarDrawerModel.module.css"
import { Link, animateScroll as scroll } from 'react-scroll';

const NavBarDrawerModel=(prop)=>{


return(
    <div onClick={()=>prop.setMobileMenu(false)}   className={prop.mobileMenu ?styles.back:""}>
    <div className={prop.mobileMenu ? styles.drawerContainer_open : styles.drawerContainer}>
        <div className={styles.drawerContent}>
            <div className={prop.mobileMenu ? styles.navbar_menu:styles.navRight}>
                    <div> <Link to="container"  className={styles.linkTag} spy={true} smooth={true} offset={-70} duration={500}  > <h3>Home</h3></Link> </div>
                    <hr/>
                    <div> <Link to="about" className={styles.linkTag}  spy={true} smooth={true} offset={-70} duration={500}> <h3>About Me</h3></Link></div>
                    <hr/>
                    <div> <Link to="skills" className={styles.linkTag} spy={true} smooth={true} offset={-70} duration={500} >  <h3>Skills</h3></Link>  </div>
                    <hr/>
                    <div> <Link to="projects" className={styles.linkTag} spy={true} smooth={true} offset={-70} duration={500} >  <h3>Projects</h3> </Link> </div>
                    <hr/>
                    <div> <Link to="contact"  className={styles.linkTag} spy={true} smooth={true} offset={-70} duration={500} >  <h3>Contact</h3> </Link> </div>
                    <hr/>
                    <div> <Link to="/"  className={styles.linkTag}  >  <h3>Resume</h3> </Link> </div>
                    <hr/>
            </div>
        </div>
        
    </div>  
     </div>
)

}

export default NavBarDrawerModel