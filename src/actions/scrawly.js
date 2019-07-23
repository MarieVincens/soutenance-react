export const POLL_ADD = 'POLL_ADD';
export const POLL_REMOVE = 'POLL_REMOVE';
export const UPDATE_SLUG = 'UPDATE_SLUG';
export const UPDATE_TITLE = 'UPDATE_TITLE';
export const ADD_CHOICE = "ADD_CHOICE";
export const SEARCH_SCRAWL_SUCCESS = 'SEARCH_SCRAWL_SUCCESS';
export const SEARCH_SCRAWL_ERROR = 'SEARCH_SCRAWL_ERROR';

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

export function addChoice(choice) {
    return{
        type: ADD_CHOICE,
        payload: choice
    }

}

export function searchScrawl(slug) {

    return dispatch =>{
        fetch( process.env.REACT_APP_API + 'polls?slug=' + slug)
            .then(response=>response.json())
            .then(data=>{
                if (data["hydra:member"].length>0) {
                    dispatch(searchScrawlSuccess(data["hydra:member"][0]))
                }else{
                    dispatch(searchScrawlError());
                }
            })
    }

}

export function searchScrawlSuccess(scrawl) {
    return{
        type: SEARCH_SCRAWL_SUCCESS,
        payload: scrawl
    }

}

export function searchScrawlError() {
    return{
        type: SEARCH_SCRAWL_ERROR,
        payload: null
    }

}