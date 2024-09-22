import React from 'react';
import { useEffect, useState } from 'react';
import './CardContainer.css';
import { useSelector, useDispatch } from 'react-redux';
import CardView from './card/CardView';
import Quill from '../../../assets/quill.png';
import { handleModalToggle, addData, handleModalCreation } from '../../modal/modalSlice.js';


//Place Card Component Here
function CardContinerView() {
    const dispatch = useDispatch();
    const selectedTag = useSelector((state) => state.sidebar.selectedTag);
    const sidebarShow = useSelector((state) => state.sidebar.sidebarShow);
    const searchText = useSelector((state) => state.navbar.searchText);
    const cardArray = useSelector((state) => state.cardContainer.cardArray);
    const searchArray = useSelector((state) => state.cardContainer.searchArray);
    const tagArray = useSelector((state) => state.cardContainer.tagArray);
    const [displayArray, setDisplayArray] = useState([...cardArray]);
    const maxminWidth = `${sidebarShow ? 'CardContainer-Box-min' : 'CardContainer-Box-max'}`;

    useEffect(() => {
        setDisplayArray([...cardArray]);
    }, [cardArray]);


    useEffect(() => {
        if (searchText.length == 0) {
            setDisplayArray([...cardArray]);
        }
        if (searchText.length > 0) {
            setDisplayArray([]);
            const filteredCards = cardArray.filter(card => {
                const lowercaseSearchText = searchText.toLowerCase();
                const lowercaseTitle = card.title.toLowerCase();
                return lowercaseTitle.includes(lowercaseSearchText);
            });
            if (filteredCards.length > 0 && searchText.length != 0) {
                setDisplayArray(filteredCards);
            }
        }
    }, [searchText]);

    useEffect(() => {
        let filteredTagCards = [];
        if (selectedTag === "All") {
            filteredTagCards = [...cardArray];
        } else {
            filteredTagCards = cardArray.filter(card => card.location === selectedTag);
        }
        setDisplayArray(filteredTagCards);
    }, [selectedTag]);

    const handleAddCardClick = () => {
        dispatch(handleModalCreation());
        dispatch(handleModalToggle());
        // dispatch(addData({ id, title, description, tag }));
    };


    return (
        <div className={ maxminWidth }>
            {/* <div className="SingleCard QuillDiv" onClick={ handleAddCardClick }>
                <img className="QuillImg" src={ Quill } />
            </div> */}
            { displayArray.map((ele) => {
                return (
                    <CardView key={ ele.key } id={ ele.key } title={ ele.title } description={ ele.description } tag={ ele.tag } />
                );
            }) }
        </div>
    );
}

export default CardContinerView;