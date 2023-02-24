import Link from 'next/link';
import styled from 'styled-components';

const BlogPost = () => {
  return (
    <CustomLink href="/blog" passHref>
      <div className="day">2022.02.10</div>
      <div className="title">💙 게시물 제목이 나타납니다.</div>
      <div className="content">게시물 설명이 나타납니다.</div>
    </CustomLink>
  );
};

const CustomLink = styled(Link)`
  width: 100%;
  margin-top: 1.75rem; /* 28px */
  &:hover {
    transform: translateX(-0.375rem);
  }
  .day {
    font-weight: 500;
    font-size: 0.75rem; /* 12px */
    color: rgb(156 163 175);
  }
  .title {
    font-weight: bolder;
    font-size: 1.5rem; /* 24px */
    margin-top: 0.5rem; /* 8px */
  }
  .content {
    color: rgb(75 85 99);
    font-weight: 500;
    font-size: 1rem; /* 24px */
    margin-top: 0.25rem; /* 4px */
  }
`;

export default BlogPost;
