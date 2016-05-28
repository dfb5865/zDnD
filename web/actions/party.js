export const LOAD_PARTY_DATA = 'LOAD_PARTY_DATA';

export function loadPartyData(partyId) {
    return {
        type: LOAD_PARTY_DATA,
        partyId: partyId
    };
}
