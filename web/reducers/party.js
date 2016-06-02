import { SET_SELECTED_CHARACTER,
        ADD_PARTY_MEMBER } from '../actions/party';

const initialState = {
    characters: [],
    selectedCharacter: {}
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SET_SELECTED_CHARACTER:
            return {
                ...state,
                selectedCharacter: action.character
            };
        case ADD_PARTY_MEMBER:
            return {
                ...state,
                characters: [...state.characters, action.character]
            };
        default:
            return state;
    }
}
