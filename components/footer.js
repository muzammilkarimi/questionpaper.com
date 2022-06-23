import Link from "next/link";
import styles from "../styles/footer.module.css";
const footer = () => {
    return (
        <>
            <footer className={styles.footer}>
                <div className={styles.main}>
                    <div className={styles.list}>
                        <ul>
                            <li><strong>Boards</strong></li>
                            <li><Link href="#"><a>CBSE</a></Link></li>
                            <li><Link href="#"><a>Bihar State Board</a></Link></li>
                            <li><Link href="#"><a>Uttar Pradesh State Board</a></Link></li>
                            <li><Link href="#"><a>Andhra Pradesh State Board</a></Link></li>
                            <li><Link href="#"><a>Jharkhand Academic Council</a></Link></li>
                            <li><Link href="#"><a>Tamil Nadu State Board</a></Link></li>

                        </ul>
                    </div>
                    <div className={styles.list}>
                        <ul>
                            <li><strong>Universities</strong></li>
                            <li><Link href="#"><a>Vels University</a></Link></li>
                            <li><Link href="#"><a>B S Abdur Rahman university</a></Link></li>
                            <li><Link href="#"><a>SRM University</a></Link></li>
                            <li><Link href="#"><a>Sathyabhama University</a></Link></li>
                            <li><Link href="#"><a>AKTU</a></Link></li>
                            <li><Link href="#"><a>IPU</a></Link></li>

                        </ul>
                    </div>
                    <div className={styles.list}>
                        <ul>
                            <li><strong>Exams</strong></li>
                            <li><Link href="#"><a>JEE Main</a></Link></li>
                            <li><Link href="#"><a>JEE Advanced</a></Link></li>
                            <li><Link href="#"><a>NEET</a></Link></li>
                            <li><Link href="#"><a>AMU EE</a></Link></li>
                            <li><Link href="#"><a>JMI EE</a></Link></li>
                            <li><Link href="#"><a>MANUU EE</a></Link></li>

                        </ul>
                    </div>
                    <div className={styles.list}>
                        <ul>
                            <li><strong>Notes</strong></li>
                            <li><Link href="#"><a>OOPS</a></Link></li>
                            <li><Link href="#"><a>OS</a></Link></li>
                            <li><Link href="#"><a>COA</a></Link></li>
                            <li><Link href="#"><a>MPMC</a></Link></li>
                            <li><Link href="#"><a>DS</a></Link></li>
                            <li><Link href="#"><a>C++</a></Link></li>
                            <li><Link href="#"><a>DE</a></Link></li>

                        </ul>
                    </div>
                </div>
                <hr className={styles.hrt} />
                <div className={styles.linkssec}>
                    <div className={styles.links}>
                        <ul>
                            <li><Link href="#"><a>Contact Us</a></Link></li>
                            <li><Link href="#"><a>Privacy Policy</a></Link></li>
                            <li><Link href="#"><a>Terms & Conditions</a></Link></li>
                            <li><Link href="#"><a>Notices</a></Link></li>
                            <li><Link href="#"><a>Join Us</a></Link></li>

                        </ul>
                    </div>
                    <div className={styles.socialm}>
                        <div className={styles.smlogo}>
                            <a href="#">
                                <img src="/fb.png" alt="fb logo" />
                            </a>
                        </div>
                        <div className={styles.smlogo}>
                            <a href="#">
                                <img src="/insta.png" alt="instagram logo" />
                            </a>
                        </div>
                        <div className={styles.smlogo}>
                            <a href="#">
                                <img src="/twitter.png" alt="twitter logo" />
                            </a>
                        </div>
                        <div className={styles.smlogo}>
                            <a href="#">
                                <img src="/yt.png" alt="youtube logo" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className={styles.copyright}>
                    <p className={styles.para}>&copy; Copyright 2022, Questionpaperz. All rights reserved</p>
                    <p>Made with ❤️ By <a href="https://www.linkedin.com/in/muzammil-ahmad-karimi-63a105185/"><strong>Muzammil Ahmad Karimi</strong></a></p>
                </div>
            </footer>
        </>
    );
};

export default footer;
