import React, { ReactNode } from 'react';
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
        options={{
          preset: 'stars',
          particles: {
            number: { value: 120 },
            size: { value: { min: 1, max: 1 } },
          },
        }}
        init={customInit}
      />
      {children}
    </>
  );
};

export default StarParticlesContainer;
