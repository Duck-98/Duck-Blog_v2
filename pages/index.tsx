import React, { useState } from 'react';
import RecentPosts from 'components/RecentPosts';
import styled from 'styled-components';
import metadata from '../data/metadata';
import Image from 'components/atoms/Image';
import { WiDaySunny } from 'react-icons/wi';
import { MdOutlineModeNight } from 'react-icons/md';
import { HiOutlineMail } from 'react-icons/hi';
import { lightTheme } from 'styles/theme';
import { allPosts } from 'contentlayer/generated';
import { InferGetStaticPropsType } from 'next';
import { ThemeProp } from 'types/type';
import Modal from 'components/molecules/Modal';

interface Props {
  toggleTheme: () => void;
  theme: ThemeProp;
  posts: InferGetStaticPropsType<typeof getStaticProps>[];
}

const Home = ({ toggleTheme, theme, posts }: Props) => {
  const [modalOpen, setModalOpen] = useState(true);

  return (
    <>
      <Div>
        {theme === lightTheme ? (
          <Button onClick={toggleTheme}>
            <WiDaySunny />
          </Button>
        ) : (
          <Button onClick={toggleTheme}>
            <Night />
          </Button>
        )}
        <div className="img-con">
          <Image src="/blog.jpg" alt="blog-img" autoSize={false} width={768} height={600} />
          <span className="title">{metadata.title}</span>
        </div>
        <IntroDiv>
          <h1>안녕하세요!</h1>
          <span>
            새로운 기술을 배우는 것을 좋아하며,
            <br /> 주어진 일은 끈질기게 해결하려고 하는 <br />
            프론트엔드 개발자 나덕경입니다.
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
        <div>{modalOpen && <Modal setModalOpen={setModalOpen} />}</div>
      </Div>
    </>
  );
};

export const getStaticProps = async () => {
  const posts = allPosts.sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));
  return {
    props: {
      posts,
    },
  };
};

export default Home;

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
    font-weight: bolder;
    line-height: 190%;
    letter-spacing: -0.4px;
  }
  span {
    font-size: 25px;
    font-weight: 200;
    line-height: 190%;
    letter-spacing: -0.4px;
  }
  .contact {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    h2 {
      font-size: 23px;
      line-height: 190%;
    }
    a {
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

const Button = styled.button`
  position: relative;
  bottom: 45px;
  right: -150px;
  font-size: 40px;
`;
const Div = styled.div`
  width: 100%;
  .img-con {
    position: relative;
    width: 100%;
    .title {
      position: absolute;
      font-weight: bolder;
      top: 3rem;
      color: white;
      font-size: 90px;
      font-style: italic;
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

const Night = styled(MdOutlineModeNight)`
  color: white;
`;
