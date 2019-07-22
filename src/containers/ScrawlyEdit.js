import {connect} from "react-redux";
import {pollAdd} from "../actions/scrawly";



// Envoyer des données du state au composant
const mapStateToProps = state => {
    return {}
};

// Envoyer des actions au composant
const mapDispatchToProps = dispatch => ({
    add: poll => dispatch(pollAdd(poll))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ScrawlyEdit)