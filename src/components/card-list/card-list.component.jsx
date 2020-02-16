import React from 'react';
import './card-list.styles.css';
import { Card } from '../card/card.component';

export const CardList = props => {
    return <div className='card-list'>{ 
        props.monsters.filter(m => m.name.includes(props.searchField)).map(monster => <Card monster={monster}></Card>)
    }</div>;
};