import Layout from '../components/Layout';
import TerminalHeader from '../components/TerminalHeader';
import useTheme from '../hooks/useTheme';

const Home = (): JSX.Element => {
  const theme = useTheme();

  return (
    <Layout>
      <div className="home-container" style={{ marginBottom: '50%' }}>
        <h1 className="header">
          Hi, I'm Taylor. I'm a full stack software engineer and full-time
          learner
        </h1>
        <p
          className={
            theme === 'dark' ? 'header-description-dark' : 'header-description'
          }
        >
          I enjoy building complex, scalable software infastructures and
          contributing to open source.
        </p>

        <TerminalHeader text="whoami" />
      </div>
    </Layout>
  );
};

export default Home;
