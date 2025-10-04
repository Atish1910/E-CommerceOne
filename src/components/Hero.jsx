import React from 'react';
import { useContext } from 'react';
import { Storege } from '../store/Context-api';

const Hero = () => {
      const { HeroImg } = useContext(Storege);
    return (
        <>
            <section><img src={HeroImg} className="hero" alt="" /></section>
        </>
    );
};

export default Hero;