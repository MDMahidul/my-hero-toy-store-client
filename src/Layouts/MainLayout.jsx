import React from 'react';
import Header from '../pages/Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';

const MainLayout = () => {

    return (
      <div>
        <Header></Header>
          <Outlet></Outlet>
        <Footer></Footer>
      </div>
    );
};

export default MainLayout;