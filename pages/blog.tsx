import BlogPost from '../components/\bBlogPost';
import Container from '../components/Container';
import styled from 'styled-components';
import { WiDaySunny } from 'react-icons/wi';
import { MdOutlineModeNight } from 'react-icons/md';
import { lightTheme } from '../styles/theme';
const Blog = ({ toggleTheme, theme }) => {
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
        <BlogPost />
        <BlogPost />
        <BlogPost />
      </Div>
    </>
  );
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
