import React from 'react';
import {NavLink} from "react-router-dom";

function NewScrawly(props) {
    return (
        <section className="container form-new">
            <form>
                <div>
                    <label htmlFor="title">Titre</label>
                    <input type="text" id="title" value={props.scrawl.title} onChange={event => props.updateTitle(event.target.value)} placeholder="Scrawl Title"/>
                </div>
                <div>
                    <label htmlFor="slug">Slug</label>
                    <input type="text" id="slug" value={props.scrawl.slug} onChange={event => props.updateSlug(event.target.value)} placeholder="Slug"/>
                </div>
                <NavLink to='/scrawly/edit' type="submit" className="button button-primary">
                    <i className="fa fa-arrow-right"/>
                    Create and add new dates
                </NavLink>
            </form>
        </section>
    );
}

export default NewScrawly;