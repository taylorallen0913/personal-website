'use client';

import StarParticlesContainer from '~/components/StarParticlesContainer';
import { NextPage } from 'next';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import gsap from 'gsap';
import SplitType from 'split-type';
import styles from '~/styles/landing.module.css';
import { CustomCursorContextProvider } from '~/contexts/CustomCursorContext';
import CustomCursor from '~/components/CustomCursor.jsx';

const LandingPage: NextPage = () => {
  const [loading, setLoading] = useState<boolean>(true);

  const loadingTextRef = useRef<HTMLDivElement>(null);
  const postLoadTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  useLayoutEffect(() => {
    // Loading animations
    if (loading) {
      let ctx = gsap.context(() => {
        gsap.to(loadingTextRef.current, { opacity: 1, duration: 1.5 });

        // Constantly move text to left
        gsap.to(loadingTextRef.current, {
          x: '-=1200',
          duration: 3,
          ease: 'none',
        });
        // Fade text out
        gsap.to(loadingTextRef.current, {
          opacity: 0,
          duration: 1,
          delay: 2,
        });
      }, loadingTextRef);

      return () => ctx.revert();
    }
    // Post loading animations
    else {
      let ctx = gsap.context(() => {
        const postloadFirstText = new SplitType('#postload-first-text', {
          types: 'lines, words',
          lineClass: 'line',
        });
        const postloadSecondText = new SplitType('#postload-second-text', {
          types: 'lines, words',
          lineClass: 'line',
        });
        const postloadFirstWords = postloadFirstText.words;
        const postloadSecondWords = postloadSecondText.words;

        // Animate in post loading text
        gsap.from(postloadFirstWords, {
          duration: 0.8,
          opacity: 0,
          yPercent: 120,
          ease: 'power',
          stagger: 0.05,
        });

        gsap.from(postloadSecondWords, {
          duration: 0.8,
          opacity: 0,
          yPercent: 120,
          ease: 'power',
          stagger: 0.05,
          delay: 0.2,
        });
      }, postLoadTextRef);

      gsap.fromTo(
        '.continue-button',
        { bottom: '30px', opacity: 0 },
        { bottom: '200px', opacity: 1, delay: 1, duration: 0.5 }
      );

      return () => ctx.revert();
    }
  }, [loading]);

  if (loading) {
    return (
      <div
        ref={loadingTextRef}
        className='flex justify-center items-center h-screen whitespace-nowrap pb-32 opacity-0'
      >
        {Array.from({ length: 10 }).map((_, i: number) => {
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
    <CustomCursorContextProvider>
      <CustomCursor />
      <StarParticlesContainer>
        <main className='pt-48 flex flex-col items-center min-h-screen cusor-none'>
          <h1
            id='postload-first-text'
            className={clsx(
              styles.postloadText,
              styles.postloadFirstText,
              'font-sans tracking-widest'
            )}
          >
            HELLO! MY NAME IS
          </h1>

          <h1
            id='postload-second-text'
            className={clsx(
              styles.postloadText,
              styles.postloadSecondText,
              'font-sans tracking-widest'
            )}
            data-text='TAYLOR ALLEN.'
          >
            TAYLOR ALLEN.
          </h1>
          <div
            className={clsx(
              'absolute left-1/2 -translate-x-1/2 opacity-0 continue-button'
            )}
          >
            <div className='relative inline-block'>
              <button
                className={clsx(
                  styles.continueButton,
                  'font-sans px-4 py-6 rounded-lg'
                )}
              >
                Continue
              </button>
            </div>
            {/* <button className='py-3 px-6 border bg-black border-indigo-100 hover:bg-[#D1E2F1] hover:text-black text-[#8aaecd] text-lg rounded-2xl font-sans'>
            Continue
          </button> */}
          </div>
        </main>
      </StarParticlesContainer>
    </CustomCursorContextProvider>
  );
};

export default LandingPage;
