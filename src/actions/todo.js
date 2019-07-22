export const POLL_ADD = 'POLL_ADD';
export const POLL_REMOVE = 'POLL_REMOVE';

export function pollAdd(poll) {
    return{
        type: POLL_ADD,
        payload: poll
    }

}

export function pollRemove(poll) {
    return{
        type: POLL_REMOVE,
        payload: poll
    }

}