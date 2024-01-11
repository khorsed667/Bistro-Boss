import React from 'react';
import Banner from '../Banner/Banner';
import SwiperItems from '../Swiper/SwiperItems';
import About from '../About/About';
import Menu from '../Menu/Menu';
import Contact from '../Contact/Contact';
import Recommand from '../Recommand/Recommand';
import Feature from '../Feature/Feature';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <SwiperItems></SwiperItems>
            <About></About>
            <Menu></Menu>
            <Contact></Contact>
            <Recommand></Recommand>
            <Feature></Feature>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;