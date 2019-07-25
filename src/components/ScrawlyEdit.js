import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

class ScrawlyEdit extends Component {

    handleSubmit(event){
        event.preventDefault();
        this.props.addChoice(
            {
            date: this.props.scrawl.choice,
            poll: this.props.scrawl["@id"]
        });
        console.log(this.props.scrawl["@id"])
    }

    render() {
        //const date = this.state.scrawl.map((scrawl, key) => <li key={key}>
            //{scrawl.choices.date}
        //</li>);
        console.log(this.props.scrawl);
        return (
            <React.Fragment>
                <section className="bg-blue">
                    <h1>New Scrawl</h1>
                </section>

                <section className="container form-new">

                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" value={this.props.scrawl.title} disabled />
                        <ul>
                            <li>Bonjour</li>
                        </ul>
                        <form onSubmit={event=> this.handleSubmit(event)}>
                            <input type="date" value={this.props.scrawl.choice} onChange={event => this.props.updateChoice(event.target.value)}/>
                                <button type="submit" className="button button-primary">
                                    <i className="fa fa-plus"/>
                                    Add
                                </button>
                        </form>
                        <NavLink to='/' className="button button-primary">
                            <i className="fa fa-check"/>
                            Finish
                        </NavLink>

                </section>
                
            </React.Fragment>
        );
    }
}

export default ScrawlyEdit;