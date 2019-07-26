import {connect} from "react-redux";
import Scrawly from "../components/Scrawly";


// Envoyer des données du state au composant
const mapStateToProps = state => {
    return {
        scrawl: state.scrawly.scrawl
    }
};

export default connect(
    mapStateToProps,
)(Scrawly)