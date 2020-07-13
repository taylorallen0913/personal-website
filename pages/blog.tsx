import { useRouter } from 'next/router';
import ReactMarkdown from 'react-markdown';
import Layout from '../components/Layout';

const Blog = (): JSX.Element => {
  const router = useRouter();
  const { pid } = router.query;

  console.log(pid);

  const input = '# This is a header\n\nAnd this is a paragraph Catch';

  return (
    <Layout>
      <div className="container blog-container">
        <ReactMarkdown source={input} />
        <h1>Blog</h1>
      </div>
    </Layout>
  );
};

Blog.getStaticProps = async () => {
  return null;
};

export default Blog;
