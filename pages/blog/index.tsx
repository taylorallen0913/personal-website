import BlogCard from '../../components/BlogCard';
import Layout from '../../components/Layout';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

interface BlogPosts {
  title: string;
}

interface Props {
  blogPosts: BlogPosts[];
}

const Blog = ({ blogPosts }: Props): JSX.Element => {
  console.log(blogPosts);
  return (
    <Layout>
      <div className="blog-container">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </Layout>
  );
};

interface StaticProps {
  props: {
    blogPosts: any;
  };
}

export const getStaticProps = async (): Promise<StaticProps> => {
  const files = fs.readdirSync('blog');

  const blogPosts = files.map((fileName) => {
    const filePath = path.join('blog', fileName);
    const fileContents = fs.readFileSync(filePath).toString();
    const metaData = matter(fileContents).data;

    return metaData;
  });

  return {
    props: { blogPosts },
  };
};

export default Blog;
