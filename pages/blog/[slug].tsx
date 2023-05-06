import React, { useEffect } from 'react';
import Comments from 'components/Comments';
import { allPosts } from 'contentlayer/generated';
import { InferGetStaticPropsType } from 'next';
import styled from 'styled-components';
import MDXComponent from 'components/atoms/MDXComponent';
import share from '~/utils/share';
import { useRouter } from 'next/router';
import { FiShare } from 'react-icons/fi';

const Post = ({ post }: InferGetStaticPropsType<typeof getStaticProps>) => {
  // const MDXComponent = useMDXComponent(post.body.code);
  const router = useRouter();

  const customMeta = {
    title: post.title,
    description: post.description,
    date: new Date(post.date).toISOString(),
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
      <h1>{post!.title}</h1>
      <MDXComponent mdx={post!.body.code} />
      <div className="btn-con">
        <Button onClick={handleShare}>
          <Icon /> 공유
        </Button>
      </div>

      <Comments />
    </Div>
    //{' '}
  );
};

export const getStaticPaths = async () => {
  return {
    paths: allPosts.map((p) => ({ params: { slug: p._raw.flattenedPath } })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const post = allPosts.find((p) => p._raw.flattenedPath === params.slug);
  return {
    props: {
      post,
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

export default Post;
