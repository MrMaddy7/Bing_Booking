import { configureStore } from '@reduxjs/toolkit';
// import reduxLogger from 'redux-logger';
import sidebarSlice from '../features/dashBoard/sidebar/sidebarSlice';
import modalSlice from '../features/modal/modalSlice';
import navbarSlice from '../features/dashBoard/navbar/navbarSlice';
import cardContainerSlice from '../features/dashBoard/cardContainer/cardContainerSlice';

// const logger = reduxLogger.createLogger();

const store = configureStore({
    reducer: {
        sidebar: sidebarSlice,
        modal: modalSlice,
        navbar: navbarSlice,
        cardContainer: cardContainerSlice

    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});

export default store;

