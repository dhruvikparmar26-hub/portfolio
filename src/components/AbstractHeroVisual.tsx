import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface AbstractHeroVisualProps {
  className?: string;
}

export const AbstractHeroVisual: React.FC<AbstractHeroVisualProps> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Scene Setup
    const scene = new THREE.Scene();

    const width = container.clientWidth || 500;
    const height = container.clientHeight || 500;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 6.2);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Root Group
    const visualGroup = new THREE.Group();
    scene.add(visualGroup);

    // 1. Inner Crystalline Polyhedron Core
    const coreGeo = new THREE.IcosahedronGeometry(0.85, 0);
    const coreMat = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#071329'),
      emissive: new THREE.Color('#0c284d'),
      emissiveIntensity: 0.6,
      roughness: 0.1,
      metalness: 0.8,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      transparent: true,
      opacity: 0.85,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    visualGroup.add(coreMesh);

    // Core Wireframe Outline
    const coreWireGeo = new THREE.IcosahedronGeometry(0.86, 0);
    const coreWireMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color('#58D6FF'),
      wireframe: true,
      transparent: true,
      opacity: 0.4,
    });
    const coreWireMesh = new THREE.Mesh(coreWireGeo, coreWireMat);
    visualGroup.add(coreWireMesh);

    // 2. Middle Neural Geodesic Lattice Sphere
    const latticeGeo = new THREE.IcosahedronGeometry(1.65, 2);
    const latticeWireMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color('#58D6FF'),
      wireframe: true,
      transparent: true,
      opacity: 0.18,
    });
    const latticeMesh = new THREE.Mesh(latticeGeo, latticeWireMat);
    visualGroup.add(latticeMesh);

    // Neural Nodes (points on lattice vertices)
    const nodePositions = latticeGeo.attributes.position.array;
    const nodeCount = nodePositions.length / 3;
    const nodeColors = new Float32Array(nodeCount * 3);
    const cyan = new THREE.Color('#58D6FF');
    const amber = new THREE.Color('#FFB36B');
    const mint = new THREE.Color('#55E6C1');

    for (let i = 0; i < nodeCount; i++) {
      const p = Math.random();
      const c = p > 0.65 ? cyan : p > 0.35 ? mint : amber;
      nodeColors[i * 3] = c.r;
      nodeColors[i * 3 + 1] = c.g;
      nodeColors[i * 3 + 2] = c.b;
    }

    const nodeGeo = new THREE.BufferGeometry();
    nodeGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(nodePositions), 3));
    nodeGeo.setAttribute('color', new THREE.BufferAttribute(nodeColors, 3));

    const nodeMat = new THREE.PointsMaterial({
      size: 0.07,
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending,
    });
    const nodePoints = new THREE.Points(nodeGeo, nodeMat);
    visualGroup.add(nodePoints);

    // 3. Orbital Particle Swarm / Quantum Nebula
    const particleCount = 450;
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColorArray = new Float32Array(particleCount * 3);
    const particleVelocities: { radius: number; speed: number; theta: number; phi: number }[] = [];

    for (let i = 0; i < particleCount; i++) {
      const radius = 1.9 + Math.random() * 1.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = (Math.random() - 0.5) * Math.PI * 0.9;

      particlePositions[i * 3] = radius * Math.cos(phi) * Math.cos(theta);
      particlePositions[i * 3 + 1] = radius * Math.sin(phi);
      particlePositions[i * 3 + 2] = radius * Math.cos(phi) * Math.sin(theta);

      const colorSeed = Math.random();
      const col = colorSeed > 0.6 ? cyan : colorSeed > 0.25 ? mint : amber;
      particleColorArray[i * 3] = col.r;
      particleColorArray[i * 3 + 1] = col.g;
      particleColorArray[i * 3 + 2] = col.b;

      particleVelocities.push({
        radius,
        speed: (0.15 + Math.random() * 0.25) * (Math.random() > 0.5 ? 1 : -1),
        theta,
        phi,
      });
    }

    const swarmGeo = new THREE.BufferGeometry();
    swarmGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    swarmGeo.setAttribute('color', new THREE.BufferAttribute(particleColorArray, 3));

    const swarmMat = new THREE.PointsMaterial({
      size: 0.045,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    });
    const swarmPoints = new THREE.Points(swarmGeo, swarmMat);
    visualGroup.add(swarmPoints);

    // 4. Elegant Gyroscopic Coordinate Rings
    const createRing = (radius: number, color: string, rotX: number, rotY: number) => {
      const ringGeo = new THREE.RingGeometry(radius, radius + 0.015, 128);
      const ringMat = new THREE.MeshBasicMaterial({
        color: new THREE.Color(color),
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.22,
      });
      const ringMesh = new THREE.Mesh(ringGeo, ringMat);
      ringMesh.rotation.set(rotX, rotY, 0);
      visualGroup.add(ringMesh);
      return ringMesh;
    };

    const ring1 = createRing(2.35, '#58D6FF', Math.PI / 2.5, 0.3);
    const ring2 = createRing(2.65, '#55E6C1', -Math.PI / 3.2, 0.4);
    const ring3 = createRing(2.95, '#FFB36B', Math.PI / 5, -0.6);

    // 5. Lighting
    const ambientLight = new THREE.AmbientLight('#071329', 1.8);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight('#58D6FF', 3.0);
    keyLight.position.set(3, 4, 5);
    scene.add(keyLight);

    const fillLight = new THREE.PointLight('#55E6C1', 3.5, 10);
    fillLight.position.set(-3, -2, 2);
    scene.add(fillLight);

    const accentLight = new THREE.PointLight('#FFB36B', 2.5, 8);
    accentLight.position.set(0, 3, -2);
    scene.add(accentLight);

    // Mouse Interaction
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const clientX = e.clientX - rect.left;
      const clientY = e.clientY - rect.top;

      mouseRef.current.targetX = (clientX / rect.width - 0.5) * 2;
      mouseRef.current.targetY = -(clientY / rect.height - 0.5) * 2;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Resize Observer
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width: w, height: h } = entry.contentRect;
        if (w > 0 && h > 0) {
          camera.aspect = w / h;
          camera.updateProjectionMatrix();
          renderer.setSize(w, h);
        }
      }
    });
    resizeObserver.observe(container);

    // Animation Loop
    let animationFrameId: number;
    const startTime = performance.now();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = (performance.now() - startTime) * 0.001;

      // Smooth mouse interpolation
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      if (!prefersReducedMotion) {
        // Group rotation with mouse parallax
        visualGroup.rotation.y = elapsedTime * 0.12 + mouseRef.current.x * 0.35;
        visualGroup.rotation.x = Math.sin(elapsedTime * 0.15) * 0.1 + mouseRef.current.y * 0.25;

        // Counter-rotation of core
        coreMesh.rotation.x = -elapsedTime * 0.25;
        coreMesh.rotation.y = elapsedTime * 0.3;
        coreWireMesh.rotation.x = -elapsedTime * 0.25;
        coreWireMesh.rotation.y = elapsedTime * 0.3;

        // Gentle breathing pulsation on the inner core
        const scalePulse = 1 + Math.sin(elapsedTime * 1.5) * 0.06;
        coreMesh.scale.set(scalePulse, scalePulse, scalePulse);
        coreWireMesh.scale.set(scalePulse, scalePulse, scalePulse);

        // Gyroscopic ring rotation
        ring1.rotation.z = elapsedTime * 0.15;
        ring2.rotation.z = -elapsedTime * 0.12;
        ring3.rotation.y = elapsedTime * 0.09;

        // Animate particles in swarm
        const positions = swarmGeo.attributes.position.array as Float32Array;
        for (let i = 0; i < particleCount; i++) {
          const p = particleVelocities[i];
          p.theta += p.speed * 0.01;
          const currentRadius = p.radius + Math.sin(elapsedTime * 1.2 + i) * 0.08;

          positions[i * 3] = currentRadius * Math.cos(p.phi) * Math.cos(p.theta);
          positions[i * 3 + 1] = currentRadius * Math.sin(p.phi);
          positions[i * 3 + 2] = currentRadius * Math.cos(p.phi) * Math.sin(p.theta);
        }
        swarmGeo.attributes.position.needsUpdate = true;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      resizeObserver.disconnect();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      coreGeo.dispose();
      coreWireGeo.dispose();
      latticeGeo.dispose();
      nodeGeo.dispose();
      swarmGeo.dispose();
      ring1.geometry.dispose();
      ring2.geometry.dispose();
      ring3.geometry.dispose();
      coreMat.dispose();
      coreWireMat.dispose();
      latticeWireMat.dispose();
      nodeMat.dispose();
      swarmMat.dispose();
      (ring1.material as THREE.Material).dispose();
      (ring2.material as THREE.Material).dispose();
      (ring3.material as THREE.Material).dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full flex items-center justify-center ${className}`}
      aria-label="Interactive 3D neural core visualization"
    >
      {/* Ambient background glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,rgba(88,214,255,0.12)_0%,rgba(85,230,193,0.06)_40%,transparent_70%)]" />
    </div>
  );
};
