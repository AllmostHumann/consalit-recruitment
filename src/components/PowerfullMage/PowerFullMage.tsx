import MageIcon from '../../assets/images/mage.svg?react';
// import FireIcon from '../../assets/images/fire.svg?react';

interface PowerFullMageProps {
  text: string;
  children: number | string;
}

export const PowerFullMage: React.FC<PowerFullMageProps> = ({
  children,
  text,
}) => {
  const mageRenderReaction = () => {
    if (typeof children === 'number') {
      if (children === 17) {
        return 'FATALITY!';
      }
      if (children > 4 && children < 17) {
        return 'WOW!';
      }
      if (children < 4 && children > 0) {
        return 'Meh';
      }
      return '';
    }
  };

  const childernClass =
    typeof children === 'number' && children > 0
      ? 'font-bold text-red-700'
      : '';

  const mageIconClass = `${text === 'Spell' ? 'scale-x-[-1] transform' : ''} ${typeof children === 'number' && children > 0 ? 'animate-shake bg-fire-background' : ''}`;

  return (
    <div className='flex flex-col'>
      <p className='mb-2 grid place-items-center text-[20px] font-semibold text-black'>
        {text}
      </p>
      <div className='flex flex-row justify-center'>
        <p
          className={`mb-2 grid place-items-center px-3 text-[30px] font-semibold text-black ${childernClass}`}
        >
          {children}
        </p>
        <p
          className={`mb-2 grid place-items-center px-3 text-[30px] font-semibold text-black ${childernClass}`}
        >
          {mageRenderReaction()}
        </p>
      </div>
      <MageIcon className={`mx-28 mt-5 h-auto w-[300px] ${mageIconClass}`} />
    </div>
  );
};
