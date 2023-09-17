import Image from 'next/image';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='mt-48 flex flex-col items-center'>
        <h1 className='preload-text preload-first-text font-sans'>
          HELLO, MY NAME IS
        </h1>
        <h1
          className='preload-text preload-second-text font-sans'
          data-text='TAYLOR ALLEN.'
        >
          TAYLOR ALLEN.
        </h1>
      </div>
    </main>
  );
}
