import { spellsDamageResult } from '../Spells/spellsDamage';
import { RandomSpellButton } from '../../components/Buttons/RandomSpellButton';
import { PowerFullMage } from '../../components/PowerfullMage/PowerFullMage';
import { spells } from '../Spells/spells';
import { useState } from 'react';
import { PowerFullMagesWrapper } from '../../components/PowerfullMagesWrapper/PowerfullMagesWrapper';

export const BattleMage = () => {
  const [randomSpell, setRandomSpell] = useState<string>('Getting Mana');

  const castRandomSpell = () => {
    const randomSpell = Math.floor(Math.random() * spells.length);
    const spell = spells[randomSpell];
    setRandomSpell(spell!);
  };

  return (
    <>
      <RandomSpellButton onClick={() => castRandomSpell()} />
      <PowerFullMagesWrapper>
        <PowerFullMage
          text={'Spell damage'}
          children={spellsDamageResult(randomSpell!)}
        />
        <PowerFullMage
          text={'Spell'}
          children={randomSpell}
        />
      </PowerFullMagesWrapper>
    </>
  );
};
