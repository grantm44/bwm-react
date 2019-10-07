import React from 'react';
import {Link} from 'react-router-dom';

export function RentalCard(props){
    const {title, city, dailyRate, shared, image, category, id} = props.rental;
    
    return (
        <div className={props.colNum}>
            <Link className='rental-detail-link' to={`/rentals/${id}`}>
                <div className='card bwm-card'>
                    <img className='card-img-top' src={image} alt={title}></img>
                    <div className='card-block'>
                        <h6 className={`card-subtitle ${category}`}>{shared ? 'shared' : 'whole'} {category} &#183; {city}</h6>
                        <h4 className='card-title'>{title}</h4>
                        <p className='card-text'>${dailyRate} per Night &#183; Free Cancelation</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}