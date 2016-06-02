import { LOAD_CHARACTERS } from '../actions/search';

const initialState = {
    characters: []
};

let thann =
{
    id: 1,
    name: 'Thann',
    race: 'Dwarf',
    alignment: 'Lawful Good',
    subRace: 'Hill Dwarf',
    class: 'Cleric',
    subClass: 'Life Domain',
    level: 2,
    currentHealth: 14,
    totalHealth: 14,
    armorClass: 18,
    speed: 25,
    proficiencyBonus: 2,
    proficiencies: [
    ],
    armorType: 'Chain Mail',
    equipedWeapons: [
    ],
    spellSlots: 3,
    equipedSpells: [
    ],
    availableSpells: [
    ],
    cantrips: [
    ],
    strength: 14,
    strengthBonus: 2,
    dexterity: 8,
    dexterityBonus: -1,
    constiution: 15,
    constiutionBonus: 2,
    intellect: 10,
    intellectBonus: 0,
    wisdom: 16,
    wisdomBonus: 3,
    charisma: 12,
    charismaBonus: 1,
    inventory: [
    ],
    racialAbilities: [
    ],
    classAbilities: [
    ]
};

let grimmer =
{
    id: 2,
    name: 'Grimmer',
    race: 'Orc',
    alignment: 'Lawful Neutral',
    subRace: 'Half Orc',
    class: 'Paladin',
    subClass: 'Healer',
    level: 2,
    currentHealth: 18,
    totalHealth: 18,
    armorClass: 20,
    speed: 25
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_CHARACTERS:
            return {
                ...state,
                characters: [thann, grimmer]
            };
        default:
            return state;
    }
}

