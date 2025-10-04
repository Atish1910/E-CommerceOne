import React from 'react';
import { useContext } from 'react';
import { Storege } from '../store/Context-api';

const HeroCategory = ({category}) => {
    const {aboutBg} = useContext(Storege);
    return (
        <>
        <section
            className="container-fluid breadcrumb-section d-flex align-items-center justify-content-center"
                    style={{backgroundImage: `linear-gradient(rgba(176,48,96,0.65), rgba(176,48,96,0.65)), url(${aboutBg})`,}}
            >
            <h2 className="text-center fw-bold text-white display-5 text-uppercase ">
                {category}
            </h2>
        </section>   
        </>
    );
};

export default HeroCategory;