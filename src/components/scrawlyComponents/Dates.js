import React, {Component} from 'react';




class Dates extends Component {

    render() {
        const choiceDate = new Date(this.props.choice.date);
        const month    = choiceDate.toLocaleDateString('en-EN',{ month: 'short' });
        const day    = choiceDate.toLocaleDateString('en-EN',{ day: '2-digit' });
        const dayname = choiceDate.toLocaleDateString('en-EN',{ weekday: 'long'});

        return (
            <th>
                <div className="date-container">
                    <div className="month">{month}</div>
                    <div className="date">{day}</div>
                    <div className="day">{dayname}</div>
                </div>
            </th>
        );
    }
}

export default Dates;