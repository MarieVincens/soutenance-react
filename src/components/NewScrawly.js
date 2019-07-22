import React, {Component} from 'react';
import slugme from "slugme";



class NewScrawly extends Component {
    constructor(props) {
        super(props);
        this.state={

        }

    }

    handleSubmit(event) {
        this.props.add({
            title: this.state.title,
            slug: this.state.result,
            created_at: new Date().getDate()
        });
    }


    render() {

        const result = slugme(this.props.scrawl.title);

        return (
                <section className="container form-new">
                    <form onSubmit={event => this.handleSubmit(event)}>
                        <div>
                            <label htmlFor="title">Titre</label>
                            <input type="text" id="title" value={this.props.scrawl.title} onChange={event => this.props.updateTitle(event.target.value)} placeholder="Scrawl Title"/>
                        </div>
                        <div>
                            <label htmlFor="slug">Slug</label>
                            <input type="text" id="slug" value={this.props.scrawl.slug} onChange={event => this.props.updateSlug(event.target.value)} placeholder="Slug"/>
                        </div>
                        <button type="submit" className="button button-primary">
                            <i className="fa fa-arrow-right"/>
                            Create and add new dates
                        </button>
                    </form>
                </section>
        );
    }
}

export default NewScrawly;