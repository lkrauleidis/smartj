"use client";

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeDAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);

    // Create multiple spheres with different colors and sizes
    const spheres: THREE.Mesh[] = [];
    const colors = [0x0077ff, 0x00ff77, 0xff7700, 0xff0077, 0x7700ff];
    
    for (let i = 0; i < 5; i++) {
      const geometry = new THREE.SphereGeometry(0.5 + Math.random() * 0.5, 32, 32);
      const material = new THREE.MeshPhongMaterial({ 
        color: colors[i],
        transparent: true,
        opacity: 0.7,
        emissive: colors[i],
        emissiveIntensity: 0.3
      });
      const sphere = new THREE.Mesh(geometry, material);
      sphere.position.set(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10
      );
      scene.add(sphere);
      spheres.push(sphere);
    }

    // Add ambient and directional light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    camera.position.z = 8;

    let animationId: number;
    const animate = function () {
      animationId = requestAnimationFrame(animate);
      
      spheres.forEach((sphere, index) => {
        sphere.rotation.x += 0.005 + index * 0.001;
        sphere.rotation.y += 0.01 + index * 0.002;
        sphere.position.y += Math.sin(Date.now() * 0.001 + index) * 0.001;
      });
      
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
      spheres.forEach(sphere => {
        (sphere.geometry as THREE.BufferGeometry).dispose();
        ((sphere.material as THREE.Material) as THREE.MeshPhongMaterial).dispose();
      });
    };
  }, []);

  return <div ref={containerRef} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1, pointerEvents: 'none' }} />;
};

export default ThreeDAnimation;