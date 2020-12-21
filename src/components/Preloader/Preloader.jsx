import React from 'react'
import preloader from '../../assets/img/30.gif'

const Preloader = (props) => {
    return (
        <div>
            <div style={{backgroundColor: 'black'}}>
        <img src={preloader} /> 
        </div>
        </div>
    )
}

export default Preloader