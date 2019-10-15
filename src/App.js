import React, {Component} from 'react';
import './App.css';
import {MusicList} from "./components/MusicList";
import {Menu} from "./components/Menu";
import MyCalendar from "./components/MyCalendar";
import axios from 'axios';


class App extends Component {
    state = {
        data: [
            {name: 'Test', isActive: false}
        ]
    };
    componentDidMount() {
       axios
            .get('https://testproject-51c05.firebaseio.com/data.json')
            .then(response => this.setState(()=>({data: response.data})));
    }

    render() {
        console.log(this.state.data);
        return (
            <div className="App">
                <Menu/>
                <MusicList data={this.state.data}/>
                <MyCalendar/>
            </div>
        );
    }
}

export default App;
