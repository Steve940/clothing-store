import React from 'react';
import Article from '../components/article';
import './DisplayCase.css';
import { articles } from '../components/articles';
const DisplayCase = () => {
    return(
        <div className='displayCase'>Display Case
            <Article id={articles[0].id} name={articles[0].name} color={articles[0].color} img={articles[0].img}/>
            <Article id={articles[1].id} name={articles[1].name} color={articles[1].color} img={articles[1].img}/>
            <Article id={articles[2].id} name={articles[2].name} color={articles[2].color} img={articles[2].img}/>      
        </div>
    )
}

export default DisplayCase;