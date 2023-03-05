import Link from 'next/link';
import styled from 'styled-components';

const BlogPost = ({ date, title, des, slug }) => {
  return (
    <CustomLink href={`/blog/${slug}`} passHref>
      <div className="day">{date}</div>
      <div className="title">{title}</div>
      <div className="content">{des}</div>
    </CustomLink>
  );
};

const CustomLink = styled(Link)`
  width: 100%;
  margin-top: 1.75rem; /* 28px */
  padding: 0.5rem;
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
