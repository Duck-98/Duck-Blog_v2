import React, { useEffect, useState } from 'react';

const Comments = () => {
  const [current, setCurrent] = useState<string>('');

  useEffect(() => {
    const item = localStorage.getItem('theme');
    if (JSON.parse(item).bgColor === '#060606') {
      setCurrent('light');
    } else {
      setCurrent('dark');
    }
  }, []);

  return (
    <section
      ref={(elem) => {
        if (!elem) {
          return;
        }
        const scriptElem = document.createElement('script');
        scriptElem.src = 'https://utteranc.es/client.js';
        scriptElem.async = true;
        scriptElem.setAttribute('repo', 'Duck-98/duck-blog-comment');
        scriptElem.setAttribute('issue-term', 'title');
        scriptElem.setAttribute('theme', `github-${current}`);
        scriptElem.setAttribute('label', 'blog-comment');
        scriptElem.crossOrigin = 'anonymous';
        elem.appendChild(scriptElem);
      }}
    />
  );
};

export default Comments;
