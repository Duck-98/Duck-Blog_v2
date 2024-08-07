import { ReactNode, useEffect, useRef } from 'react';
import { useMDXComponent } from 'next-contentlayer/hooks';
import Prism from 'prismjs';
import _Image from './Image';
import styled from 'styled-components';

interface Props {
  mdx: string;
}

function MDXComponent({ mdx }: Props) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  const MDX = useMDXComponent(mdx);
  const wrapperRef = useRef<HTMLInputElement>();
  const component = {
    Image,
  };
  return (
    <Wrapper ref={wrapperRef}>
      <MDX components={component} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 20px;
  font-family: NotoSansKR;
  font-weight: normal;
  font-style: normal;
  line-height: 28.8px;

  // md 글 스타일
  h5 {
    margin: 10px 0 15px 0;
    font-size: 13px;
  }
  h4 {
    margin: 10px 0 15px 0;
    font-size: 20px;
  }
  h3 {
    margin: 40px 0 30px 0;
    font-family: 'NanumSquare';
    font-weight: 600;
    font-weight: normal;
    font-style: normal;
    font-size: 25px;
    line-height: 153%;
    letter-spacing: -0.4px;
  }
  h2 {
    margin: 40px 0 30px 0;
    font-family: 'NanumSquare';
    font-weight: 600;
    font-size: 30px;
    line-height: 153%;
    letter-spacing: -0.4px;
  }
  h1 {
    font-family: 'NanumSquare';
    font-weight: 800;
    line-height: 46px;
    text-align: center;
    letter-spacing: -0.4px;
    margin-bottom: 40px;
  }
  p {
    font-family: 'NanumSquare';
    font-weight: 300;
  }
  /* ul:last-child {
    font-family: 'NanumSquare';
    font-weight: 300;
    list-style: none;
    color: #000000;
    line-height: 190%;
    letter-spacing: -0.4px;
    margin: 0 0 30px 0;
  } */
  strong {
    font-family: 'NanumSquare';
    font-weight: 800;
  }
  li {
    font-family: 'NanumSquare';
    font-weight: 600;
    padding-bottom: 8px;
  }
  ul {
    padding: 16px 14px;
    background-color: #f9fafb;
    color: black;
    list-style: inside;
    font-family: 'NanumSquare';
    font-weight: 300;
    font-size: 13px;
    line-height: 26px;
    letter-spacing: -0.4px;
    color: #333333;
    text-decoration: none !important;
    border-radius: 10px;
    list-style-position: outside;
    padding: 2rem;

    @media only screen and (max-width: 390px) {
      font-size: 0.6rem;
    }
  }
  h2:last-of-type {
    margin-bottom: 16px;
  }
  .btn {
    width: 275px;
  }
  img {
    @media only screen and (max-width: 390px) {
      width: 100%;
    }
    width: 100%;
  }
  pre {
    background: #2d2d2d;
  }
  code {
    width: 100%;
    @media screen and (max-width: 535px) {
      font-size: 0.7rem;
    }
    @media screen and (max-width: 375px) {
      font-size: 0.5rem;
    }
  }
  a {
    font-family: 'NanumSquare';
    font-weight: 300;
    color: skyblue;
    font-size: 25px;
    cursor: pointer;
  }
  hr {
    height: 2px;
    background-color: #878787;
    border: none;
    margin: 40px 0 30px 0;
  }
  .blue {
    font-family: 'NanumSquare';
    font-weight: 300;
    color: #61dafb;
  }

  blockquote {
    font-style: italic;
    color: #555;
    border-left: 3px solid #ccc;
    margin: 1.5em 0;
    padding: 1em 1.5em;
    background-color: #f9f9f9;
    position: relative;
    quotes: '“' '”' '‘' '’';
  }

  blockquote::before {
    content: open-quote;
    font-size: 2em;
    color: #ccc;
    position: absolute;
    left: 10px;
    top: 10px;
  }

  blockquote::after {
    content: close-quote;
    font-size: 2em;
    color: #ccc;
    position: absolute;
    right: 10px;
    bottom: -10px;
  }

  blockquote footer {
    text-align: right;
    font-size: 0.8em;
    color: #777;
    margin-top: 10px;
  }
`;

const Image = styled(_Image)`
  margin-top: 30px;
`;

// // link용 버튼
// function Button({
//   children,
//   href,
//   eventName,
// }: {
//   children: ReactNode;
//   href: string;
//   eventName?: string;
// }) {
//   const { sendAirbridgeEvent } = useAirbridgeMethod();

//   return (
//     <DefaultButton
//       onClick={() => {
//         eventName &&
//           sendAirbridgeEvent('action_button_click', {
//             action: eventName,
//           });
//         routerPushHandler(href);
//       }}
//     >
//       {children}
//     </DefaultButton>
//   );
// }

// function LinkDiv({ children, href }: { children: ReactNode; href: string }) {
//   return (
//     <LinkButton
//       onClick={() => {
//         routerPushHandler(href);
//       }}
//     >
//       {children}
//     </LinkButton>
//   );
// }

export default MDXComponent;
