import BlogCard from '../../components/BlogCard';
import Layout from '../../components/Layout';
import fs from 'fs';
import readingTime from 'reading-time';
import matter from 'gray-matter';
import path from 'path';
import { toDate } from '../../utils/parseDate';
import { BlogPost } from '../../interfaces';

interface Props {
  blogPosts: BlogPost[];
}

const Blog = ({ blogPosts }: Props): JSX.Element => {
  return (
    <Layout>
      <div className="blog-container">
        {blogPosts.map((post: BlogPost) => (
          <BlogCard
            title={post.title}
            date={post.date}
            id={post.id}
            readingTime={post.readingTime}
            description={post.description}
            img={post.img}
          />
        ))}
      </div>
    </Layout>
  );
};

interface StaticProps {
  props: {
    blogPosts: BlogPost[];
  };
}

export const getStaticProps = async (): Promise<StaticProps> => {
  const files = fs.readdirSync('blog');

  const blogPosts = files.map((fileName): any => {
    const filePath = path.join('blog', fileName);
    const fileContents = fs.readFileSync(filePath).toString();
    const metaData = matter(fileContents).data;

    return { ...metaData, readingTime: readingTime(fileContents).text };
  });

  const sortedBlogPosts = blogPosts.sort(
    (post1, post2) =>
      toDate(post2.date).getTime() - toDate(post1.date).getTime(),
  );

  return {
    props: { blogPosts: sortedBlogPosts },
  };
};

export default Blog;
