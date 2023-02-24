import React from 'react';
import Container from '../components/Container';
import RecentPosts from '../components/RecentPosts';
import styled from 'styled-components';
import metadata from '../data/metadata';
// import Image from 'next/image';
import Image from '../components/atoms/Image';

const Home = () => {
  return (
    <Container>
      <Div>
        <div className="img-con">
          {/* <Image src="/blog.jpg" alt="Image description"  height={40} /> */}
          <Image src="/blog.jpg" alt="blog-img" autoSize={false} width={768} height={600} />
          <span className="title">{metadata.title}</span>
        </div>
        <RecentPosts />
      </Div>
    </Container>
  );
};

export default Home;

const Div = styled.div`
  margin-top: 1.25rem;
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
