// Comments.tsx
import { useEffect, useRef } from 'react';
import { lightTheme } from 'styles/theme';

const Comments = ({ theme }) => {
  const commentsRef = useRef<HTMLElement | null>(null);

  // 아래 코드는 다크모드 적용을 위한 내용이기에 생략해도 무관하다.
  //   const { theme, systemTheme } = useTheme();
  console.log(theme);
  const commentsTheme = theme === lightTheme ? 'light' : 'dark';

  useEffect(() => {
    const commentsEl = commentsRef.current?.firstChild;
    if (commentsEl) commentsRef.current?.removeChild(commentsEl);
    const scriptEl = document.createElement('script');
    scriptEl.src = 'https://utteranc.es/client.js';
    scriptEl.async = true;
    scriptEl.crossOrigin = 'anonymous';
    scriptEl.setAttribute('repo', 'Duck-98/duck-blog-comment');
    scriptEl.setAttribute('issue-term', 'pathname');
    scriptEl.setAttribute('theme', `github-${commentsTheme}`);
    scriptEl.setAttribute('label', '💬 Discussion');

    commentsRef.current?.appendChild(scriptEl);
  }, [commentsTheme]);

  return <section ref={commentsRef} />;
};

export default Comments;
