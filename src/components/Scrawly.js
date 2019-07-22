import React, {Component} from 'react';

class Scrawly extends Component {

    constructor(props) {
        super(props);
        this.state={
            poll: null,
        };

    }

    componentDidMount() {
        fetch(process.env.REACT_APP_API + 'polls/' + this.props.match.params.id)
            .then(response => response.json())
            .then(data => this.setState({ poll: data["hydra:member"]}))
    }




    render() {

        const {poll} = this.state;
        return (
            <React.Fragment>
                <h1>{poll.title}</h1>
            </React.Fragment>
        )
    }
}

export default Scrawly;