import React, {Component} from 'react';
import slugme from "slugme";



class NewScrawly extends Component {
    constructor(props) {
        super(props);
        this.state={
            poll:{
                title: "",
                slug:"",
                created_at:"",
            }
        }

    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event) {
        this.props.add({
            title: this.state.title,
            slug: this.state.slug,
            created_at: new Date().getDate()
        });
    }


    render() {

        const result = slugme(this.state.title);

        return (
            <div>
                <form onSubmit={event => this.handleSubmit(event)}>
                    <div>
                        <label htmlFor="title">Titre</label>
                        <input type="text" id="title" value={this.state.title} onChange={event => this.handleChange(event)} placeholder="Scrawl Title"/>
                    </div>
                    <div>
                        <label htmlFor="slug">Slug</label>
                        <input type="text" id="slug" value={this.state.result}>{result}</input>
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