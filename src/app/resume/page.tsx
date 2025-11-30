import styles from './Resume.module.css';
import Link from 'next/link';

const Resume = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Resume</h1>
        <p className={styles.subtitle}>
          Download my resume to learn more about my experience, skills, and qualifications.
        </p>
        
        <div className={styles.downloadSection}>
          <a href="/resume.pdf" download className={styles.downloadButton}>
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            Download My Resume
          </a>
        </div>

        <div className={styles.contactInfo}>
          <h2 className={styles.sectionTitle}>Contact Information</h2>
          <div className={styles.infoGrid}>
            <div className={styles.infoItem}>
              <strong>Email:</strong>
              <a href="mailto:smartj32@outlook.com">smartj32@outlook.com</a>
            </div>
            <div className={styles.infoItem}>
              <strong>Phone:</strong>
              <a href="tel:+12068097210">+1 206 809 7210</a>
            </div>
            <div className={styles.infoItem}>
              <strong>GitHub:</strong>
              <a href="https://github.com/lkrauleidis" target="_blank" rel="noopener noreferrer">
                github.com/lkrauleidis
              </a>
            </div>
            <div className={styles.infoItem}>
              <strong>LinkedIn:</strong>
              <a href="https://www.linkedin.com/in/jerry-dev913/" target="_blank" rel="noopener noreferrer">
                linkedin.com/in/jerry-dev913
              </a>
            </div>
          </div>
        </div>

        <div className={styles.note}>
          <p>
            If the download doesn't work, please{' '}
            <Link href="/contact" className={styles.contactLink}>contact me</Link> and I'll send you a copy directly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Resume;
