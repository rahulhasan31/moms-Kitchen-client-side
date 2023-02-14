import React from 'react';
import useTitle from '../../Hook/UseTitle';

import Banner from '../Banner/Banner';
import Work from '../Work/Work';
import HomeCard from './HomeCard';
import HomeOwner from './HomeOwner';
import HomeSection from './HomeSection';
import HomeSectionAdd from './HomeSectionAdd';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <Work></Work>
             <HomeCard></HomeCard>
            <HomeSection></HomeSection>
            {/* <HomeOwner></HomeOwner>
            <HomeSectionAdd></HomeSectionAdd> */}
        </div>
    );
};

export default Home;