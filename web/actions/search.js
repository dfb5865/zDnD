import { push } from 'react-router-redux';
export const LOAD_CHARACTERS = 'LOAD_CHARACTERS';

import { addAndSelectPartyMember } from './party';

export function loadCharacters() {
    return {
        type: LOAD_CHARACTERS
    };
}

export function selectCharacter(character) {
    return (dispatch) => dispatch(addAndSelectPartyMember(character)).then(dispatch(push('/')));
}
