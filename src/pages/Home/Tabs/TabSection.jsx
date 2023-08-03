import { key } from "localforage";
import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ToyCard from "../ToyCard/ToyCard";

const TabSection = () => {
  const [toys, setToys] = useState([]);
  const [activeTabIndex, setActiveTabIndex] = useState("0");
  const [activeTab, setActiveTab] = useState("dc");

  useEffect(() => {
    fetch(`https://my-hero-server.vercel.app/toys/${activeTab}`, {})
      .then((res) => res.json())
      .then((result) => {
        setToys(result);
      });
  }, [activeTab]);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    console.log(tabName);
  };
  return (
    <div className="container mx-auto text-center my-20 px-4 ">
      <h2 className="text-4xl font-bold text-red-600 text-center mb-5 lg:pb-5 ">
        Heros By Category
      </h2>
      <Tabs onSelect={(index) => setActiveTabIndex(index)}>
        <TabList className="flex justify-center space-x-4 border-b-2">
          <Tab onClick={() => handleTabClick("dc")}>
            <p
              className={`font-bold ${
                activeTabIndex == 0 ? "text-red-600" : "text-black"
              }`}
            >
              DC
            </p>
          </Tab>
          <Tab onClick={() => handleTabClick("marvel")}>
            <p
              className={`font-bold ${
                activeTabIndex == 1 ? "text-red-600" : "text-black"
              }`}
            >
              Marvel
            </p>
          </Tab>
          <Tab onClick={() => handleTabClick("ben-ten")}>
            <p
              className={`font-bold ${
                activeTabIndex == 2 ? "text-red-600" : "text-black"
              }`}
            >
              Ben 10
            </p>
          </Tab>
        </TabList>

        <TabPanel>
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
            {toys.map((toy) => (
              <ToyCard key={toy._id} toy={toy}></ToyCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
            {toys.map((toy) => (
              <ToyCard key={toy._id} toy={toy}></ToyCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
            {toys.map((toy) => (
              <ToyCard key={toy._id} toy={toy}></ToyCard>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default TabSection;
