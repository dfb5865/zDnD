import { LOAD_PARTY_DATA } from '../actions/party';

const initialState = {
    partyData: {}
};

let mockPartyData = {
    partyName: 'the three amigos',
    members: [
        {
            name: 'thann',
            race: 'dwarf',
            subRace: 'hill dwarf',
            class: 'cleric',
            health: 11,
            armorClass: 14
        },
        {
            name: 'grimmer',
            race: 'half-orc',
            subRace: 'unknown',
            class: 'paladin',
            health: 14,
            armorClass: 18
        },
        {
            name: 'batzorig',
            race: 'half-orc',
            subRace: 'unknown',
            class: 'barbarian',
            health: 12,
            armorClass: 20
        },
    ]
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_PARTY_DATA:
            return {
                ...state,
                partyData: mockPartyData
            };
        default:
            return state;
    }
}
