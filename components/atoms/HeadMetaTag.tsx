import Head from 'next/head';

interface HeadMetaProps {
  title: string;
  description: string;
  children?: React.ReactNode;
  author?: string;
}

export default function HeadMeta({ title, description, author, children }: HeadMetaProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta content={description} name="description" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={author} />
      <meta property="og:image" content="https://duck-blog-v2-duck-98.vercel.app/dev.jpg" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {children}
    </Head>
  );
}
