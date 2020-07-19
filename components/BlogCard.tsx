import Link from 'next/link';
import useTheme from '../hooks/useTheme';
import { parseDate } from '../utils/parseDate';
import { BlogPost } from '../interfaces';

const BlogCard = ({
  title,
  date,
  readingTime,
  description,
  id,
  img,
}: BlogPost): JSX.Element => {
  const theme = useTheme();

  return (
    <Link href={`/blog/${id}`}>
      <div
        className={
          theme === 'dark'
            ? 'card shadow p-3 mb-5 rounded blog-card-dark'
            : 'card shadow p-3 mb-5 rounded blog-card'
        }
      >
        <div className="row">
          <div className="col-4 blog-img">
            <img src={`/${img}`} className="card-img-top" alt="react logo" />
          </div>
          <div className="col">
            <div className="card-body">
              <h2 className="card-title">{title}</h2>
              <span className="blog-card-subtext">
                {parseDate(date)} · {readingTime}
              </span>

              <p className="card-text">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
