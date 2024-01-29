import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {  MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from "react-icons/md";
import { tabs } from "./constants";


type TabLabel = typeof tabs[number]["label"];

const TabComponent: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<TabLabel>(tabs[0].label);
  const [selectedTabIndex, setSelectedTabIndex] = useState(0)

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const colors = "bg-blue-500 bg-green-500 bg-purple-500"

  const handleNextTab = () => {
    const currentIndex = tabs.findIndex((tab) => tab.label === selectedTab);
    const nextIndex = (currentIndex + 1) % tabs.length;
    setSelectedTabIndex(nextIndex)
    setSelectedTab(tabs[nextIndex].label);
  };

  const handlePreviousTab = () => {
    const currentIndex = tabs.findIndex((tab) => tab.label === selectedTab);
    const previousIndex = (currentIndex - 1 + tabs.length) % tabs.length;
   setSelectedTabIndex(previousIndex)
    setSelectedTab(tabs[previousIndex].label);
  };

  const selectedTabData = tabs.find((tab) => tab.label === selectedTab);

  return (
    <div className="max-w-screen-md mx-auto p-4">
      <div className="flex items-center gap-8 justify-center">
        <button
          className="px-4 py-2 bg-gray-300 rounded-md"
          onClick={handlePreviousTab}
        >
          <MdKeyboardDoubleArrowLeft size="20px" />
        </button>
        <span className="font-bold text-base">{selectedTab}</span>
        <button
          className="px-4 py-2 bg-gray-300 rounded-md"
          onClick={handleNextTab}
        >
         <MdKeyboardDoubleArrowRight size="20px" />
        </button>
      </div>
  
      <div className="mt-4">
      <AnimatePresence mode="wait">
        <motion.div key={tabs[selectedTabIndex].label}>
        {tabs[selectedTabIndex] && tabs[selectedTabIndex].content.map((item) => (
          <motion.div
            key={item?.name}
            variants={item?.variant}
            initial="initial"
            animate="animate"
            exit="exit"
            className={`px-8 font-extrabold item-clip-path py-4 mx-auto w-fit rounded-md shadow-md mt-2 text-3xl text-white ${selectedTabData.className}`}
          >
            <span>{item?.name}</span>
          </motion.div>
        ))}
        </motion.div>
        </AnimatePresence>
      </div>

    </div>
  );
};

export default TabComponent;
