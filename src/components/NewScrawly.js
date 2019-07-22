import React, {Component} from 'react';

class NewScrawly extends Component {
    constructor(props) {
        super(props);
        this.state={
            poll:{
                title: "",
                slug:"",
                creates_at:"",
            }
        }

    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.add({
            title: this.state.title,
            slug: this.state.slug,
            created_at: this.state.created_at
        });
        this.setState({ value: "" });
    }


    render() {
        return (
            <div>
                <form onSubmit={event => this.handleSubmit(event)}>
                    <div>
                        <label htmlFor="title">Titre</label>
                        <input type="text" id="title" placeholder="Scrawl Title"/>
                    </div>
                    <div>
                        <label htmlFor="slug">Slug</label>
                        <input type="text" id="slug" placeholder="Scrawl slug"/>
                    </div>
                    <button type="submit" className="button button-primary">
                        <i className="fa fa-arrow-right"/>
                        Create and add new dates
                    </button>
                </form>

                
            </div>
        );
    }
}

export default NewScrawly;