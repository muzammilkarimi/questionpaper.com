import React, { useState } from "react";
import Link from "next/link";
import styles from "../styles/Home.module.css";
const navbar = () => {
  // const [state, setstate] = useState(false);
  // const changevalueonscroll = () => {

  //   if (window.scrollY > 400) {
  //     setstate(true);
  //   } else {
  //     setstate(false);
  //   }
  // };
  // window.addEventListener("scroll", changevalueonscroll);
  return (
    <>
      <nav className={styles.mainnav}>
        <Link href="/">
          <div className={styles.navlogo}>
            <img src="/logo.svg" alt="" />
            <h3>Questionpaperz.com</h3>
          </div>
        </Link>
        <ul>
          <Link href="/">
            <li>
              <a>Home</a>
            </li>
          </Link>
          <Link href="/stateboards">
            <li>
              <a>State Boards</a>
            </li>
          </Link>
          <Link href="/universities">
            <li>
              <a>Universities</a>
            </li>
          </Link>
          <Link href="/entranceexam">
            <li>
              <a>Entrance Exams</a>
            </li>
          </Link>
          <Link href="/notes">
            <li>
              <a>Notes</a>
            </li>
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default navbar;
