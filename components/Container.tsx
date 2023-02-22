import Head from 'next/head';
import React, { ReactNode } from 'react';
import Nav from './Nav';
import styled from 'styled-components';
import Image from 'next/image';
// import Image from './atoms/Image';

const Container = (props: { children: React.ReactNode }) => {
  return (
    <>
      <Div>
        <Head>
          <title>Duck 블로그</title>
        </Head>
        <Header>
          <div className="img-con">
            {/* <Image src="/home.jpg" alt="logo" autoSize={false} width={40} height={40} /> */}
            {/* <Image src={`/home.jpg`} alt="대표 이미지" width="100%" height={45} /> */}
            <span className=""></span>
          </div>
          <Nav />
          <main>{props.children}</main>
        </Header>
      </Div>
    </>
  );
};

export default Container;

const Div = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding: 0.75rem;
  .img-con {
    display: flex;
    flex-direction: row;
    align-items: center;
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
