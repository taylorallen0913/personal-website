import Layout from '../components/Layout';
import useTheme from '../hooks/useTheme';

const Home = (): JSX.Element => {
  const theme = useTheme();

  return (
    <Layout>
      <div className="container">
        <h1 className="header">
          Taylor Allen, fullstack software engineer and full-time learner
        </h1>
        <p
          className={
            theme === 'dark' ? 'header-description-dark' : 'header-description'
          }
        >
          I enjoy experimenting with different tech stacks and contributing to
          open source projects.
        </p>
      </div>
    </Layout>
  );
};

export default Home;
