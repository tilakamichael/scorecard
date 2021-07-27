import React from 'react'
import PropTypes from 'prop-types'

const Button = ({color, text, onClick}) => {
    return <button 
    onClick={onClick}
    style={{backgroundColor: color, marginRight: '10px'}} 
    className='btn'
    >
        {text}
    </button>

}

Button.defaultProps = { 
    color: '#4E6659',
    
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,

}

export default Button