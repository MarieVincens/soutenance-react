import {connect} from "react-redux";
import {updateTitle, updateSlug} from "../actions/scrawly";
import NewScrawly from "../components/NewScrawly";


// Envoyer des données du state au composant
const mapStateToProps = state => {
    return {
        scrawl: state.scrawly.scrawl
    }
};

const mapDispatchToProps = dispatch => ({
    updateSlug: slug => dispatch(updateSlug(slug)),
    updateTitle: title => dispatch(updateTitle(title))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewScrawly)