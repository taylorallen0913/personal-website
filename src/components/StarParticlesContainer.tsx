import React, { ReactNode } from 'react';
import { useLoading } from '~/contexts/LoadingContext';
import Particles from 'react-particles';
import type { Engine } from 'tsparticles-engine';
import { loadStarsPreset } from 'tsparticles-preset-stars';

interface StarParticlesContainerProps {
  children?: ReactNode;
}

const StarParticlesContainer: React.FC<StarParticlesContainerProps> = ({
  children,
}) => {
  const { setLoading } = useLoading();

  const customInit = async (engine: Engine): Promise<void> => {
    await loadStarsPreset(engine);
    setLoading(false);
  };

  return (
    <>
      <Particles
        options={{ preset: 'stars' }}
        init={customInit}
        className='overflow-y-hidden'
      />
      {children}
    </>
  );
};

export default StarParticlesContainer;
