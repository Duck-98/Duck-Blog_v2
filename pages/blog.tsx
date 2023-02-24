import BlogPost from '../components/\bBlogPost';
import Container from '../components/Container';
import styled from 'styled-components';

const Blog = () => {
  return (
    <Container>
      <Div>
        <BlogPost />
        <BlogPost />
        <BlogPost />
      </Div>
    </Container>
  );
};

const Div = styled.div`
  margin-top: 2.5rem; /* 40px */
  display: flex;
  flex-direction: column;
`;

export default Blog;
