import React, { useState } from 'react';
import styled from 'styled-components';
import { WiDaySunny } from 'react-icons/wi';
import { MdOutlineModeNight } from 'react-icons/md';
import { allPosts } from 'contentlayer/generated';
import Pagination from 'react-js-pagination';
import { lightTheme } from 'styles/theme';
import { ThemeProp, PostProp } from 'types/type';
import BlogPost from 'components/\bBlogPost';

interface Props {
  toggleTheme: () => void;
  theme: ThemeProp;
  posts: PostProp[];
}

const Blog = ({ toggleTheme, posts, theme }: Props) => {
  const [page, setPage] = useState(1);
  const [items, setItems] = useState(5);

  const handlePageChange = (page: number) => {
    setPage(page);
  };
  const itemChange = (e: any) => {
    setItems(Number(e.target.value));
  };
  console.log(items * (page - 1), items * (page - 1) + items);
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
        <div>
          <select name="items" onChange={itemChange}>
            <option value="5">5개</option>
            <option value="10">10개</option>
            <option value="15">15개</option>
            <option value="20">20개</option>
          </select>
        </div>
        {posts.slice(items * (page - 1), items * (page - 1) + items).map((post) => {
          return (
            <BlogPost
              date={post.date}
              title={post.title}
              des={post.description}
              slug={post._raw.flattenedPath}
              key={post._id}
            />
          );
        })}
        <PaginationBox>
          <Pagination
            activePage={page}
            itemsCountPerPage={items}
            totalItemsCount={posts.length - 1}
            pageRangeDisplayed={5}
            onChange={handlePageChange}
          ></Pagination>
        </PaginationBox>
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
  padding-bottom: 5rem;
`;
const Button = styled.button`
  position: relative;
  bottom: 45px;
  right: -150px;
  font-size: 40px;
`;
const Night = styled(MdOutlineModeNight)`
  color: white;
`;
const BtnWrapper = styled.div``;

const PaginationBox = styled.div`
  .pagination {
    display: flex;
    justify-content: center;
    margin-top: 15px;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  ul.pagination li {
    display: inline-block;
    width: 30px;
    height: 30px;
    border: 1px solid #e2e2e2;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    cursor: pointer;
  }
  ul.pagination li:first-child {
    border-radius: 5px 0 0 5px;
  }
  ul.pagination li:last-child {
    border-radius: 0 5px 5px 0;
  }
  ul.pagination li a {
    text-decoration: none;
    color: ${({ theme }: { theme: any }) => theme.textColor};
    font-size: 1rem;
  }
  ul.pagination li.active a {
    color: ${({ theme }: { theme: any }) => theme.grayColor};
  }
  ul.pagination li.active {
    background: ${({ theme }: { theme: any }) => theme.textColor};
  }
  ul.pagination li a:hover,
  ul.pagination li a.active {
  }
`;

export default Blog;
