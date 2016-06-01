import { LOAD_PARTY_DATA } from '../actions/party';

const initialState = {
    partyId: 0,
    partyName: '',
    partyMembers: [],
    selectedPartyMember: {}
};

let partyMembers = [
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
    },
    {
        id: 2,
        name: 'Grimmer',
        race: 'Humanoid',
        alignment: 'Neutral Good',
        subRace: 'Half Orc',
        class: 'Paladin',
        level: 2,
        currentHealth: 16,
        totalHealth: 16,
        armorClass: 20,
        proficiencies: [
        ],
        combatActions: [
            {
                actionId: 1,
                actionName: 'Attack'
            }
        ],
        equipedArmor: [
            {
                itemId: 3,
                itemName: 'Chain Mail'
            }
        ],
        availableArmor: [
        ],
        equipedWeapons: [
        ],
        availableWeapons: [
        ],
        spellSlots: 0,
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
        ]
    },
    {
        id: 3,
        name: 'Batzorig',
        race: 'Humanoid',
        alignment: 'Chaotic Neutral',
        subRace: 'Orc',
        class: 'Barbarian',
        level: 1,
        currentHealth: 13,
        totalHealth: 13,
        armorClass: 19,
        proficiencies: [
        ],
        actions: [
            {
                actionId: 1,
                actionName: 'Attack'
            }
        ],
        equipedArmor: [
        ],
        availableArmor: [
        ],
        equipedWeapons: [
        ],
        availableWeapons: [
        ],
        spellSlots: 0,
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
        ]
    },
    {
        id: 4,
        name: 'Jon',
        race: 'Humanoid',
        alignment: 'Chaotic Evil',
        subRace: 'Orc',
        class: 'Cleric',
        level: 1,
        currentHealth: 11,
        totalHealth: 11,
        armorClass: 13,
        proficiencies: [
        ],
        actions: [
            {
                actionId: 1,
                actionName: 'Attack'
            }
        ],
        equipedArmor: [
        ],
        availableArmor: [
        ],
        equipedWeapons: [
        ],
        availableWeapons: [
        ],
        spellSlots: 2,
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
        ]
    },
    {
        id: 5,
        name: 'Sammy',
        race: 'Humanoid',
        alignment: 'Lawful Neutral',
        subRace: 'Gnome',
        class: 'Druid',
        level: 1,
        currentHealth: 12,
        totalHealth: 12,
        armorClass: 10,
        proficiencies: [
        ],
        actions: [
            {
                actionId: 1,
                actionName: 'Attack'
            }
        ],
        equipedArmor: [
        ],
        availableArmor: [
        ],
        equipedWeapons: [
        ],
        availableWeapons: [
        ],
        spellSlots: 2,
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
        ]
    }
];

let mockState = {
    partyId: 1,
    partyName: 'The Three Amigos',
    partyMembers: partyMembers,
    SelectedPartyMember: partyMembers[0]
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_PARTY_DATA:
            return mockState;
        default:
            return state;
    }
}
