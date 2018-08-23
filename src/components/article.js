import React from 'react';
import './article.css';

const Article = (props) => {
    return(
        <div className='article'>
        Article of clothing ({props.type})
        </div>
    );
}

export default Article;