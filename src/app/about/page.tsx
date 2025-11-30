import styles from './About.module.css';
import AnimatedBackground from '../../components/AnimatedBackground';

export default function About() {
  return (
    <div className={styles.container}>
      <AnimatedBackground />
      <div className={styles.content}>
        <h1 className={styles.title}>About Me</h1>
        
        <div className={styles.section}>
          <p className={styles.intro}>
            I am a Senior Software Engineer with a passion for building innovative web applications
            and AI/ML solutions. With strong expertise in full-stack development and project management,
            I specialize in leading teams to deliver efficient, scalable, and impactful solutions.
            My experience spans from frontend and backend development to AI/ML project implementation
            and technical team leadership.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Skills & Technologies</h2>
          <div className={styles.skillsGrid}>
            <div className={styles.skillCategory}>
              <h3>Frontend Development</h3>
              <div className={styles.skillTags}>
                <span className={styles.skillTag}>React</span>
                <span className={styles.skillTag}>Next.js</span>
                <span className={styles.skillTag}>TypeScript</span>
                <span className={styles.skillTag}>JavaScript</span>
                <span className={styles.skillTag}>HTML5</span>
                <span className={styles.skillTag}>CSS3</span>
                <span className={styles.skillTag}>Tailwind CSS</span>
                <span className={styles.skillTag}>Three.js</span>
                <span className={styles.skillTag}>Framer Motion</span>
              </div>
            </div>

            <div className={styles.skillCategory}>
              <h3>Backend Development</h3>
              <div className={styles.skillTags}>
                <span className={styles.skillTag}>Node.js</span>
                <span className={styles.skillTag}>Express</span>
                <span className={styles.skillTag}>Python</span>
                <span className={styles.skillTag}>RESTful APIs</span>
                <span className={styles.skillTag}>GraphQL</span>
                <span className={styles.skillTag}>MongoDB</span>
                <span className={styles.skillTag}>PostgreSQL</span>
                <span className={styles.skillTag}>Firebase</span>
              </div>
            </div>

            <div className={styles.skillCategory}>
              <h3>AI/ML Development</h3>
              <div className={styles.skillTags}>
                <span className={styles.skillTag}>Machine Learning</span>
                <span className={styles.skillTag}>Deep Learning</span>
                <span className={styles.skillTag}>TensorFlow</span>
                <span className={styles.skillTag}>PyTorch</span>
                <span className={styles.skillTag}>Scikit-learn</span>
                <span className={styles.skillTag}>NLP</span>
                <span className={styles.skillTag}>Computer Vision</span>
                <span className={styles.skillTag}>Data Science</span>
                <span className={styles.skillTag}>Pandas</span>
                <span className={styles.skillTag}>NumPy</span>
              </div>
            </div>

            <div className={styles.skillCategory}>
              <h3>Management & Leadership</h3>
              <div className={styles.skillTags}>
                <span className={styles.skillTag}>Project Management</span>
                <span className={styles.skillTag}>Team Leadership</span>
                <span className={styles.skillTag}>Agile/Scrum</span>
                <span className={styles.skillTag}>Product Management</span>
                <span className={styles.skillTag}>Stakeholder Management</span>
                <span className={styles.skillTag}>Strategic Planning</span>
                <span className={styles.skillTag}>Resource Allocation</span>
                <span className={styles.skillTag}>Risk Management</span>
                <span className={styles.skillTag}>Cross-functional Collaboration</span>
              </div>
            </div>

            <div className={styles.skillCategory}>
              <h3>DevOps & Cloud</h3>
              <div className={styles.skillTags}>
                <span className={styles.skillTag}>AWS</span>
                <span className={styles.skillTag}>Docker</span>
                <span className={styles.skillTag}>Kubernetes</span>
                <span className={styles.skillTag}>CI/CD</span>
                <span className={styles.skillTag}>Git</span>
                <span className={styles.skillTag}>GitHub Actions</span>
                <span className={styles.skillTag}>Azure</span>
                <span className={styles.skillTag}>GCP</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>What I Do</h2>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <h3>Full-Stack Development</h3>
              <p>Building scalable web applications with modern frontend and backend technologies, from user interfaces to robust APIs and databases.</p>
            </div>
            <div className={styles.serviceCard}>
              <h3>AI/ML Project Development</h3>
              <p>Designing and implementing machine learning solutions, from data preprocessing to model deployment, including NLP and computer vision applications.</p>
            </div>
            <div className={styles.serviceCard}>
              <h3>Project & Team Management</h3>
              <p>Leading cross-functional teams, managing project lifecycles, and delivering high-quality solutions on time and within budget using Agile methodologies.</p>
            </div>
            <div className={styles.serviceCard}>
              <h3>Technical Leadership</h3>
              <p>Providing strategic technical direction, mentoring developers, and driving innovation in software architecture and development practices.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

