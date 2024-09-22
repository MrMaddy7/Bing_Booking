import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import DpLogo from '../../../assets/DP_Logo.png';
import BurgerMenuSide from '../../../assets/WandSide.png';
import BurgerMenuDown from '../../../assets/WandDown.png';
import SettingsWheel from '../../../assets/Settings.png';
import UserWheel from '../../../assets/User.png';
import { handleSideBarToggle, resetSelectedTag } from '../sidebar/sidebarSlice.js';
import { handleSearchText } from './navbarSlice.js';
import { handleOnBlur } from '../cardContainer/cardContainerSlice';

import "./Navbar.css";

function NavbarView() {

  const sidebarShow = useSelector((state) => state.sidebar.sidebarShow);
  const burgerImage = sidebarShow ? BurgerMenuSide : BurgerMenuDown;
  const dispatch = useDispatch();

  return <nav className="NavbarView">

    <div className="nav-1">
      <img className="burger-menu" src={ burgerImage } onClick={ () => dispatch(handleSideBarToggle()) } />
    </div>
    <div className="nav-2">
      <img className="logo" src={ DpLogo } />
      <h1>B-Happening</h1>
      <input onBlur={ () => dispatch(handleOnBlur()) } onChange={ (e) => {
        dispatch(resetSelectedTag());
        dispatch(handleSearchText(e.target.value));
      } } className="input-search" placeholder="Search..."></input>
    </div>
    <div className="nav-3">
      <ul>
        <li className="setting-wheel"><img src={ SettingsWheel } /></li>
        <li className="user-wheel" ><img src={ UserWheel } /></li>
      </ul>
    </div>
  </nav>;
}

export default NavbarView;
