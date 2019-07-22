import {connect} from "react-redux";
import {itemAdd} from "../actions/todo";
import FormNewItem from "../components/NewScrawly";


// Envoyer des données du state au composant
const mapStateToProps = state => {
    return {}
};

// Envoyer des actions au composant
const mapDispatchToProps = dispatch => ({
    add: item => dispatch(itemAdd(item))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewScrawly)