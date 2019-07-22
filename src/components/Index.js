import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

class Index extends Component {
    render() {
        return (
            <section className="homepage bg-blue">
                <h1>Scrawly</h1>
                <form>
                    <input type="text" placeholder="Scrawl slug"/>
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