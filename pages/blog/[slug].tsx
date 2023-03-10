import Comments from 'components/Comments';
import Container from 'components/Container';
import { allPosts } from 'contentlayer/generated';
import { InferGetStaticPropsType } from 'next';
import styled from 'styled-components';
import MDXComponent from 'components/atoms/MDXComponent';

const Post = ({ post }: InferGetStaticPropsType<typeof getStaticProps>) => {
  // const MDXComponent = useMDXComponent(post.body.code);

  const customMeta = {
    title: post.title,
    description: post.description,
    date: new Date(post.date).toISOString(),
  };

  return (
    // <Container customMeta={customMeta}>
    <Div>
      <h1>{post!.title}</h1>
      <MDXComponent mdx={post!.body.code} />
      <Comments />
    </Div>
    // </Container>
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
    font-size: 30px;
    color: rgb(3 105 161);
    padding: 20px;
  }
`;

export default Post;
