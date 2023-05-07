import Head from 'next/head';
import React from 'react';
import Nav from './Nav';
import styled from 'styled-components';
import metadata from '../data/metadata';
// import Image from './atoms/Image';
import Image from 'next/image';
import Link from 'next/link';
import { WiDaySunny } from 'react-icons/wi';
import { Night } from '~/styles/blog.styles';
import { lightTheme } from '~/styles/theme';

const Container = (props) => {
  const meta = {
    title: metadata.title,
    description: metadata.description,
    author: metadata.author,
    ...props.customMeta,
  };

  return (
    <>
      <Div>
        <Head>
          <title>{meta.title}</title>
          <title>{meta.title}</title>
          <meta content={meta.description} name="description" />
          <meta property="og:site_name" content={meta.author} />
          <meta property="og:image" content="https://duck-blog-v2-duck-98.vercel.app/dev.jpg" />
        </Head>
        <Header>
          <div className="img-con">
            <Link href="/">
              <Image className="img" src="/home.jpg" alt="blog-img" width={50} height={50} />
            </Link>
            <span className="title">{metadata.title}</span>
            {props.theme === lightTheme ? (
              <Button onClick={props.toggleTheme}>
                <WiDaySunny />
              </Button>
            ) : (
              <Button onClick={props.toggleTheme}>
                <Night />
              </Button>
            )}
          </div>

          <Nav />
        </Header>
        <Main>{props.children}</Main>
      </Div>
    </>
  );
};

export default Container;

const Main = styled.main`
  width: 100%;
  max-width: 48rem;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.75rem;
  .img-con {
    display: flex;
    flex-direction: row;
    align-items: center;
    .img {
      border-radius: 100%;
    }
    .title {
      font-family: 'NanumSquare';
      font-weight: 600;
      padding-left: 0.75rem;
    }
  }
  .con {
    border-radius: 100%;
  }
`;

const Header = styled.header`
  max-width: 48rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.25rem;
`;

export const Button = styled.button`
  font-size: 40px;
  padding-left: 30px;
`;
