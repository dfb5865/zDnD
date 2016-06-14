import { LOAD_CHARACTERS } from '../actions/search';

const initialState = {
    characters: []
};

let thann =
{
    id: 1,
    name: 'Thann',
    playerName: 'Dave',
    alignment: 'Lawful Good',

    race: 'Dwarf',
    subRace: 'Hill Dwarf',

    class: 'Cleric',
    subClass: 'Life Domain',

    level: 2,
    experience: 768,

    armorClass: 18,
    initiative: 20,
    speed: 25,

    currentHitPoints: 14,
    maxHitPoints: 14,
    temporaryHitPoints: 0,

    proficiencyBonus: 2,
    strength: 14,
    dexterity: 8,
    constitution: 15,
    intelligence: 10,
    wisdom: 16,
    charisma: 12,

    proficiencies: [
    ],
    attacks: [
    ],
    spells: [
    ],
    cantrips: [
    ],
    inventory: [
    ]
};

let grimmer =
{
    id: 2,
    name: 'Grimmer',
    playerName: 'Jared',
    alignment: 'Chaotic Good',

    race: 'Orc',
    subRace: 'Half Orc',

    class: 'Paladin',
    subClass: 'Lightbringer',

    level: 2,
    experience: 867,

    armorClass: 15,
    initiative: 2,
    speed: 25,

    currentHitPoints: 19,
    maxHitPoints: 20,
    temporaryHitPoints: 1,

    proficiencyBonus: 1,
    strength: 13,
    dexterity: 10,
    constitution: 16,
    intelligence: 9,
    wisdom: 9,
    charisma: 15,

    proficiencies: [
    ],
    attacks: [
    ],
    spells: [
    ],
    cantrips: [
    ],
    inventory: [
    ]
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

