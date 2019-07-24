export const POLL_ADD = 'POLL_ADD';
export const POLL_REMOVE = 'POLL_REMOVE';
export const UPDATE_SLUG = 'UPDATE_SLUG';
export const UPDATE_TITLE = 'UPDATE_TITLE';
export const ADD_CHOICE = "ADD_CHOICE";
export const ADD_CHOICE_SUCCESS = "ADD_CHOICE_SUCCESS";
export const ADD_CHOICE_ERROR = "ADD_CHOICE_ERROR ";
export const SEARCH_SCRAWL_SUCCESS = 'SEARCH_SCRAWL_SUCCESS';
export const SEARCH_SCRAWL_ERROR = 'SEARCH_SCRAWL_ERROR';
export const CREATE_SCRAWL_SUCCESS = 'CREATE_SCRAWL_SUCCESS';
export const CREATE_SCRAWL_LOADING = 'CREATE_SCRAWL_LOADING';
export const CREATE_SCRAWL_ERROR = 'CREATE_SCRAWL_ERROR';

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

export function createScrawl(scrawl) {

    return dispatch =>{
        dispatch(createScrawlLoading());
        fetch( process.env.REACT_APP_API + 'polls', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(scrawl)
        })
            .then(response=>response.json())
            .then(data=>{
                if (data["hydra:member"]!== "hydra:Error") {
                    dispatch(createScrawlSuccess(data))
                }else{
                    dispatch(createScrawlError());
                }
            })
    }
}

export function createScrawlSuccess(scrawl) {

    return {
        type: CREATE_SCRAWL_SUCCESS,
        payload: scrawl
    }

}

export function createScrawlError() {

    return {
        type: CREATE_SCRAWL_ERROR,
    }

}

export function createScrawlLoading() {

    return {
        type: CREATE_SCRAWL_LOADING,
    }

}

export function addChoice(choice) {

    return dispatch =>{
        fetch( process.env.REACT_APP_API + 'choices', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(choice)
        })
            .then(response=>response.json())
            .then(data=>{
                if (data["hydra:member"]!== "hydra:Error") {
                    dispatch(addChoiceSuccess(data))
                }else{
                    dispatch(addChoiceError());
                }
            })
    }
}

export function addChoiceSuccess(choice) {

    return {
        type: ADD_CHOICE_SUCCESS,
        payload: choice
    }

}

export function addChoiceError() {

    return {
        type: ADD_CHOICE_ERROR,
    }

}
