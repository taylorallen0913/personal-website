'use client';

import StarParticlesContainer from '~/components/StarParticlesContainer';
import { NextPage } from 'next';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import gsap from 'gsap';
import styles from '~/styles/landing.module.css';

const LandingPage: NextPage = () => {
  const [loading, setLoading] = useState<boolean>(true);

  const loadingTextRef = useRef<HTMLDivElement>(null);
  const postloadFirstTextRef = useRef<HTMLDivElement>(null);
  const postloadSecondTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  });

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Constantly move text to left
      gsap.to(loadingTextRef.current, {
        x: '-=600',
        duration: 1.7,
        ease: 'none',
      });
      // Fade text out
      gsap.to(loadingTextRef.current, {
        opacity: 0,
        duration: 1,
        delay: 1,
      });
    }, loadingTextRef);

    return () => ctx.revert();
  }, []);

  if (loading) {
    return (
      <div
        ref={loadingTextRef}
        className='flex justify-center items-center h-screen whitespace-nowrap pb-32'
      >
        {Array.from({ length: 8 }).map((_, i: number) => {
          const textStyles = clsx(
            styles.loadingText,
            i % 2 === 0 && styles.loadingTextOutlined
          );
          return (
            <div
              key={i}
              className='flex flex-row px-5 space-x-3 whitespace-nowrap'
            >
              <span className={textStyles}>TAYLOR</span>
              <span className={textStyles}> - </span>
              <span className={textStyles}>MMXXIII</span>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <StarParticlesContainer>
      <main className='pt-48 flex flex-col items-center min-h-screen'>
        <div ref={postloadTextFirstLineRef}></div>
        <h1
          className={clsx(
            styles.postloadText,
            styles.postloadFirstText,
            'font-sans tracking-widest'
          )}
        >
          HELLO! MY NAME IS
        </h1>
        <h1
          className={clsx(
            styles.postloadText,
            styles.postloadSecondText,
            'font-sans tracking-widest'
          )}
          data-text='TAYLOR ALLEN.'
        >
          TAYLOR ALLEN.
        </h1>
      </main>
    </StarParticlesContainer>
  );
};

export default LandingPage;
