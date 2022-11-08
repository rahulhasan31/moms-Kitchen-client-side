import React from 'react';

import Banner from '../Banner/Banner';
import HomeCard from './HomeCard';
import HomeOwner from './HomeOwner';
import HomeSection from './HomeSection';
import HomeSectionAdd from './HomeSectionAdd';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
             <HomeCard></HomeCard>
            <HomeSection></HomeSection>
            <HomeOwner></HomeOwner>
            <HomeSectionAdd></HomeSectionAdd>
        </div>
    );
};

export default Home;