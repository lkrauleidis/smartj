import Link from 'next/link';
import ThreeDAnimation from '../components/ThreeDAnimation';
import styles from '../styles/Home.module.css';

export const metadata = {
  title: 'Jerry Yang - Senior Software Engineer',
  description: 'Portfolio of Jerry Yang, Senior Software Engineer',
};

export default function Home() {
  return (
    <div className={styles.container}>

      <header className={styles.header}>
        <h1>Jerry Yang</h1>
        <h2>Senior Software Engineer</h2>
        <p>Email: smartj32@outlook.com</p>
        <p>Phone: +1 206 809 7210</p>
        <div className={styles.socialLinks}>
          <Link href="https://github.com/lkrauleidis" target="_blank" rel="noopener noreferrer">GitHub</Link>
          <Link href="https://www.linkedin.com/in/jerry-dev913/" target="_blank" rel="noopener noreferrer">LinkedIn</Link>
          <Link href="https://www.linkedin.com/in/jerry-dev913/" target="_blank" rel="noopener noreferrer">Facebook</Link>
          <Link href="https://www.linkedin.com/in/jerry-dev913/" target="_blank" rel="noopener noreferrer">Twitter</Link>
          <Link href="https://www.linkedin.com/in/jerry-dev913/" target="_blank" rel="noopener noreferrer">Reddit</Link>
        </div>
      </header>

      <ThreeDAnimation />

      <footer className={styles.footer}>
        <Link href="/resume">Download Resume</Link>
      </footer>
    </div>
  );
}