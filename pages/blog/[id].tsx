import ReactMarkdown from 'react-markdown';
import Layout from '../../components/Layout';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import { parseDate } from '../../utils/parseDate';

const BlogPost = ({ data, content }): JSX.Element => {
  const date = parseDate(data.date);
  const stats = readingTime(content);

  return (
    <Layout>
      <div className="blog-post-container">
        <div className="blog-post-header">
          <h1 className="blog-post-title">{data.title}</h1>
          <p className="blog-post-subtitle">
            {date}
            <a className="blog-post-subtitle-spacing">|</a>
            {stats.text}
          </p>
        </div>
        <div className="blog-post-content">
          <ReactMarkdown source={content} />
        </div>
      </div>
    </Layout>
  );
};

export const getStaticPaths = async (): Promise<any> => {
  const files = fs.readdirSync('blog');

  const paths = files.map((fileName) => ({
    params: {
      id: fileName.replace('.md', ''),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }): Promise<any> => {
  const markdownWithMetadata = fs
    .readFileSync(path.join('blog', `${params.id}.md`))
    .toString();

  const parsedMarkdown = matter(markdownWithMetadata);

  return {
    props: {
      data: parsedMarkdown.data,
      content: parsedMarkdown.content,
    },
  };
};

export default BlogPost;
