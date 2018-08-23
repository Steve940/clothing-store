import React from 'react';
import Article from '../components/Article';
import './DisplayCase.css';

const DisplayCase = () => {
    return(
        <div className='displayCase'>Display Case
            <Article type='shirt'/>
            <Article type='pants'/>
            <Article type='shoes'/>  
            <Article type='shirt'/>
            <Article type='pants'/>
            <Article type='shoes'/>  
            <Article type='shirt'/>
            <Article type='pants'/>
            <Article type='shoes'/>  
            <Article type='shirt'/>
            <Article type='pants'/>
            <Article type='shoes'/>  
            <Article type='shirt'/>
            <Article type='pants'/>
            <Article type='shoes'/>  
            <Article type='shirt'/>
            <Article type='pants'/>
            <Article type='shoes'/>            
        </div>
    )
}

export default DisplayCase;