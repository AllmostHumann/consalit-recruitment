import { MouseEventHandler } from 'react';
import MagicWandIcon from '../../assets/images/magicWand.svg?react';

interface RandomSpellButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export const RandomSpellButton: React.FC<RandomSpellButtonProps> = ({
  onClick,
}) => {
  return (
    <div className='my-2 grid place-items-center'>
      <button
        className='w-60 rounded-md border-[1px] border-solid border-black bg-white p-1 font-semibold text-black'
        onClick={onClick}
      >
        <div className='flex flex-row justify-center gap-2 p-2'>
          <p> Cast random spell</p>
          <MagicWandIcon className='h-6 w-6' />
        </div>
      </button>
    </div>
  );
};
``;
