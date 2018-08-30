import React from 'react';
import './Article.css';
import mensItems from './images/mens-items.jpeg';

const Article = (props) => {
    console.log(mensItems);
    return(
        <div className='article'>
            {props.name}<br/> 
            Color: {props.color}<br/>
            img: {props.img} <br/>
            <img src={mensItems} alt='Mens Items'/>
        </div>
    );
}

export default Article;