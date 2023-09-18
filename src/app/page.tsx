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
  const [finishedIntro, setFinishedIntro] = useState<boolean>(false);
  const [startedIntroAnimation, setStartedIntroAnimation] =
    useState<boolean>(false);

  const loadingTextRef = useRef<HTMLDivElement>(null);
  const postLoadTextRef = useRef<HTMLDivElement>(null);
  const landingPageTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  useLayoutEffect(() => {
    if (finishedIntro) {
      let ctx = gsap.context(() => {
        const landingFirstText = new SplitType('#landing-text-1', {
          types: 'lines, words',
          lineClass: 'line',
        });
        const landingSecondText = new SplitType('#landing-text-2', {
          types: 'lines, words',
          lineClass: 'line',
        });
        const landingFirstWords = landingFirstText.words;
        const landingSecondWords = landingSecondText.words;

        gsap.from(landingFirstWords, {
          duration: 0.8,
          opacity: 0,
          yPercent: 120,
          ease: 'power',
          stagger: 0.05,
          delay: 1,
        });

        gsap.from(landingSecondWords, {
          duration: 0.8,
          opacity: 0,
          yPercent: 120,
          ease: 'power',
          stagger: 0.05,
          delay: 1.2,
        });
      }, landingPageTextRef);

      return () => ctx.revert();
    }

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
  }, [loading, finishedIntro]);

  function expandButton() {
    setStartedIntroAnimation(true);
    gsap
      .to('.continue-button-animation', {
        duration: 0.4,
        width: '100vw',
        height: '100vh',
        bottom: '-200px',
        left: '0px',
        borderRadius: 0,
      })
      .then(() => {
        setFinishedIntro(true);
      });
  }

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

  if (finishedIntro) {
    return (
      <main className='w-screen h-screen bg-[#D1E2F1] flex flex-col'>
        <div className='px-10 mt-8 flex justify-between'>
          <h1 className='text-black text-xl font-sans'>TAYLOR ALLEN</h1>
          <h1 className='text-black text-xl font-sans'>MENU</h1>
        </div>
        <div className='mt-64 space-y-8 ml-44'>
          <h1 className='space-x-4' id='landing-text-1'>
            <span className='font-sans italic text-black text-5xl'>
              innovation
            </span>
            <span className='font-sans text-black text-8xl'>THROUGH CODE;</span>
          </h1>
          <h1 className='space-x-4 ml-20' id='landing-text-2'>
            <span className='font-sans italic text-black text-5xl'>
              artistry
            </span>
            <span className='font-sans text-black text-8xl'>
              THROUGH DESIGN.
            </span>
          </h1>
        </div>

        <div className='absolute left-1/2 -translate-x-1/2 bottom-10 opacity-1'>
          <div className='relative inline-block'>
            <h1 className='font-sans text-black text-3xl'>
              Discover the Art of Modern Engineering.
            </h1>
          </div>
        </div>
      </main>
    );
  }

  return (
    <CustomCursorContextProvider>
      <CustomCursor />
      <StarParticlesContainer>
        <main className='pt-48 flex flex-col items-center min-h-screen'>
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
              <div
                className={clsx(
                  styles.continueButton,
                  'font-sans px-4 py-6 rounded-lg continue-button-animation'
                )}
                onClick={expandButton}
              >
                {!startedIntroAnimation && 'Continue'}
              </div>
            </div>
          </div>
        </main>
      </StarParticlesContainer>
    </CustomCursorContextProvider>
  );
};

export default LandingPage;
