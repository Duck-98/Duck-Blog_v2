import React from 'react';
import Container from '../components/Container';
import RecentPosts from '../components/RecentPosts';
import styled from 'styled-components';
import metadata from '../data/metadata';
// import Image from 'next/image';
import Image from '../components/atoms/Image';
import { WiDaySunny } from 'react-icons/wi';
import { MdOutlineModeNight } from 'react-icons/md';
import { lightTheme } from '../styles/theme';
import { allPosts } from 'contentlayer/generated';
import { InferGetStaticPropsType } from 'next';
import { ThemeProp } from 'types/type';

interface Props {
  toggleTheme: () => void;
  theme: ThemeProp;
  posts: InferGetStaticPropsType<typeof getStaticProps>[];
}

const Home = ({ toggleTheme, theme, posts }: Props) => {
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
        <RecentPosts posts={posts} />
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
const Button = styled.button`
  position: relative;
  bottom: 45px;
  left: 580px;
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
    }
  }
`;

const Night = styled(MdOutlineModeNight)`
  color: white;
`;
