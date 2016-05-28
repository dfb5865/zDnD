export const PARTY_ID_ENTERED = 'PARTY_ID_ENTERED';

export function partyIdEntered(id) {
    return {
        type: PARTY_ID_ENTERED,
        partyId: id
    };
}
