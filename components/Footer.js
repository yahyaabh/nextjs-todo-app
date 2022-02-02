import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      <ul className={styles.container}>
        <li className={styles.links}>
          <a
            href="https://yahyaabh.github.io/portfolio/"
            target="_blank"
            className={styles.link}
          >
            me :)
          </a>
        </li>
        <li className={styles.links}>
          <a
            href="https://github.com/yahyaabh"
            target="_blank"
            className={styles.link}
          >
            github
          </a>
        </li>
        <li className={styles.links}>
          <a
            href="https://www.linkedin.com/in/yahia-abh-a84142220/"
            target="_blank"
            className={styles.link}
          >
            linked in
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
