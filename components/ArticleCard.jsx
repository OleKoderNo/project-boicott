import styles from "@/styles/ArticleCard.module.css";
import Image from "next/image";

const ArticleCard = ({ image, heading, paragraph, buttonText, tags }) => {
  return (
    <div className={styles.articleCard}>
      <Image src={image} alt={heading} className={styles.articleImage} />
      <div className={styles.contentWrapper}>
        <h3 className={styles.articleHeading}>{heading}</h3>
        <p className={styles.articleParagraph}>{paragraph}</p>
        {buttonText && (
          <button className={styles.articleButton}>{buttonText}</button>
        )}
        {tags && (
          <div className={styles.tagsWrapper}>
            {tags.map((tag, index) => (
              <p key={index} className={styles.articleTag}>
                {tag}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ArticleCard;
