import React from 'react';
import NavbarView from "./navbar/NavbarView";
import SidebarView from "./sidebar/SidebarView";
import FooterView from "./footer/FooterView";
import CardContinerView from "./cardContainer/CardContainerView";
import { useSelector } from 'react-redux';
import './Dashboard.css';

function DashboardView() {
    const showModal = useSelector((state) => state.modal.modalShow); //Boolean
    const DashboardClass = `${showModal ? 'modal-overlay' : ''}`;
    return (
        <div className={ DashboardClass }>
            <NavbarView />
            <SidebarView />
            <CardContinerView />
            <FooterView />
        </div>
    );
}

export default DashboardView;