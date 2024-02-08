import { subSpells } from './spells';

export const spellsDamageResult = (randomSpell: string): number => {
  const spellStartRegex = new RegExp(/fe/g);
  const spellEndRegex = new RegExp(/ai/g);
  const spellComboRegex = new RegExp(/(fe+(([\w])?)+ai)/);

  const spellStart = randomSpell.match(spellStartRegex);
  const spellEnd = randomSpell.match(spellEndRegex);
  const spellCombo = randomSpell.match(spellComboRegex);

  let damage = 0;

  if (!spellStart || !spellEnd || spellStart.length > 1 || !spellCombo) {
    return 0;
  } else {
    const spell = spellCombo[0];

    let goodSpell = spell.substring(2, spell.length - 2);
    damage += 3;

    const calculateSpellDamage = (subSpell: string, damagePoints: number) => {
      const spellMatches = goodSpell.match(subSpell);
      if (spellMatches) {
        goodSpell = goodSpell.replace(subSpell, '');
        damage += damagePoints * spellMatches.length;
      }
    };

    subSpells.forEach((subSpell) =>
      calculateSpellDamage(subSpell.name, subSpell.damage),
    );

    damage -= goodSpell.length;

    damage < 0 ? (damage = 0) : damage;

    return damage;
  }
};
