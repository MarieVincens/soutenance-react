import React, {Component} from 'react';
import Dates from "./scrawlyComponents/Dates";
import Persons from "./scrawlyComponents/Persons";

class Scrawly extends Component {

    render() {

        const tableDate = this.props.scrawl.choice.map(
            choice => <Dates key={choice['@id']} choice={choice} />
        );

        //const tablePerson = this.props.person.map(
            //person => <Persons key={person['@id']} person={person}/>
       // );

        return (
            <React.Fragment>
                <section className="bg-blue">
                    <h1>{this.props.scrawl.title}</h1>
                </section>
                <section className="container">
                    <table className="poll">
                        <thead>
                        <tr>
                            <th />
                            {tableDate}
                            <th />
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>
                                <div className="user-container">
                                    <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=32" alt=""/>
                                    <span>John Doe</span>
                                </div>
                            </td>
                            <td className="available"><i className="fa fa-3x fa-check-circle" /></td>
                            <td className="available"><i className="fa fa-3x fa-check-circle" /></td>
                            <td className="unavailable"><i className="fa fa-3x fa-times-circle" /></td>
                            <td className="unavailable"><i className="fa fa-3x fa-times-circle" /></td>
                            <td className="available"><i className="fa fa-3x fa-check-circle" /></td>
                            <td className="unavailable"><i className="fa fa-3x fa-times-circle" /></td>
                            <td>
                                <a href="scrawly.html">
                                    <i className="fa fa-2x fa-edit" />
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="user-container">
                                    <img src="https://www.gravatar.com/avatar/3f8389957d0c59bb0bd5433e86b53a19?s=32" alt="" />
                                    <span>Jack Fieldman</span>
                                </div>
                            </td>
                            <td className="unavailable"><i className="fa fa-3x fa-times-circle" /></td>
                            <td className="available"><i className="fa fa-3x fa-check-circle" /></td>
                            <td className="unavailable"><i className="fa fa-3x fa-times-circle" /></td>
                            <td className="available"><i className="fa fa-3x fa-check-circle" /></td>
                            <td className="unavailable"><i className="fa fa-3x fa-times-circle" /></td>
                            <td className="available"><i className="fa fa-3x fa-check-circle" /></td>
                            <td>
                                <a href="scrawly.html">
                                    <i className="fa fa-2x fa-edit" />
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="user-container">
                                    <img src="https://www.gravatar.com/avatar/7fda1da9c34e978d5990afd7f58ca0f4?s=32" alt="" />
                                    <span>Howard Thomson</span>
                                </div>
                            </td>
                            <td className="available"><i className="fa fa-3x fa-check-circle" /></td>
                            <td className="available"><i className="fa fa-3x fa-check-circle" /></td>
                            <td className="available"><i className="fa fa-3x fa-check-circle" /></td>
                            <td className="unavailable"><i className="fa fa-3x fa-times-circle" /></td>
                            <td className="available"><i className="fa fa-3x fa-check-circle" /></td>
                            <td className="available"><i className="fa fa-3x fa-check-circle" /></td>
                            <td>
                                <a href="scrawly.html">
                                    <i className="fa fa-2x fa-edit" />
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="user-form-container">
                                    <input type="email" name="email" placeholder="Email" />
                                    <input type="text" name="name" placeholder="Fullname" />
                                </div>
                            </td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <button type="submit" className="button button-primary">
                                    <i className="fa fa-2x fa-save" />
                                </button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </section>
            </React.Fragment>
        )
    }
}

export default Scrawly;