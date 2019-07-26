import {connect} from "react-redux";
import {addChoice, updateChoice} from "../actions/scrawly";
import ScrawlyEdit from "../components/ScrawlyEdit";



// Envoyer des données du state au composant
const mapStateToProps = state => {
    return {
        scrawl: state.scrawly.scrawl,
        choice: state.scrawly.scrawl.choice,
        poll:state.scrawly.scrawl["@id"],
    }
};

// Envoyer des actions au composant
const mapDispatchToProps = dispatch => ({
    addChoice: choice => dispatch(addChoice(choice)),
    updateChoice: choice => dispatch(updateChoice(choice))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ScrawlyEdit)