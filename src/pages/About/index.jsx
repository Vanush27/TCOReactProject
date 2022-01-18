import React from "react";
import avatar from "../../assets/image/avatar.jpg"
import styles from "./about.module.css"

const About = () => {
    return (
        <div id="about">
            <div className={`${styles.about_pag}`}>
                <div className={`${styles.left}`}>
                </div>
                <div className={`${styles.right}`}>
                    <div className={`${styles.wrapper}`}>
                        <div className={`${styles.img}`}>
                            <img src={avatar} alt="avatar"/>
                        </div>
                        <div className={`${styles.contacts}`}>
                            <ul>
                                <li><a href="tel:094775181">Phone: 094 77 51 81 </a></li>
                                <li><a href="mailto:vanushgrigoryan90@gmail.com">Email: vanushgrigoryan90@gmail.com</a>
                                </li>
                                <li><a href="https://linkedin.com/in/vanush-grigoryan/">Linkedin: www.linkedin.com</a>
                                </li>
                                <li><a href="https://github.com/Vanush27">Github: www.github.com</a></li>
                            </ul>
                        </div>

                    </div>


                </div>
            </div>
            <h1 className={`${styles.h1}`}>VANUSH GRIGORYAN</h1>

            <div className={`${styles.about_pag}`}>
                <div className={`${styles.left}`}>
                    <div className={`${styles.h3}`}>
                        <h3>Work Experience</h3>
                    </div>
                </div>

                <div className={`${styles.right}`}>
                    <div className={`${styles.wrapper}`}>
                        <div className={`${styles.contacts}`}>
                            <ul>
                                <li><p> «NATIONAL BODY FOR STANDARDS AND METROLOGY» CJSC
                                    Electrical Meters Measurement Department, leading specialist 2015 – Present
                                </p>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`${styles.about_pag}`}>
                <div className={`${styles.left}`}>
                    <div className={`${styles.h3}`}>
                        <h3>Software Skiils</h3>
                    </div>
                </div>

                <div className={`${styles.right}`}>

                    <div className={`${styles.wrapper}`}>

                        <div className={`${styles.contacts}`}>
                            <ul className={`${styles.skills}`}>
                                <li><p>* HTML,CSS</p></li>
                                <li><p>* JavaScript, React JS</p></li>
                                <li><p>* PHP (Laravel), OOP</p></li>
                                <li><p>* JQuery, Ajax, REST API</p></li>
                                <li><p>* Git,MySql</p></li>
                                <li><p>* Linux,Figma,Photoshop</p></li>
                            </ul>
                        </div>

                    </div>

                </div>
            </div>
            <div className={`${styles.about_pag}`}>
                <div className={`${styles.left}`}>
                    <div className={`${styles.h3}`}>
                        <h3>Education </h3>
                    </div>
                </div>
                <div className={`${styles.right}`}>

                    <div className={`${styles.wrapper}`}>
                        <div className={`${styles.contacts}`}>
                            <h5>Courses (2019 -2021)</h5>
                            <ul>
                                <li><p>1.Java and Android courses in Basic IT Centre 2019 (6 months)</p></li>
                                <li><p>2.Integrated Circuit Design is Synopsys Armenia 2019-2020 (3 months)</p></li>
                                <li><p>3.Web developer trainings in TCO LLC 2021</p></li>

                            </ul>
                            <h5>University (2007 - 2011)</h5>
                            <ul>
                                <li><p>State Engineering University of Armenia(Polytechnic)</p></li>
                                <li><p>Spec: Design and Technology of Electronic Devices</p></li>

                            </ul>
                        </div>

                    </div>

                </div>

            </div>
            <div className={`${styles.about_pag}`}>
                <div className={`${styles.left}`}>
                    <div className={`${styles.h3}`}>
                        <h3>Languages</h3>
                    </div>
                </div>
                <div className={`${styles.right}`}>
                    <div className={`${styles.wrapper}`}>
                        <div className={`${styles.contacts}`}>
                            <ul>
                                <li><p className={styles.language_block}><span>Armenian</span> <span> Native</span></p>
                                </li>
                                <li><p className={styles.language_block}><span>Russian</span> <span>Good</span></p></li>
                                <li><p className={styles.language_block}><span>English</span> <span>Good</span></p></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;