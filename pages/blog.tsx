import BlogCard from '../components/BlogCard';
import Layout from '../components/Layout';

const Blog = (): JSX.Element => {
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

export default Blog;
