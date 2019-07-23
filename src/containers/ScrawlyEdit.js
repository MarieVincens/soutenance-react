import {connect} from "react-redux";
import {pollAdd} from "../actions/scrawly";
import ScrawlyEdit from "../components/ScrawlyEdit";



// Envoyer des données du state au composant
const mapStateToProps = state => {
    return {
        scrawl: state.scrawly.scrawl
    }
};

// Envoyer des actions au composant
const mapDispatchToProps = dispatch => ({
    add: poll => dispatch(pollAdd(poll))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ScrawlyEdit)