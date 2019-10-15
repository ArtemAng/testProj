import React from 'react';
import img from './a.jpg';
import './style.css';
export const Menu = ()=>{
    return (
        <div className={'Left-block'}>
            <ul className="Menu ">
                <li className="List-item Calendar-item">Календарь</li>
                <li className="List-item Musitions-item">Музыканты</li>
                <li className="List-item Settings-item">Настройки</li>
            </ul>
            <img src = {img} className = {'Logo'}/>
            
        </div>

    )
};