import React from 'react';
import Comments from 'components/Comments';
import { allPosts } from 'contentlayer/generated';
import { InferGetStaticPropsType } from 'next';
import styled from 'styled-components';
import MDXComponent from 'components/atoms/MDXComponent';
import share from '~/utils/share';
import { useRouter } from 'next/router';
import { FaShareAlt } from 'react-icons/fa';
import HeadMeta from '~/components/atoms/HeadMetaTag';
import Link from 'next/link';
import ScrollProgressBar from '~/components/atoms/ScrollProgressBar';

const Post = ({ post, allPosts, currentIndex }: InferGetStaticPropsType<typeof getStaticProps>) => {
  // const MDXComponent = useMDXComponent(post.body.code);

  const nextPost = allPosts[currentIndex - 1] || null;
  const prevPost = allPosts[currentIndex + 1] || null;

  const router = useRouter();

  const customMeta = {
    title: post.title,
    description: post.description,
    date: new Date(post.date).toISOString(),
    author: 'DevDuck',
  };

  const data = {
    title: post.title,
    text: post.description,
    url: `https://duck-blog-v2-duck-98.vercel.app${router.asPath}`,
  };

  const handleShare = async () => {
    const result = await share(data);
    if (result === 'copiedToClipboard') {
      alert('링크를 클립보드에 복사했습니다.');
    } else if (result === 'failed') {
      alert('공유하기가 지원되지 않는 환경입니다.');
    }
  };

  return (
    <Div>
      <ScrollProgressBar />
      <HeadMeta
        title={customMeta.title}
        description={customMeta.description}
        author={customMeta.author}
      />
      <h1>{post!.title}</h1>
      <MDXComponent mdx={post!.body.code} />
      <div className="btn-con">
        <Button onClick={handleShare}>
          <Icon />
        </Button>
      </div>
      <Comments />
      <div className="navigation">
        {prevPost && (
          <LinkButton href={`/blog/${prevPost._raw.flattenedPath}`}>
            <span className="subject">이전 포스트</span>
            <div>{prevPost.title}</div>
          </LinkButton>
        )}
        {nextPost && (
          <LinkButton href={`/blog/${nextPost._raw.flattenedPath}`}>
            <span className="subject">다음 포스트</span>
            <div>{nextPost.title}</div>
          </LinkButton>
        )}
      </div>
    </Div>
  );
};

export const getStaticPaths = async () => {
  return {
    paths: allPosts.map((p) => ({ params: { slug: p._raw.flattenedPath } })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const sortedPosts = allPosts.sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return dateB - dateA; // 날짜 내림차순 정렬
  });

  const post = allPosts.find((p) => p._raw.flattenedPath === params.slug);
  const currentIndex = sortedPosts.findIndex((p) => p._raw.flattenedPath === params.slug);

  return {
    props: {
      post,
      allPosts,
      currentIndex,
    },
  };
};

const Div = styled.div`
  margin-top: 2.5rem;
  h1 {
    font-family: 'NanumSquare';
    font-weight: 800;
    font-size: 30px;
    color: rgb(3 105 161);
    padding: 20px;
  }
  .btn-con {
    display: flex;
    justify-content: flex-end;
  }
  .navigation {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    margin-top: 1rem;
  }
`;

const Icon = styled(FaShareAlt)`
  width: 1.2rem;
  height: 1.2rem;
`;

const Button = styled.button`
  color: ${({ theme }: { theme: any }) => theme.textColor};
  font-size: 1rem;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  transition: background-color 0.3s; /* 효과가 부드럽게 적용되도록 트랜지션 추가 */

  &:active {
    background-color: lightgray; /* 클릭 시 배경색을 변경할 적절한 색상으로 설정 */
  }
`;

const LinkButton = styled(Link)`
  font-family: 'NanumSquare';
  font-weight: 600;
  font-size: 1rem;
  background-color: ${({ theme }: { theme: any }) => theme.grayColor};
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  padding: 1rem;
  div {
    font-size: 1rem;
    line-height: 150%;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-word;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .subject {
    color: rgb(142, 143, 151);
    margin-bottom: 0.5rem;
  }
`;

export default Post;
