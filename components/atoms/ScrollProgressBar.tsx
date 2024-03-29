import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const ScrollProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let animationFrameId;

    const handleScroll = () => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(() => {
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollTop = window.scrollY;
        const progress = (scrollTop / scrollHeight) * 100;
        setScrollProgress(progress);
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <ProgressBar style={{ width: `${scrollProgress}%` }} />;
};

const ProgressBar = styled.div`
  height: 5px;
  background-color: #8a63d2;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  transition: width 0.2s ease;
`;

export default ScrollProgressBar;
