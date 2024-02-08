import { PropsWithChildren } from 'react';

export const Container: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <main className='mx-auto w-full max-w-6xl border-b-2 border-b-stone-700 px-4 pt-1 text-left leading-normal md:px-5 md:pt-2'>
      {children}
    </main>
  );
};
