'use client';

import { LoadingProvider, useLoading } from '~/contexts/LoadingContext';
import StarParticlesContainer from '~/components/StarParticlesContainer';
import { NextPage } from 'next';

const LandingPageContent: React.FC = () => {
  const { isLoading } = useLoading();

  return (
    <LoadingProvider>
      <StarParticlesContainer>
        {isLoading ? (
          <div className='loading'>Loading...</div>
        ) : (
          <main className='pt-48 flex flex-col items-center min-h-screen '>
            <h1 className='preload-text preload-first-text font-sans'>
              HELLO, MY NAME IS
            </h1>
            <h1
              className='preload-text preload-second-text font-sans'
              data-text='TAYLOR ALLEN.'
            >
              TAYLOR ALLEN.
            </h1>
          </main>
        )}
      </StarParticlesContainer>
    </LoadingProvider>
  );
};

const LandingPage: NextPage = () => {
  return (
    <LoadingProvider>
      <LandingPageContent />
    </LoadingProvider>
  );
};

export default LandingPage;
