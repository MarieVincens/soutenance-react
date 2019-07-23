import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

class ScrawlyEdit extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="bg-blue">
                    <h1>New Scrawl</h1>
                </section>

                <section className="container form-new">

                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" value={this.props.scrawl.title} disabled />
                        <ul>
                            <li>12 January 2020</li>
                            <li>13 January 2020</li>
                            <li>19 January 2020</li>
                        </ul>
                        <form>
                            <input type="date" value={this.props.scrawl.choices}/>
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