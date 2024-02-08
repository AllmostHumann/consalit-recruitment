import { spellsDamageResult } from '../Spells/spellsDamage';
import { RandomSpellButton } from '../../components/Buttons/RandomSpellButton';
import { PowerFullMage } from '../../components/PowerfullMage/PowerFullMage';
import { spells } from '../Spells/spells';
import { PowerFullMagesWrapper } from '../../components/PowerfullMagesWrapper/PowerfullMagesWrapper';
import { DebounceInput } from 'react-debounce-input';
import { useEffect, useState } from 'react';

export const BattleMage = () => {
  const [randomSpell, setRandomSpell] = useState<string>('Getting Mana');
  const [value, setValue] = useState<string>('');

  const castRandomSpell = () => {
    const randomSpell = Math.floor(Math.random() * spells.length);
    const spell = spells[randomSpell];
    setRandomSpell(spell!);
    setValue('');
  };

  useEffect(() => {
    if (value) {
      setRandomSpell('Casting COMBO');
    }
  }, [value]);

  return (
    <>
      <div className='flex flex-col justify-center gap-2'>
        <form className='mt-5 flex flex-row place-items-center justify-center gap-3'>
          <DebounceInput
            name='spellInput'
            type='text'
            placeholder='Cast custom spell'
            className='w-60 rounded-md border-[1px] border-solid border-black bg-white p-1 font-semibold text-black placeholder:pl-2'
            debounceTimeout={300}
            value={value}
            onChange={(event) => setValue(event.target.value)}
          />
        </form>
        <RandomSpellButton onClick={() => castRandomSpell()} />
      </div>
      <PowerFullMagesWrapper>
        <PowerFullMage
          text={'Spell damage'}
          children={spellsDamageResult(value || randomSpell!)}
        />
        <PowerFullMage
          text={'Spell'}
          children={randomSpell}
        />
      </PowerFullMagesWrapper>
    </>
  );
};
