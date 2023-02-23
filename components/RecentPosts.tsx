import Link from 'next/link';
import styled from 'styled-components';

const RecentPosts = () => {
  return (
    <Section>
      <h1>최근 게시물</h1>
      <div className="content-con">
        <Link href="/" passHref className="link">
          <Title>게시물 제목</Title>
          <div className="content">게시물설명</div>
        </Link>
        <Link href="/" passHref className="link">
          <Title>hello</Title>
          <div>안녕하세요</div>
        </Link>
      </div>
    </Section>
  );
};

export default RecentPosts;

const Section = styled.section`
  margin-top: 2.5rem;
  h1 {
    font-size: 1.875rem; /* 30px */
    line-height: 2.25rem; /* 36px */
    font-weight: bold;
  }
  .content-con {
    display: flex;
    flex-direction: column;
  }
  .link {
    margin-top: 1.25rem;
  }
`;

const Title = styled.div`
  font-size: medium;
`;

const Content = styled.div``;
