import React, {Component} from 'react';
import './style.css';
import Musician from "../Musician";

export const MusicListItem = ({datas, date}) => {
    return (
        <li className={"MusicListItem"}>

            <div className = {'date'}> {date}</div>
            {
                datas.map(({ isActive}, i)=><Musician key = {i}
                                                           isActive = {isActive}/>)
            }
        </li>
    );
};