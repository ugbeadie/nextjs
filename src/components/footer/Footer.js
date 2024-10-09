import styles from "./footer.module.css";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className={styles.container}>
      <div className={styles.logo}>ugbeadie</div>
      <div className={styles.text}>© {year} Ugbe Adie All rights reserved.</div>
    </div>
  );
};

export default Footer;
