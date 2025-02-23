import React, {Component} from 'react';
import './style.css';
import Calendar from 'react-calendar';

export default class MyCalendar extends Component {
    state = {
        date: new Date(),
    };
    onChange = date => this.setState({ date });
    render() {
        return (
            <div className={'Right-block'}>
                <Calendar
                    className={'Calendar'}
                    onChange={this.onChange}
                    value={this.state.date}
                />
            </div>
        );
    }
}