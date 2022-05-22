import React from 'react'
import PropTypes from 'prop-types'

const Rating = ({value, text, color}) => {
  return (

   
    <div className='rating'>
        <span>
            <i style={{color: color}} 
                className={
                value >= 1 
                ? 'fa-solid fa-star' 
                : value >= 0.5 
                ? 'fa-regular fa-star-half-stroke'
                : 'fa-regular fa-star'
            }
                > 
            </i>
        </span>

        <span>
            <i style={{color: color}} 
                className={
                value >= 2 
                ? 'fa-solid fa-star' 
                : value >= 1.5 
                ? 'fa-regular fa-star-half-stroke'
                : 'fa-solid fa-star'
            }
                > 
            </i>
        </span>
        <span>
            <i style={{color: color}} 
                className={
                value >= 3 
                ? 'fa-solid fa-star' 
                : value >= 2.5 
                ? 'fa-regular fa-star-half-stroke'
                : 'fa-solid fa-star'
            }
                > 
            </i>
        </span>
        <span>
            <i style={{color: color}} 
                className={
                value >= 4 
                ? 'fa-solid fa-star' 
                : value >= 3.5 
                ? 'fa-regular fa-star-half-stroke'
                : 'fa-solid fa-star'
            }
                > 
            </i>
        </span>
        <span>
            <i style={{color: color}} 
                className={
                value >= 5 
                ? 'fa-solid fa-star' 
                : value >= 4.5 
                ? 'fa-regular fa-star-half-stroke'
                : 'fa-solid fa-star'
            }
                > 
            </i>
        </span>
       

            <span>{text && text}</span>

    </div>
   
  )
}

// Default color de dia likhne ki need nahi hoi
Rating.defaultProps = {
    color: '#f8e825'
}

// Props mai strict condition laga din
Rating.propTypes = {
    value : PropTypes.number.isRequired,
    text : PropTypes.string.isRequired,
    color : PropTypes.string.isRequired,
}

export default Rating