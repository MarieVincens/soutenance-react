import {
    UPDATE_SLUG,
    UPDATE_TITLE,
    SEARCH_SCRAWL_ERROR,
    SEARCH_SCRAWL_SUCCESS,
    CREATE_SCRAWL_LOADING,
    CREATE_SCRAWL_SUCCESS,
    CREATE_SCRAWL_ERROR,
    ADD_CHOICE_SUCCESS,
    ADD_CHOICE_ERROR,
    UPDATE_CHOICE
} from '../actions/scrawly';
import slugme from "slugme";



const initialState = {
    scrawl: {
        title: '',
        slug: '',
    },
    error: "",
    createScrawlLoading: false
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
        case UPDATE_CHOICE:
            return{
                ...state,
                scrawl:{...state, choice: action.payload}
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
        case CREATE_SCRAWL_LOADING:
            return {...state, createScrawlLoading:true};
        case CREATE_SCRAWL_SUCCESS:
            return {
            ...state,
            scrawl: action.payload,
            createScrawlLoading: false
        };
        case CREATE_SCRAWL_ERROR:
            return {
                ...state,
                error:"Erreur lors de la création",
                createScrawlLoading: false
            };
        case ADD_CHOICE_SUCCESS:
            return{
                ...state,
                choice: action.payload
            };
        case ADD_CHOICE_ERROR:
            return {
                ...state,
                error:"Impossible d'ajouter la date"
            };
        default:
            return state;
    }
}

export default scrawlyApp;