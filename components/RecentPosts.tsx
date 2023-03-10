import { allPosts } from 'contentlayer/generated';
import Link from 'next/link';
import styled from 'styled-components';

const RecentPosts = ({ posts }) => {
  return (
    <Section>
      <h1>최근 게시물</h1>
      <div className="content-con">
        {posts.slice(0, 5).map((post) => (
          <Link key={post._id} href={`/blog/${post._raw.flattenedPath}`} passHref className="link">
            <Title>{post.title}</Title>
            <div className="content">{post.description}</div>
          </Link>
        ))}
      </div>
    </Section>
  );
};

export default RecentPosts;

const Section = styled.section`
  margin-top: 2.5rem;
  margin-bottom: 5rem;
  h1 {
    font-size: 1.875rem; /* 30px */
    line-height: 2.25rem; /* 36px */
    font-weight: bold;
  }
  .content-con {
    display: flex;
    flex-direction: column;
    color: #aab0ba;
    font-weight: 500;
    font-size: 1rem; /* 24px */
    margin-top: 0.25rem; /* 4px */
  }
  .link {
    margin-top: 1.25rem;
  }
`;

const Title = styled.div`
  font-weight: bolder;
  font-size: 1.5rem; /* 24px */
  margin-top: 0.5rem; /* 8px */
`;

const Content = styled.div``;
