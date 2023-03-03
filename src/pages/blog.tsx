import BlogPost from '../components/\bBlogPost';
import { InferGetStaticPropsType } from 'next';

import styled from 'styled-components';
import { WiDaySunny } from 'react-icons/wi';
import { MdOutlineModeNight } from 'react-icons/md';
import { lightTheme } from '../styles/theme';
import { PostProp, ThemeProp } from 'types/type';
import { allPosts } from 'contentlayer/generated';

interface Props {
  toggleTheme: () => void;
  theme: ThemeProp;
  posts: PostProp[];
}

const Blog = ({ toggleTheme, posts, theme }: Props) => {
  return (
    <>
      <BtnWrapper>
        {theme === lightTheme ? (
          <Button onClick={toggleTheme}>
            <WiDaySunny />
          </Button>
        ) : (
          <Button onClick={toggleTheme}>
            <Night />
          </Button>
        )}
      </BtnWrapper>
      <Div>
        {posts.map((post) => (
          <BlogPost
            date={post.date}
            title={post.title}
            des={post.description}
            slug={post._raw.flattenedPath}
            key={post._id}
          />
        ))}
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

const Div = styled.div`
  display: flex;
  flex-direction: column;
`;
const Button = styled.button`
  position: relative;
  bottom: 45px;
  left: 580px;
  font-size: 40px;
`;
const Night = styled(MdOutlineModeNight)`
  color: white;
`;
const BtnWrapper = styled.div``;
export default Blog;
