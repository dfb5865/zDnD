import { push } from 'react-router-redux';

export const PARTY_ID_ENTERED = 'PARTY_ID_ENTERED';

function partyIdEntered(id) {
    return {
        type: PARTY_ID_ENTERED,
        partyId: id
    };
}

export function loadPartyPage(id) {
    return (dispatch) => {
        Promise.resolve(true).then(dispatch(() => partyIdEntered(id))).then(dispatch(push('/party')));
    };
}
