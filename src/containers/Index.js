import {connect} from "react-redux";
import {updateSlug, searchScrawl} from "../actions/scrawly";
import Index from "../components/Index";


// Envoyer des données du state au composant
const mapStateToProps = state => {
    return {
        slug: state.scrawly.scrawl.slug,
        id:state.scrawly.scrawl["@id"]
    }
};

// Envoyer des actions au composant
const mapDispatchToProps = dispatch => ({
    update: slug => dispatch(updateSlug(slug)),
    search: slug=> dispatch(searchScrawl(slug))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Index)