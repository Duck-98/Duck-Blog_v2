import { ReactNode, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { useMDXComponent } from 'next-contentlayer/hooks';
import _Image from './Image';
import styled from 'styled-components';

interface Props {
  mdx: string;
}

function MDXComponent({ mdx }: Props) {
  const MDX = useMDXComponent(mdx);
  const router = useRouter();
  const wrapperRef = useRef<HTMLInputElement>();

  return (
    <Wrapper ref={wrapperRef}>
      <MDX
        components={{
          Image,
        }}
      />
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
  h4 {
    font-size: 18px;
  }
  h2 {
    margin: 40px 0 30px 0;
    font-family: NotoSansKRBold;
    font-weight: normal;
    font-style: normal;
    font-size: 20px;
    line-height: 153%;
    letter-spacing: -0.4px;
  }
  h1 {
    font-family: NotoSansKRBold;
    font-weight: normal;
    font-style: normal;
    line-height: 46px;
    text-align: center;
    letter-spacing: -0.4px;
    margin-bottom: 40px;
  }
  p {
    font-family: NotoSansKR;
    font-weight: normal;
    font-style: normal;
  }
  p:nth-child(4) {
    font-family: NotoSansKR;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 20px;
    letter-spacing: -0.4px;
    color: #878787;
  }
  ul:last-child {
    font-family: NotoSansKR;
    font-weight: normal;
    font-style: normal;
    list-style: none;
    color: #000000;
    line-height: 190%;
    letter-spacing: -0.4px;
    margin: 0 0 30px 0;
  }
  strong {
    font-family: NotoSansKRBold;
    font-weight: normal;
    font-style: normal;
  }

  ul {
    padding: 16px 14px;
    background-color: #f9fafb;
    color: black;
    list-style: inside;
    font-family: NotoSansKR;
    font-weight: normal;
    font-style: normal;
    font-size: 15px;
    line-height: 26px;
    letter-spacing: -0.4px;
    color: #333333;
    text-decoration: none !important;
    border-radius: 10px;
  }
  li {
    font-size: 14px;
    list-style-position: inside;
    text-indent: -20px;
    padding-left: 20px;
    padding-bottom: 8px;
  }
  h2:last-of-type {
    margin-bottom: 16px;
  }
  .btn {
    width: 275px;
  }
  img {
    width: 728px;
  }
  pre {
    background: ${({ theme }: { theme: any }) => theme.codeColor};
  }
`;

const Image = styled(_Image)`
  width: 728px;
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
