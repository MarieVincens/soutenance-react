export const POLL_ADD = 'POLL_ADD';
export const POLL_REMOVE = 'POLL_REMOVE';
export const UPDATE_SLUG = 'UPDATE_SLUG';
export const UPDATE_TITLE = 'UPDATE_TITLE';

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

export function updateSlug(slug) {
    return{
        type: UPDATE_SLUG,
        payload: slug
    }
}

export function updateTitle(title) {
    return{
        type: UPDATE_TITLE,
        payload: title
    }
}