import { PARTY_ID_ENTERED } from '../actions/app';

const initialState = {
    partyId: ''
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case PARTY_ID_ENTERED:
            return {
                ...state,
                partyId: action.partyId
            };
        default:
            return state;
    }
}
