import {connect} from "react-redux";
import {updateTitle, updateSlug, createScrawl} from "../actions/scrawly";
import NewScrawly from "../components/NewScrawly";


// Envoyer des données du state au composant
const mapStateToProps = state => {
    return {
        scrawl: state.scrawly.scrawl,
        id:state.scrawly.scrawl["@id"],
        loading: state.scrawly.createScrawlLoading
    }
};

const mapDispatchToProps = dispatch => ({
    updateSlug: slug => dispatch(updateSlug(slug)),
    updateTitle: title => dispatch(updateTitle(title)),
    createScrawl: scrawl => dispatch(createScrawl(scrawl))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewScrawly)