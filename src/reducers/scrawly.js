import { UPDATE_SLUG, UPDATE_TITLE } from '../actions/scrawly';



const initialState = {
    scrawl: {
        title: '',
        slug: ''
    }
};

function scrawlyApp(state = initialState, action) {
    switch (action.type) {
        case UPDATE_SLUG:
            let newSlug = Object.assign({}, state);
            newSlug.scrawl.slug = action.payload;
            return newSlug;
        case UPDATE_TITLE:
            let newTitle = Object.assign({}, state);
            newTitle.scrawl.title = action.payload;
            return newTitle;
        default:
            return state;
    }
}

export default scrawlyApp;