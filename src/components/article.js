import React from 'react';
import './article.css';

const Article = (props) => {
    return(
        <div className='article'>
            {props.name}<br/> 
            Color: {props.color}<br/>
             img: {props.img} <br/>
            <img src='/components/images/pants.png' alt={props.name}/>
        </div>
    );
}

export default Article;