import React, { useState } from 'react';
import { useRouter } from 'next/router';
import * as Styled from '~/styles/blog.styles';
import { WiDaySunny } from 'react-icons/wi';
import { allPosts } from 'contentlayer/generated';
import Pagination from 'react-js-pagination';
import { lightTheme } from 'styles/theme';
import { ThemeProp, PostProp } from 'types/type';
import BlogPost from 'components/\bBlogPost';
import Link from 'next/link';

interface Props {
  toggleTheme: () => void;
  theme: ThemeProp;
  posts: PostProp[];
}

const Tag = ({ toggleTheme, posts, theme }: Props) => {
  const router = useRouter();

  const filterPosts = posts.filter((v: any) => v.tag === router.query.tag);

  const [page, setPage] = useState(1);
  const [items, setItems] = useState(5);

  const tag: Array<string> = [];

  const handleFilterTag = () => {
    posts.map((post: PostProp) => tag.push(post.tag));
  };

  handleFilterTag();

  const tagList = tag.filter((v: string, i: number) => tag.indexOf(v) === i);

  const handlePageChange = (page: number) => {
    setPage(page);
  };

  const itemChange = (e: any) => {
    setItems(Number(e.target.value));
  };

  return (
    <>
      <Styled.BtnWrapper>
        {theme === lightTheme ? (
          <Styled.Button onClick={toggleTheme}>
            <WiDaySunny />
          </Styled.Button>
        ) : (
          <Styled.Button onClick={toggleTheme}>
            <Styled.Night />
          </Styled.Button>
        )}
      </Styled.BtnWrapper>
      <Styled.Div>
        <div className="select">
          <select name="items" onChange={itemChange}>
            <option value="5">5개</option>
            <option value="10">10개</option>
            <option value="15">15개</option>
            <option value="20">20개</option>
          </select>
        </div>

        <Styled.Category>
          <Link href={`/blog`} passHref>
            <Styled.TagContainer>전체보기</Styled.TagContainer>
          </Link>
          {tagList.map((tag) => {
            return (
              <>
                <Link href={`${tag}`} passHref>
                  <Styled.TagContainer isActive={router.query.tag === tag ? true : false}>
                    {tag}
                  </Styled.TagContainer>
                </Link>
              </>
            );
          })}
        </Styled.Category>

        {filterPosts.slice(items * (page - 1), items * (page - 1) + items).map((post) => {
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
        <Styled.PaginationBox>
          <Pagination
            activePage={page}
            itemsCountPerPage={items}
            totalItemsCount={filterPosts.length - 1}
            pageRangeDisplayed={5}
            onChange={handlePageChange}
          ></Pagination>
        </Styled.PaginationBox>
      </Styled.Div>
    </>
  );
};

export default Tag;

export async function getStaticPaths() {
  const tags = ['React', '알고리즘', 'CS', '에러해결', '클린아키텍쳐'];
  const paths = tags.map((tag) => ({
    params: { tag: tag },
  }));

  return { paths, fallback: false };
}

export const getStaticProps = async () => {
  const posts = allPosts.sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));

  return {
    props: {
      posts,
    },
  };
};
