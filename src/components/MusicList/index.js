import React from 'react';
import {MusicListItem} from "../MusicListItem";
import './style.css'

export const MusicList = ({data}) =>{
    return (
        <ul className={'List Content'}>
            <div>{data[0].name}</div>
            <MusicListItem datas={data} date={new Date().toString().split(' ').map((item,i)=>i<3? item:'').join(' ')}/>
            <MusicListItem datas={data} date={new Date().toString().split(' ').map((item,i)=>i<3? item:'').join(' ')}/>
            <MusicListItem datas={data} date={new Date().toString().split(' ').map((item,i)=>i<3? item:'').join(' ')}/>
            <MusicListItem datas={data} date={new Date().toString().split(' ').map((item,i)=>i<3? item:'').join(' ')}/>
        </ul>
    );
};