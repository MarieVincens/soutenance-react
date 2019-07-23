import {
    UPDATE_SLUG,
    UPDATE_TITLE,
    SEARCH_SCRAWL_ERROR,
    SEARCH_SCRAWL_SUCCESS
} from '../actions/scrawly';
import slugme from "slugme";



const initialState = {
    scrawl: {
        title: '',
        slug: '',
    },
    error: ""
};

function scrawlyApp(state = initialState, action) {
    switch (action.type) {
        case UPDATE_SLUG:
            return {
                ...state,
                scrawl: { ...state.scrawl, slug: slugme(action.payload) }
            };
        case UPDATE_TITLE:
            return {
                ...state,
                scrawl: { ...state.scrawl, title: action.payload, slug: slugme(action.payload) }
            };
        case SEARCH_SCRAWL_SUCCESS:
            return{
                ...state,
                scrawl: action.payload
            };
        case SEARCH_SCRAWL_ERROR:
            return {
                ...state,
                error: "Scrawl Introuvable"
            };
        default:
            return state;
    }
}

export default scrawlyApp;