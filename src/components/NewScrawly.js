import React, {Component}  from 'react';
import {Redirect} from "react-router";


class NewScrawly extends Component{

    handleSubmit(event){
        event.preventDefault();
        if(!this.props.loading){
            this.props.createScrawl({
            title: this.props.scrawl.title,
            slug: this.props.scrawl.slug
        });
        }

    }


    render(){

        if (this.props.id){
            return <Redirect to={"/scrawly/edit"}/>

        }
        return (
            <section className="container form-new">
                <form onSubmit={event=> this.handleSubmit(event)}>
                    <div>
                        <label htmlFor="title">Titre</label>
                        <input type="text" id="title" value={this.props.scrawl.title} onChange={event => this.props.updateTitle(event.target.value)} placeholder="Scrawl Title"/>
                    </div>
                    <div>
                        <label htmlFor="slug">Slug</label>
                        <input type="text" id="slug" value={this.props.scrawl.slug} onChange={event => this.props.updateSlug(event.target.value)} placeholder="Slug"/>
                    </div>
                    <button type="submit" className="button button-primary">
                        <i className={"fa " + (this.props.loading ? "fa-spinner fa-pulse" : "fa-arrow-right")}/>
                        Create and add new dates
                    </button>
                </form>
            </section>
        );
    }
}

export default NewScrawly;