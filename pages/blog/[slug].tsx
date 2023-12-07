import React, { useEffect } from 'react';
import Comments from 'components/Comments';
import { allPosts } from 'contentlayer/generated';
import { InferGetStaticPropsType } from 'next';
import styled from 'styled-components';
import MDXComponent from 'components/atoms/MDXComponent';
import share from '~/utils/share';
import { useRouter } from 'next/router';
import { FiShare } from 'react-icons/fi';
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
    console.log(result);
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
          <Icon /> 공유
        </Button>
      </div>
      <Comments />
      <div className="navigation">
        {prevPost && (
          <LinkButton href={`/blog/${prevPost._raw.flattenedPath}`}>
            <span>&lt; 이전 포스트</span>
            {/* {prevPost.title} */}
          </LinkButton>
        )}
        {nextPost && (
          <LinkButton href={`/blog/${nextPost._raw.flattenedPath}`}>
            <span>다음 포스트 &gt;</span>
            {/* {nextPost.title}  */}
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
    display: flex;
    justify-content: space-between;
    padding: 1rem;
  }
`;

const Icon = styled(FiShare)`
  width: 3rem;
  height: 3rem;
`;

const Button = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }: { theme: any }) => theme.textColor};
  font-size: 1rem;
  width: 4rem;
  height: 4rem;
  border: none;
  cursor: pointer;
`;

const LinkButton = styled(Link)`
  color: ${({ theme }: { theme: any }) => theme.textColor};
  font-size: 1rem;
  cursor: pointer;
`;

export default Post;
