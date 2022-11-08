import React from 'react';
import Services from '../../Shared/Services';
import Banner from '../Banner/Banner';
import HomeOwner from './HomeOwner';
import HomeSection from './HomeSection';
import HomeSectionAdd from './HomeSectionAdd';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <HomeSection></HomeSection>
            <HomeOwner></HomeOwner>
            <HomeSectionAdd></HomeSectionAdd>
        </div>
    );
};

export default Home;