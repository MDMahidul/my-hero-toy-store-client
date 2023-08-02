import React from 'react';
import Banner from '../Banner/Banner';
import PhotoGallery from '../PhotoGallery/PhotoGallery';
import Tabs from '../Tabs/TabSection';
import ShopInfo from '../ShopInfo/ShopInfo';
import HotDeals from '../HotDeals/HotDeals';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PhotoGallery></PhotoGallery>
            <Tabs></Tabs>
            <HotDeals></HotDeals>
            <ShopInfo></ShopInfo>
        </div>
    );
};

export default Home;