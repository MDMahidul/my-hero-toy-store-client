import React, { useState } from 'react';
import { Tab,Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";

const TabSection = () => {
    const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <div className="container mx-auto text-center my-20">
      <Tabs onSelect={(index) => setActiveTabIndex(index)}>
        <TabList className="flex justify-center space-x-4 border-b-2">
          <Tab>
            <p className={`font-bold ${activeTabIndex === 0 ? 'text-red-600' : 'text-black'}`}>DC</p>
          </Tab>
          <Tab>
            <p className={`font-bold ${activeTabIndex === 1 ? 'text-red-600' : 'text-black'}`}>Marvel</p>
          </Tab>
          <Tab>
            <p className={`font-bold ${activeTabIndex === 2 ? 'text-red-600' : 'text-black'}`}>Ben 10</p>
          </Tab>
        </TabList>

        <TabPanel>
          <h2>DC toys</h2>
        </TabPanel>
        <TabPanel>
          <h2>Ben 10 toys</h2>
        </TabPanel>
        <TabPanel>
          <h2>Marvel Toys</h2>
        </TabPanel>
      </Tabs>
    </div>
  )
};

export default TabSection;