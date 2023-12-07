import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import * as THREE from 'three';
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader';

const FloatingIcons = () => {
  const mountRef = useRef(null);
  const velocities = useRef({});

  useEffect(() => {
    const svgPaths = [
      '/three/docker.svg',
      '/three/redux.svg',
      '/three/react.svg',
      '/three/github.svg',
      '/three/javascript.svg',
      '/three/typescript.svg',
      '/three/react-query-icon.svg',
      '/three/swr.svg',
      '/three/tailwindcss.svg',
      '/three/styledcomponents.svg',
      '/three/nextjs-icon.svg',
      '/three/git.svg',
    ];

    const loader = new SVGLoader();

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    );
    camera.position.z = 5;

    const container = mountRef.current;
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    mountRef.current.appendChild(renderer.domElement);

    svgPaths.forEach((path) => {
      loader.load(path, function (data) {
        const paths = data.paths;
        const group = new THREE.Group();
        group.uuid = THREE.MathUtils.generateUUID();
        velocities.current[group.uuid] = new THREE.Vector3(
          (Math.random() - 0.5) * 0.01,
          (Math.random() - 0.5) * 0.01,
          (Math.random() - 0.5) * 0.01,
        );

        group.position.set(
          (Math.random() - 0.5) * 5,
          (Math.random() - 0.5) * 5,
          (Math.random() - 0.5) * 5,
        );

        for (let i = 0; i < paths.length; i++) {
          const path = paths[i];
          const shapes = path.toShapes(true);
          const material = new THREE.MeshBasicMaterial({
            color: path.color || 0xffffff || 'black',
            side: THREE.DoubleSide,
            depthWrite: false,
          });
          for (let j = 0; j < shapes.length; j++) {
            const shape = shapes[j];
            const geometry = new THREE.ShapeGeometry(shape);
            geometry.scale(0.003, 0.003, 0.003);
            const mesh = new THREE.Mesh(geometry, material);
            group.add(mesh);
          }
        }
        group.rotation.y = Math.PI;
        group.rotation.z = Math.PI;
        scene.add(group);
      });
    });

    const handleResize = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', handleResize);

    const animate = () => {
      requestAnimationFrame(animate);

      scene.children.forEach((child) => {
        if (child instanceof THREE.Group) {
          child.position.add(velocities.current[child.uuid]);

          // 아이콘 그룹이 일정 범위를 벗어나면 반대 방향으로 움직이게 합니다.
          if (Math.abs(child.position.x) > 2.5) velocities.current[child.uuid].x *= -1;
          if (Math.abs(child.position.y) > 2.5) velocities.current[child.uuid].y *= -1;
          if (Math.abs(child.position.z) > 2.5) velocities.current[child.uuid].z *= -1;
        }
      });

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      while (scene.children.length > 0) {
        scene.remove(scene.children[0]);
      }
      renderer.dispose();
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }

      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <FloatingIconsCanvas ref={mountRef} />;
};

export default FloatingIcons;

const FloatingIconsCanvas = styled.div`
  z-index: -2;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;
