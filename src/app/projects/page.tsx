import ProjectCard from '../../components/ProjectCard';
import styles from './Projects.module.css';

interface Project {
  title: string;
  description: string;
  image: string;
  liveLink?: string;
  githubLink: string;
  techStack: string[];
}

const projects: Project[] = [
  // AI Projects
  {
    title: 'AI-Powered Sentiment Analysis Platform',
    description: 'Advanced NLP system for real-time sentiment analysis of social media posts, reviews, and customer feedback using deep learning models and transformer architectures.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop&q=80',
    liveLink: 'https://example.com/ai-sentiment',
    githubLink: 'https://github.com/lkrauleidis/ai-sentiment-analysis',
    techStack: ['Python', 'TensorFlow', 'PyTorch', 'NLP', 'BERT', 'FastAPI', 'React'],
  },
  {
    title: 'Computer Vision Object Detection System',
    description: 'Real-time object detection and classification system using YOLO and CNN architectures. Deployed for security monitoring, inventory management, and autonomous systems.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop&q=80',
    liveLink: 'https://example.com/cv-detection',
    githubLink: 'https://github.com/lkrauleidis/computer-vision-detection',
    techStack: ['Python', 'OpenCV', 'TensorFlow', 'YOLO', 'CNN', 'Docker', 'Flask'],
  },
  {
    title: 'Machine Learning Recommendation Engine',
    description: 'Intelligent recommendation system using collaborative filtering and deep learning. Powers personalized content delivery for e-commerce and streaming platforms.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop&q=80',
    githubLink: 'https://github.com/lkrauleidis/ml-recommendation-engine',
    techStack: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'TensorFlow', 'PostgreSQL', 'Redis'],
  },
  // Blockchain Projects
  {
    title: 'Decentralized Finance (DeFi) Platform',
    description: 'Full-stack DeFi application enabling peer-to-peer lending, staking, and yield farming. Built on Ethereum with smart contracts for secure and transparent financial transactions.',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop&q=80',
    liveLink: 'https://example.com/defi-platform',
    githubLink: 'https://github.com/lkrauleidis/defi-platform',
    techStack: ['Solidity', 'Web3.js', 'Ethereum', 'React', 'TypeScript', 'Truffle', 'MetaMask'],
  },
  {
    title: 'NFT Marketplace & Minting Platform',
    description: 'Complete NFT marketplace with minting capabilities, auction system, and royalty management. Features gas optimization and multi-chain support for Ethereum and Polygon.',
    image: 'https://images.unsplash.com/photo-1640340434855-6084b1f4901c?w=800&h=600&fit=crop&q=80',
    liveLink: 'https://example.com/nft-marketplace',
    githubLink: 'https://github.com/lkrauleidis/nft-marketplace',
    techStack: ['Solidity', 'IPFS', 'Ethereum', 'Next.js', 'Web3.js', 'OpenSea API', 'Node.js'],
  },
  // Other Projects
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with user authentication, product management, shopping cart, and payment integration.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&q=80',
    liveLink: 'https://example.com/ecommerce',
    githubLink: 'https://github.com/lkrauleidis/ecommerce-platform',
    techStack: ['React', 'Node.js', 'TypeScript', 'MongoDB', 'Stripe'],
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop&q=80',
    liveLink: 'https://example.com/taskmanager',
    githubLink: 'https://github.com/lkrauleidis/task-manager',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Firebase'],
  },
  {
    title: 'Weather Dashboard',
    description: 'A beautiful weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics.',
    image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=600&fit=crop&q=80',
    liveLink: 'https://example.com/weather',
    githubLink: 'https://github.com/lkrauleidis/weather-dashboard',
    techStack: ['React', 'TypeScript', 'Chart.js', 'OpenWeather API'],
  },
  {
    title: 'Social Media Analytics',
    description: 'Analytics platform for tracking social media performance with real-time metrics, data visualization, and reporting tools.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80',
    githubLink: 'https://github.com/lkrauleidis/social-analytics',
    techStack: ['Vue.js', 'Python', 'Django', 'PostgreSQL', 'D3.js'],
  },
  {
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio website showcasing projects, skills, and professional experience with 3D animations.',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop&q=80',
    liveLink: 'https://example.com/portfolio',
    githubLink: 'https://github.com/lkrauleidis/portfolio',
    techStack: ['Next.js', 'TypeScript', 'Three.js', 'Framer Motion'],
  },
  {
    title: 'Chat Application',
    description: 'Real-time chat application with multiple rooms, file sharing, emoji support, and message encryption.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop&q=80',
    githubLink: 'https://github.com/lkrauleidis/chat-app',
    techStack: ['React', 'Socket.io', 'Node.js', 'Express', 'MongoDB'],
  },
];

export default function Projects() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>My Projects</h1>
        <p className={styles.subtitle}>
          A collection of projects showcasing my skills and experience in web development
        </p>
      </div>
      
      <div className={styles.projectsGrid}>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}
