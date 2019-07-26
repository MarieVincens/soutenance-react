import React, {Component} from 'react';
import md5 from "md5";



class Persons extends Component {
    render() {
        let fullname = this.props.scrawl.person.username;
        let email = this.props.scrawl.person.email;
        let gravatar = 'https://www.gravatar.com/avatar/' + md5(email) + '?s=32';
        return (
            <td>
                <div className="user-container">
                    <img src={gravatar} alt="Avatar"/>
                    <span>{fullname}</span>
                </div>
            </td>
        );
    }
}

export default Persons;