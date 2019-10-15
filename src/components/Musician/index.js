import React, {Component} from 'react';
import img from "./a.png";
import './style.css';

export default class Musician extends Component {

    //warning! govnocode later
    //Переписать на redux или хотя бы поднять state
    state = {
        isActive: true
    }
    handleActive = () => {
        this.setState(prevState=>({isActive: !prevState.isActive}));
    }

    componentDidMount(){
        this.setState(()=>({isActive: this.props.isActive}))
    }
    //govnocode end
    
    render() {
        const classN = this.state.isActive ? 'Musician active' : 'Musician'
       return(
           <div className={classN} onClick = {this.handleActive}>
               <div className="name">{this.props.name}</div>
               <img src={img} alt={"avatar"} className={"avatar"}/>
           </div>
       );
    }
}