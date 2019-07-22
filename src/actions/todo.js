export const SCRAWLY_ADD = 'SCRAWLY_ADD';
export const SCRAWLY_REMOVE = 'SCRAWLY_REMOVE';

export function scrawlyAdd(scrawly) {
    return{
        type: SCRAWLY_ADD,
        payload: scrawly
    }

}

export function scrawlyRemove(scrawly) {
    return{
        type: SCRAWLY_REMOVE,
        payload: scrawly
    }

}