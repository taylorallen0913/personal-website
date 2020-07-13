import ReactMarkdown from 'react-markdown';

const Blog = (): JSX.Element => {
  const input = '# This is a header\n\nAnd this is a paragraph';

  return (
    <div className="container blog-container">
      <ReactMarkdown source={input} />
      <h1>Blog</h1>
    </div>
  );
};

export default Blog;
