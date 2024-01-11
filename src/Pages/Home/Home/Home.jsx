import React from 'react';
import Banner from '../Banner/Banner';
import SwiperItems from '../Swiper/SwiperItems';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Recommand from '../Recommand/Recommand';
import Feature from '../Feature/Feature';
import Testimonial from '../Testimonial/Testimonial';
import { Helmet } from 'react-helmet';
import PopularMenu from '../PopularMenu/PopularMenu';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home | Bistro Boss</title>
            </Helmet>
            <Banner></Banner>
            <SwiperItems></SwiperItems>
            <About></About>
            <PopularMenu></PopularMenu>
            <Contact></Contact>
            <Recommand></Recommand>
            <Feature></Feature>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;