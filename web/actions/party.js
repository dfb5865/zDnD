export const LOAD_PARTY_DATA = 'LOAD_PARTY_DATA';
export const SET_SELECTED_PARTY_MEMBER = 'SET_SELECTED_PARTY_MEMBER';

export function loadPartyData(partyId) {
    return {
        type: LOAD_PARTY_DATA,
        partyId: partyId
    };
}

export function setSelectedPartyMember(partyMember) {
    return {
        type: SET_SELECTED_PARTY_MEMBER,
        selectedPartyMember: partyMember
    };
}
