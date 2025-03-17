import React from "react";

const Tab = ({ activeTab, setActiveTab, tabs }) => {
  return (
    <div className="flex border-b mb-4">
      {tabs.map((tab, index) => (
        <button
          key={index}
          className={`px-4 py-2 border-t border-r hover:bg-blue-300 rounded-t ${
            activeTab === tab ? "bg-blue-600" : "bg-gray-100"
          }`}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tab;
