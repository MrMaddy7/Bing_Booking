import React from 'react';
import './Card.css';
import { useSelector, useDispatch } from 'react-redux';
import { handleModalToggle, addData } from '../../../modal/modalSlice';

function CardView({ id }) {
    const dispatch = useDispatch();
    
    // Get the card data from the Redux store
    const card = useSelector((state) => 
        state.cardContainer.cardArray.find(card => card.key === id)
    );

    const handleSingleCardClick = () => {
        dispatch(handleModalToggle());
        dispatch(addData({ id, title: card.title, time: card.time, location: card.location }));
    };

    // If the card is not found, return null or some placeholder
    if (!card) return null;

    return (
        <div className="SingleCard" onClick={handleSingleCardClick}>
            <img src={card.img} alt={card.title} />
            <h2>{card.title}</h2>
            <p>⏰{card.time}</p>
            <p>📍{card.location}</p>
        </div>
    );
}

export default CardView;