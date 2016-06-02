import { push } from 'react-router-redux';
export const SET_SELECTED_CHARACTER = 'SET_SELECTED_CHARACTER';
export const ADD_PARTY_MEMBER = 'ADD_PARTY_MEMBER';

export function addAndSelectPartyMember(character) {
	return (dispatch) => Promise.resolve(true).then(dispatch(addPartyMember(character))).then(dispatch(setSelectedCharacter(character)));
}

export function addPartyMember(character) {
    return {
        type: ADD_PARTY_MEMBER,
        character: character
    };
}

export function setSelectedCharacter(character) {
    return {
        type: SET_SELECTED_CHARACTER,
        character: character
    };
}

export function characterSearch() {
    return (dispatch) => dispatch(push('/search'));
}
