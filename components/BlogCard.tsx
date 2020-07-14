import Link from 'next/link';
import useTheme from '../hooks/useTheme';

const BlogCard = () => {
  const theme = useTheme();

  return (
    <Link href="/">
      <div
        className={
          theme === 'dark'
            ? 'card shadow p-3 mb-5 rounded blog-card-dark'
            : 'card shadow p-3 mb-5 rounded blog-card'
        }
      >
        <div className="row">
          <div className="col-3 blog-img">
            <img src="/react.png" className="card-img-top" alt="react logo" />
          </div>
          <div className="col">
            <div className="card-body">
              <h2 className="card-title">Hello world</h2>
              <span className="blog-card-subtext">
                Jun 13, 2020 · 1 min read
              </span>

              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.gin gojiekqeji ofjiefij qesafijej
                ieaij
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
