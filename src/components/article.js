import React from 'react';
import './Article.css';

const Article = (props) => {
    return(
        <div className='article'>
        Article of clothing ({props.type})
        </div>
    );
}

export default Article;