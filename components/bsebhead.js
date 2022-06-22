import React from "react";
import Link from "next/link";
import styles from "../styles/StatesPage.module.css";
const bsebhead = () => {
  return (
    <>
      <div className={styles.state_logo_name}>
        <img src="/BSEB-logo.png" alt="" />
        <h2>BSEB (Bihar School Examination Board), Patna</h2>
        <p>Last Update: <strong> 18-06-2022</strong></p>
      </div>
      <hr className={styles.headhr} />
    </>
  );
};

export default bsebhead;
