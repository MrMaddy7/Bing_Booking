import { createSlice } from "@reduxjs/toolkit";
import DpLogo from '../../../assets/DP_Logo.png';
import skateboard from '../../../assets/skateboard.jpg'
import pingPong from '../../../assets/pingpong.png'
import movieNight from '../../../assets/movienight.png'
import yogaClass from '../../../assets/yoga.webp'
import bookclubmeet from '../../../assets/bookclub.png'
import basketball from '../../../assets/basketball.png'
import cooking from '../../../assets/cooking class.jpg'
import poetry from '../../../assets/poetry.jpg'
import chess from '../../../assets/chess.jpg'
import kareoke from '../../../assets/karaoke.jpg'
import hike from '../../../assets/hiking.jpg'
import salsa from '../../../assets/salsa_dance.jpg'
import calculus from '../../../assets/group_study_calculus.jpg'
import Exhibition from '../../../assets/art_exibition.jpg'
import Trivia from '../../../assets/trivia_night.jpg'


const cardContainerSlice = createSlice({
    name: "cardContainer",
    initialState: {
        cardArray: [
          {
              "key": 0,
              "img": skateboard,
              "title": "Skateboarding Workshop",
              "isPinned": false,
              "time": "09:30 AM",
              "location": "East Gym"
          },
          {
              "key": 1,
              "img": pingPong,
              "title": "Ping Pong Tournament",
              "isPinned": false,
              "time": "02:15 PM",
              "location": "West Gym"
          },
          {
              "key": 2,
              "img": movieNight,
              "title": "Movie Night: Sci-Fi Marathon",
              "isPinned": false,
              "time": "11:00 AM",
              "location": "Anderson Theater"
          },
          {
              "key": 3,
              "img": yogaClass,
              "title": "Yoga Class",
              "isPinned": false,
              "time": "03:45 PM",
              "location": "East Gym"
          },
          {
              "key": 4,
              "img": bookclubmeet,
              "title": "Book Club Meeting",
              "isPinned": true,
              "time": "10:00 AM",
              "location": "Library"
          },
          {
              "key": 5,
              "img": basketball,
              "title": "Basketball Pickup Game",
              "isPinned": false,
              "time": "01:30 PM",
              "location": "West Gym"
          },
          {
              "key": 6,
              "img": cooking,
              "title": "Cooking Class: Italian Cuisine",
              "isPinned": true,
              "time": "04:00 PM",
              "location": "UDC"
          },
          {
              "key": 7,
              "img": poetry,
              "title": "Poetry Slam",
              "isPinned": false,
              "time": "06:30 PM",
              "location": "Lecture Hall"
          },
          {
              "key": 8,
              "img": chess,
              "title": "Chess Tournament",
              "isPinned": false,
              "time": "07:45 AM",
              "location": "Union"
          },
          {
              "key": 9,
              "img": kareoke,
              "title": "Karaoke Night",
              "isPinned": false,
              "time": "08:15 PM",
              "location": "C4"
          },
          {
              "key": 10,
              "img": hike,
              "title": "Hiking Expedition",
              "isPinned": true,
              "time": "12:00 PM",
              "location": "College in the Woods"
          },
          {
              "key": 11,
              "img": salsa,
              "title": "Salsa Dancing Lesson",
              "isPinned": true,
              "time": "05:30 PM",
              "location": "Union"
          },
          {
              "key": 12,
              "img": calculus,
              "title": "Study Group: Calculus",
              "isPinned": false,
              "time": "11:45 AM",
              "location": "Library"
          },
          {
              "key": 13,
              "img": Exhibition,
              "title": "Art Exhibition Opening",
              "isPinned": false,
              "time": "09:00 PM",
              "location": "Anderson Theater"
          },
          {
              "key": 14,
              "img": Trivia,
              "title": "Trivia Night",
              "isPinned": false,
              "time": "02:30 PM",
              "location": "Hinman"
          }
      ],
        searchArray: [],
        tagArray: [],
    },
    reducers: {
        handleSearchArray: (state, action) => {
            // state.searchText = action.payload;
        },
        handleOnBlur: (state) => {

        },
        handleSaveNewNote: (state, action) => {
            const newKey = state.cardArray.length;
            const tempObject = {
                key: newKey,
                title: action.payload.title,
                description: action.payload.description,
                isPinned: false,
                tag: action.payload.tag || "Personal",
            };
            console.log(tempObject, "NEw Object in the card array");
            state.cardArray.push(tempObject);

        },
        handleEditNote: (state, action) => {
            //console.log(action.payload, "This is in edit state");
            const indexToUpdate = state.cardArray.findIndex(card => card.key === action.payload.key);
            if (indexToUpdate !== -1) {
                state.cardArray[indexToUpdate] = {
                    ...action.payload
                };
            }
        },
        handleDeleteNote: (state, action) => {
            //Find the kye pop the object
            const indexToDelete = state.cardArray.findIndex(item => item.key === action.payload.key);
            if (indexToDelete !== -1) {
                state.cardArray.splice(indexToDelete, 1);
            }
        }
    }
});

export default cardContainerSlice.reducer;
export const { handleSearchArray, handleOnBlur, handleEditNote, handleSaveNewNote, handleDeleteNote } = cardContainerSlice.actions;
