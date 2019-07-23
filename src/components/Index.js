import React, {Component} from 'react';
import {NavLink, Redirect} from "react-router-dom";

class Index extends Component {

    handleSubmit(event){
        event.preventDefault();
        this.props.search(this.props.slug)
    }
    render() {
        if (this.props.id){
            return <Redirect to={"/scrawly/" + this.props.slug}/>

        }
        return (
            <section className="homepage bg-blue">
                <h1>Scrawly</h1>
                <form onSubmit={event => this.handleSubmit(event)}>
                    <input type="text" value={this.props.slug} onChange={event => this.props.update(event.target.value)} placeholder="Scrawl slug"/>
                    <input type="submit" value="GO!"/>
                </form>

                <NavLink to="/scrawly/new" className="btn">
                    <i className="fa fa-plus"/>
                    Create a new Scrawl
                </NavLink>
            </section>
        );
    }
}

export default Index;