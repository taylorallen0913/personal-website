import React, { ReactNode, useEffect } from 'react';
import Particles from 'react-particles';
import type { Engine } from 'tsparticles-engine';
import { loadStarsPreset } from 'tsparticles-preset-stars';

interface StarParticlesContainerProps {
  children?: ReactNode;
}

const StarParticlesContainer: React.FC<StarParticlesContainerProps> = ({
  children,
}) => {
  const customInit = async (engine: Engine): Promise<void> => {
    await loadStarsPreset(engine);
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
