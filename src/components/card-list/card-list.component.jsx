import React from 'react';
import './card-list.styles.css';
import { Card } from '../card/card.component';

export const CardList = props => {
    return <div className='card-list'>{ 
        props.monsters.filter(m => m.name.toLowerCase().includes(props.searchField.toLowerCase())).map(monster => <Card monster={monster}></Card>)
    }</div>;
};