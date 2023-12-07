import React, { useState } from 'react';
import RecentPosts from 'components/RecentPosts';
import styled from 'styled-components';
import metadata from '../data/metadata';
import Image from 'components/atoms/Image';
import { MdOutlineModeNight } from 'react-icons/md';
import { HiOutlineMail } from 'react-icons/hi';
import { allPosts } from 'contentlayer/generated';
import { InferGetStaticPropsType } from 'next';
import Modal from 'components/molecules/Modal';
import FloatingIcons from '~/components/FloatingIcon';

interface Props {
  posts: InferGetStaticPropsType<typeof getStaticProps>[];
}

const Home = ({ posts }: Props) => {
  const [modalOpen, setModalOpen] = useState(true);
  return (
    <>
      <Div>
        <FloatingIcons />
        <div className="img-con">
          <Image src="/blog.jpg" alt="blog-img" autoSize={false} width={768} height={600} />
          <span className="title">{metadata.title}</span>
        </div>
        <IntroDiv>
          <h1>안녕하세요!</h1>
          <span>
            새로운 기술을 배우는 것을 좋아하며,
            <br /> 주어진 일을 끈질기게 해결하려고 하는 것을 <br />
            좋아하는 프론트엔드 개발자 나덕경입니다.
          </span>
          <div className="contact">
            <div className="con">
              <h2>Contact</h2>
              <HiOutlineMail className="contact-icon" />
            </div>
            <a href="mailto:godqhr2256@gmail.com">godqhr2256@gmail.com</a>
          </div>
        </IntroDiv>
        <Divider />
        <RecentPosts posts={posts} />
        <Divider />
        <Footer>
          <span>Copyright © 2023 Deokgyung Na</span>
          <span>Dev_Duck</span>
        </Footer>
        {/* <div>{modalOpen && <Modal setModalOpen={setModalOpen} />}</div> */}
      </Div>
    </>
  );
};

export const getStaticProps = async () => {
  const posts = allPosts
    .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)))
    .slice(0, 3);
  // 맨 앞 3개만 불러오도록 변경
  return {
    props: {
      posts,
    },
  };
};

export default Home;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 50px;
  span {
    font-family: 'NanumSquare';
    font-weight: 300;
    font-size: 18px;
    &:first-child {
      padding-bottom: 15px;
    }
  }
`;

const IntroDiv = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .con {
    display: flex;
    align-items: center;
    .contact-icon {
      font-size: 25px;
    }
  }
  h1 {
    font-size: 30px;
    font-family: 'NanumSquare';
    font-weight: 800;
    line-height: 190%;
    letter-spacing: -0.4px;
  }
  span {
    font-size: 1rem;
    font-family: 'NanumSquare';
    font-weight: 300;
    line-height: 190%;
    letter-spacing: -0.4px;
  }
  .contact {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    h2 {
      font-family: 'NanumSquare';
      font-weight: 800;
      font-size: 23px;
      line-height: 190%;
    }
    a {
      font-family: 'NanumSquare';
      font-weight: 300;
      font-size: 18px;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

const Divider = styled.div`
  background: ${({ theme }: { theme: any }) => theme.grayColor};
  width: 100%;
  height: 3px;
  box-shadow: rgb(0 0 0 / 10%) 0px 0px 8px;
`;

const Div = styled.div`
  /* position: relative; */
  width: 100%;
  padding-top: 50px;
  .img-con {
    position: relative;
    width: 100%;
    .title {
      font-family: 'NanumSquare';
      font-weight: 800;
      padding: 0;
      position: absolute;
      top: 3rem;
      color: white;
      font-size: 90px;
      line-height: 1;
      display: flex;
      justify-content: center;
      width: 100%;
      filter: drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1));
      @media only screen and (max-width: 390px) {
        font-size: 50px;
      }
    }
  }
`;
