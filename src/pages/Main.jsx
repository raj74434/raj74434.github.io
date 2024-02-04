import React from "react";
import NavBar from "../components/NavBar";
import style from "../pagesStyles/main.module.css"
import GitHubCalendar from 'react-github-calendar';
// import 'react-github-calendar/dist/github-calendar.css';


const Main=()=>{

    const resume="./";
    console.log(resume)

return(
<div>
<NavBar/>
    <div id="container" className={style.container}>
        {/* === Intro Section ============ */}
        <div  className={style.section1}>
            <h3 className={style.section1_line1}>Hello, my name is</h3>
            <h1 className={style.section1_line2}>Raj Gupta</h1>
            <h3 className={style.section1_line3}>And I'm a Java Backend Developer</h3>
            <button className={style.section1_btn}><div> <a href="https://drive.google.com/file/d/1t1Mu2gSaumKBlH_aOplZBDtwG9F2k8Vs/view?usp=sharing" className={style.linkTag} target="blank" >  <h3>Resume</h3> </a> </div></button>
        </div>
        {/* === About Me Section ========== */}
        <div className={style.section2}>
            <div id="about" className={style.section2_about_heading}>
                <h2>About Me</h2>
                <hr/>
            </div>
            <div className={style.section2_content}>
            <div className={style.section2_img_div}>
                <img src={require("../assets/profile_pic.jpg")}/>
            </div>
            <div className={style.section2_intro_div}>
                <h2>
                        Aspiring Java Backend Developer with proficiency in Java, Javascript, React, Spring Boot,
                         SQL, Git, AWS, HTML, CSS, and Object-oriented design.
                          Self-motivated and curious, with a keen interest in building 
                          user-centric products. Looking forward to honing my skills in a 
                          challenging work environment.
                </h2>
                <a  className={style.resume_btn1} href={resume} download="./Raj_Gupta_Resume.pdf" >
                    Resume
                <svg xmlns="http://www.w3.org/2000/svg" width="45" height="18" fill="currentColor" className="bi bi-download" viewBox="0 0 16 16">
                    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
                    <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"/>
                </svg>
            </a>
            </div>
            </div>
        </div>
        {/* ==== Skills Section ========== */}
        <div className={style.section3}>
            <div id="skills" className={style.section3_heading}>
                <h2>Skills</h2>
                <hr/>
            </div>
            <div className={style.section3_skills}>
                {/* java */}
                <div className={style.section3_skills_card}>
                <div className={style.section3_skills_img_div} >
                    <img src={require("../assets/technical/java.png")} alt="java"/>
                </div>
                <div className={style.section3_skills_name_div}>
                    <h4 section3_skills_name>JAVA</h4>
                </div>
                </div>
                {/* java Script */}
                <div className={style.section3_skills_card}>
                <div className={style.section3_skills_img_div} >
                    <img src={require("../assets/technical/javascript.png")} alt="javascript"/>
                </div>
                <div className={style.section3_skills_name_div}>
                    <h4 section3_skills_name>JavaScript</h4>
                </div>
                </div>
                {/* python */}
                <div className={style.section3_skills_card}>
                <div className={style.section3_skills_img_div} >
                    <img src={require("../assets/technical/python.png")} alt="python"/>
                </div>
                <div className={style.section3_skills_name_div}>
                    <h4 section3_skills_name>Python</h4>
                </div>
                </div>
                {/* Html */}
                <div className={style.section3_skills_card}>
                <div className={style.section3_skills_img_div} >
                    <img src={require("../assets/technical/html.png")} alt="html"/>
                </div>
                <div className={style.section3_skills_name_div}>
                    <h4 section3_skills_name>HTML</h4>
                </div>
                </div>
                {/* css */}
                <div className={style.section3_skills_card}>
                <div className={style.section3_skills_img_div} >
                    <img src={require("../assets/technical/css.png")} alt="css"/>
                </div>
                <div className={style.section3_skills_name_div}>
                    <h4 section3_skills_name>CSS</h4>
                </div>
                </div>
                {/* react */}
                <div className={style.section3_skills_card}>
                <div className={style.section3_skills_img_div} >
                    <img src={require("../assets/technical/react.png")} alt="react"/>
                </div>
                <div className={style.section3_skills_name_div}>
                    <h4 section3_skills_name>React</h4>
                </div>
                </div>
                {/* aws */}
                <div className={style.section3_skills_card}>
                <div className={style.section3_skills_img_div} >
                    <img src={require("../assets/technical/aws.png")} alt="aws"/>
                </div>
                <div className={style.section3_skills_name_div}>
                    <h4 section3_skills_name>AWS</h4>
                </div>
                </div>
                {/* Hybernate */}
                <div className={style.section3_skills_card}>
                <div className={style.section3_skills_img_div} >
                    <img src={require("../assets/technical/hibernate.png")} alt="Hibernate "/>
                </div>
                <div className={style.section3_skills_name_div}>
                    <h4 section3_skills_name>Hibernate </h4>
                </div>
                </div>
                {/* Spring */}
                <div className={style.section3_skills_card}>
                <div className={style.section3_skills_img_div} >
                    <img src={require("../assets/technical/spring.png")} alt="spring boot "/>
                </div>
                <div className={style.section3_skills_name_div}>
                    <h4 section3_skills_name>Spring Boot </h4>
                </div>
                </div>
                {/* Node */}
                <div className={style.section3_skills_card}>
                <div className={style.section3_skills_img_div} >
                    <img src={require("../assets/technical/node.png")} alt="node"/>
                </div>
                <div className={style.section3_skills_name_div}>
                    <h4 section3_skills_name>Node Js </h4>
                </div>
                </div>
                {/* Git */}
                <div className={style.section3_skills_card}>
                <div className={style.section3_skills_img_div} >
                    <img src={require("../assets/technical/git.png")} alt="Git "/>
                </div>
                <div className={style.section3_skills_name_div}>
                    <h4 section3_skills_name>Git </h4>
                </div>
                </div>
                {/* My sql */}
                <div className={style.section3_skills_card}>
                <div className={style.section3_skills_img_div} >
                    <img src={require("../assets/technical/mysql.png")} alt="My Sql "/>
                </div>
                <div className={style.section3_skills_name_div}>
                    <h4 section3_skills_name>My Sql</h4>
                </div>
                </div>
            </div>

        </div>
        {/* ==== Project section ========= */}
        <div  className={style.section4}>
            <div id="projects" className={style.section4_heading}>
                <h2>My Projects</h2>
                <hr/>
            </div>
            <div  className={style.projects}  >

                <div  className={style.project_list} >
                     {/* <!--  MediGlow Medicare --> */}
                     <div className={style.project_card}>
                        <div className={style.projectImg}>
                    <img src={require("../assets/project/mediglow.png")}/>
                        </div>
                        <div>
                <h2 className={style.project_title} >MediGlow Medicare</h2>
                <h3 className={style.project_tech_stack}> Tech Stack:-  React, JavaScript, Python, MySql, SQL, HTML, CSS</h3>
                 
                    <h4 className={style.project_description}>
                    MediGlow Medicare is a website where user can contact to admin and get 
                    information of disposable medical equipment.
                    It is a Solo Project.
                    </h4>
                <div>
                    <div className={style.project_btn}>
                    <a className={style.project_github_link} href="https://github.com/raj74434/Medi" target="_blank"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                            </svg>GitHub</a>
                    <a className={style.project_deployed_link} href="https://unrivaled-mandazi-9ebbd2.netlify.app/" target="_blank" 
                       >Live</a>
                    </div>
                </div>
                        </div>
                    </div>

                     {/* <!--    Covid 19 vaccine java --> */}
                     <div className={style.project_card} >
                    <div className={style.projectImg}>
                    <img src="https://user-images.githubusercontent.com/105916680/208608266-bd0fb9e9-d502-4d4e-9361-c19c0924d2e8.jpg"/>
                    </div>
                    <div>
                        <h2 className={style.project_title}  >Covid 19 vaccine application</h2>
                        <h3 className={style.project_tech_stack}> Tech Stack- Java , Spring boot , Swagger , Maven , MySql </h3>
                        <h4 className={style.project_description}>Customer register on this portel and get vaccination appointments.
                        </h4>
                        <div>
                        <div className={style.project_btn}>
                            <a className={style.project_github_link} href="https://github.com/DheerajPandey1/shiny-screw-8051" target="_blank"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                                    </svg>
                            Github</a>
                            <a target="_blank" className={style.project_deployed_link} href="https://drive.google.com/drive/folders/1w02FuMiNHjIiacqRZULYB55hMzYhaLhV?usp=sharing"
                               >Live</a>
                        </div>
                        </div>

                    </div>
                    
                    </div>

                    {/* <!-- --------- Monday --------- --> */}

                    <div  className={style.project_card} >
                        <div className={style.projectImg} >
                        <img src={require("../assets/project/monday.png")}/>
                        </div>
            
                        <div >
                        <h2 className={style.project_title}  >Monday - Clone</h2>
                        <h3 className={style.project_tech_stack} > Tech Stack- HTML , CSS , JavaScript </h3>
                        <h4 className={style.project_description}> A clone of Monday.com which provides services to other companies and helps in growing business. 
                        It was cloned in 3 days by 5 team members. Tech stack HTML, CSS, JavaScript.
                        </h4>
                    <div>
                        <div className={style.project_btn}>
                    <a className={style.project_github_link} href="https://github.com/raj74434/puny-cactus-404" target="_blank"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                            </svg>
                            Github</a>
                    <a className={style.project_deployed_link} href="https://playful-smakager-31da9c.netlify.app/home_page/homepage/" target="_blank"
                        >Live</a>
                        </div>
                </div>

                        </div>
            
                    </div>
            
                    {/* <!--    cric buzz  --> */}
                    <div className={style.project_card}>
                        <div className={style.projectImg}>
                <img src={require("../assets/project/cricbuzz.png")}/>
                        </div>
                        <div >
                    <h2 className={style.project_title} >CricBuzz - Clone</h2>
                    <h3 className={style.project_tech_stack}> Tech Stack- HTML , CSS , JAVASCRIPT</h3>
                     <h4 className={style.project_description}
                     >A clone of the cricbuzz website. On this website, users can see updates on cricket.</h4>
                    <div>
                    <div className={style.project_btn}>
                        <a className={style.project_github_link} href="https://github.com/Abhijeet-abhi/Crickbuzz-clone" target="_blank"
                           >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                            </svg>GitHub</a>
                        <a className={style.project_deployed_link} href="https://hilarious-kringle-763b7e.netlify.app/home.html" target="_blank"
                         >Live</a>
                    </div>
                    
                    </div>
                        </div>
                    </div>



                </div>
            </div>

        </div>
        {/* ==== Statastics section ========== */}
        <div className={style.section5}>
            <div className={style.section5_heading}>
                <h2>Statastics</h2>
                <hr/>
            </div>
            <div className={style.section5_statastics}>
                <div>
                <img src = "https://github-readme-stats.vercel.app/api/top-langs/?username=raj74434&langs_count=8&count_private=true&layout=compact&theme=react&hide_border=true&bg_color=0D1117"/>
                </div>
                <div>
                <img src = "https://github-readme-streak-stats.herokuapp.com/?user=raj74434&theme=tokyonight&bg_color=0D1117"/>
                </div>
            </div>
        </div>
        {/*==== GitHub section   ==========  */}
        <div className={style.section6}>
            <div className={style.section6_heading}>
                <h2>GitHub Calendar</h2>
                <hr/>
            </div>
            <div className={style.github_calendar_container}>
            <div className={style.gitBigScreen}>
            <GitHubCalendar username="raj74434"  
                blockSize= {16}  
                fontSize={16}
            />
            </div>
            <div className={style.gitMediumScreen}>
            <GitHubCalendar username="raj74434"  
                blockSize= {12}  
                fontSize={14}
            />
            </div>
            <div   className={style.gitSmallScreen}>
            <GitHubCalendar username="raj74434" 
                blockSize= {10}  
                fontSize={10}
            />
            </div>
            <div   className={style.gitExtraSmallScreen}>
            <GitHubCalendar username="raj74434" 
                blockSize= {5}  
                blockMargin={2}
                fontSize={7}
            />
            </div>
            </div>

        </div>

        {/*===== contact section  =========  */}
        <div className={style.section7}>
            <div id="contact" className={style.section7_heading}>
                <h2>Contact Me</h2>
                <hr/>
            </div>
            <div className={style.contact}>

                <div className={style.contact_big_screen} >
                    <div className={style.contact_left}>
                    
                    <div className={style.contact_list}>
                        <a className={`${style.contact_email} ${style.contact_text}`}  href="mailto:rajgupta74434@gmail.com"> 
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
                        </svg>
                            rajgupta74434@gmail.com</a>
                            <br/>
                        <a className={`${style.contact_phone} ${style.contact_text}`}  href="tel:8851128824" >
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-telephone-outbound-fill" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877zM11 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-4.146 4.147a.5.5 0 0 1-.708-.708L14.293 1H11.5a.5.5 0 0 1-.5-.5"/>
                            </svg>
                            +91-8851128824 </a>
                        <br/>
                        <a  className={`${style.contact_linkedin} ${style.contact_text}`} href="https://www.linkedin.com/in/raj-gupta-075648119" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                        </svg> 
                            LinkedIn</a>
                            <br/>
                        <a className={`${style.contact_github} ${style.contact_text}`} href="https://github.com/raj74434" target="_blank" >
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                        </svg>
                             GitHub</a>

                    


                    </div>

                    </div>

                </div>


                <div className={style.contact_small_screen} >
                    <div className={style.contact_left}>
                    
                    <div className={style.contact_list}>
                        <a className={`${style.contact_email} ${style.contact_text}`}  href="mailto:rajgupta74434@gmail.com"> 
                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
                        </svg>
                            rajgupta74434@gmail.com</a>
                            <br/>
                        <a className={`${style.contact_phone} ${style.contact_text}`}  href="tel:8851128824" >
                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor" class="bi bi-telephone-outbound-fill" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877zM11 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-4.146 4.147a.5.5 0 0 1-.708-.708L14.293 1H11.5a.5.5 0 0 1-.5-.5"/>
                            </svg>
                            +91-8851128824 </a>
                        <br/>
                        <a  className={`${style.contact_linkedin} ${style.contact_text}`} href="https://www.linkedin.com/in/raj-gupta-075648119" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                        </svg> 
                            LinkedIn</a>
                            <br/>
                        <a className={`${style.contact_github} ${style.contact_text}`} href="https://github.com/raj74434" target="_blank" >
                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                        </svg>
                             GitHub</a>

                    


                    </div>

                    </div>

                </div>


            </div>

        </div>


    </div>

</div>
)


}

export default Main;