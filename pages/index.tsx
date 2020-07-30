import Layout from '../components/Layout';
import TerminalHeader from '../components/TerminalHeader';
import useTheme from '../hooks/useTheme';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const Home = (): JSX.Element => {
  const [navbarHeight, setNavbarHeight] = useState<number>(null);
  const theme = useTheme();

  useEffect(() => {
    const height = document.getElementById('navbar').clientHeight;
    setNavbarHeight(height);
  }, []);

  return (
    <Layout>
      {navbarHeight && (
        <Container>
          <div
            style={{
              marginBottom: '50%',
              height: `100vw + 100px`,
              marginTop: `${navbarHeight}px`,
            }}
          >
            <h1 className="header">
              Hi, I'm Taylor. I'm a full stack software engineer and full-time
              learner
            </h1>
            <p
              className={
                theme === 'dark'
                  ? 'header-description-dark'
                  : 'header-description'
              }
            >
              I enjoy building complex, scalable software infastructures and
              contributing to open source.
            </p>
          </div>
          <TerminalHeader text="whoami" />
        </Container>
      )}
    </Layout>
  );
};

const Container = styled.div`
  width: 55%;
  margin: 6.5% 0 -6.5% 22.5%;
`;

export default Home;
