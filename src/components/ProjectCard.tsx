"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './ProjectCard.module.css';

interface Project {
  title: string;
  description: string;
  image: string;
  liveLink?: string;
  githubLink: string;
  techStack: string[];
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        {project.image && !imageError ? (
          <>
            {imageLoading && (
              <div className={styles.imageLoader}>
                <div className={styles.spinner}></div>
              </div>
            )}
            <Image
              src={project.image}
              alt={project.title}
              fill
              className={`${styles.image} ${imageLoading ? styles.imageLoading : ''}`}
              onError={() => setImageError(true)}
              onLoad={() => setImageLoading(false)}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </>
        ) : (
          <div className={styles.placeholderImage}>
            <span>Project Image</span>
          </div>
        )}
        <div className={styles.overlay}>
          {project.liveLink && (
            <a 
              href={project.liveLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.liveButton}
            >
              Live Demo
            </a>
          )}
          <a 
            href={project.githubLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.githubButton}
          >
            View Code
          </a>
        </div>
      </div>
      
      <div className={styles.content}>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.description}</p>
        
        <div className={styles.techStack}>
          <span className={styles.techLabel}>Tech Stack:</span>
          <div className={styles.techTags}>
            {project.techStack.map((tech, index) => (
              <span key={index} className={styles.techTag}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
