import styles from "@/styles/header.module.css";

const Header = ({ title, subtitle, description }) => {
  return (
    <header>
      <h1 className={styles.headerTitle}>{title}</h1>
      <div className={styles.headerBox}>
        <h2 className={styles.headerSubtitle}>{subtitle}</h2>
        {description && <p className={styles.headerText}>{description}</p>}
      </div>
    </header>
  );
};

export default Header;
