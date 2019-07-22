import {connect} from "react-redux";
import {updateSlug} from "../actions/scrawly";
import Index from "../components/Index";


// Envoyer des données du state au composant
const mapStateToProps = state => {
    console.log(state)
    return {
        slug: state.scrawly.scrawl.slug
    }
};

// Envoyer des actions au composant
const mapDispatchToProps = dispatch => ({
    update: slug => dispatch(updateSlug(slug))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Index)