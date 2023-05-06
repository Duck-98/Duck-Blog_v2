import React, { memo, useState, useEffect } from 'react';

const Comments = () => {
  const [current, setCurrent] = useState<string>('dark');

  useEffect(() => {
    const item = window.localStorage.getItem('theme');
    if (item === 'light') {
      setCurrent('light');
    } else {
      setCurrent('dark');
    }
  }, []);
  return (
    <>
      {current === 'dark' ? (
        <>
          <section
            ref={(elem) => {
              if (!elem) {
                return;
              }
              const scriptElem = document.createElement('script');
              scriptElem.src = 'https://utteranc.es/client.js';
              scriptElem.async = true;
              scriptElem.setAttribute('repo', 'Duck-98/duck-blog-comment');
              scriptElem.setAttribute('issue-term', 'pathname');
              scriptElem.setAttribute('theme', `github-dark`);
              scriptElem.setAttribute('label', 'blog-comment');
              scriptElem.crossOrigin = 'anonymous';
              elem.appendChild(scriptElem);
            }}
          />
        </>
      ) : (
        <section
          ref={(elem) => {
            if (!elem) {
              return;
            }
            const scriptElem = document.createElement('script');
            scriptElem.src = 'https://utteranc.es/client.js';
            scriptElem.async = true;
            scriptElem.setAttribute('repo', 'Duck-98/duck-blog-comment');
            scriptElem.setAttribute('issue-term', 'pathname');
            scriptElem.setAttribute('theme', `github-light`);
            scriptElem.setAttribute('label', 'blog-comment');
            scriptElem.crossOrigin = 'anonymous';
            elem.appendChild(scriptElem);
          }}
        />
      )}
    </>
  );
};

export default memo(Comments);
