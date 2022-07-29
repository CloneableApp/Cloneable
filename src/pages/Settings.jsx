import React, { useState, useRef, useEffect } from 'react';

import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';

import SettingsTabs from '../partials/SettingsTabs';

function Settings() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">

      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full mx-auto text-center">
            <h2 className="text-2xl md:text-3xl text-slate-800 font-bold mb-1">Default Settings</h2>
            <p className="mb-10 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 mx-auto">
                These are the global default settings that will prepopulate the settings for each Clone you start. 
                You can adjust these settings for each Clone before starting.
            </p>
            <div className="grid grid-cols-1">
                <SettingsTabs/>
            </div>
          </div>
        </main>

      </div>
    </div>
  );
}

export default Settings;