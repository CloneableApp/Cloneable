import React, { useState } from 'react';
import Help from './header/Help';

function Header({
  sidebarOpen,
  setSidebarOpen
}) {

  const [searchModalOpen, setSearchModalOpen] = useState(false)

  return (
    <header className="sticky top-0 bg-white border-b border-slate-200 z-30">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 -mb-px">
          <h3 className="text-2xl md:text-3xl text-slate-800 font-bold mb-1">
            <div className="mr-1" style={{"marginTop": "4px", float: "left"}}>
                <svg width="30" height="30" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M 8.465 4.929 L 9.879 3.515 L 15.536 9.172 L 9.879 14.828 L 8.465 13.414 L 12.707 9.172 L 8.465 4.929 Z" style={{fill: "rgb(108, 43, 217)"}} transform="matrix(0, 1, -1, 0, 21.172, -2.829)"/>
                    <path d="M 9.879 9.172 L 8.464 10.586 L 12.707 14.828 L 8.464 19.071 L 9.879 20.485 L 15.536 14.828 L 9.879 9.172 Z" style={{fill: "rgb(108, 43, 217)"}} transform="matrix(0, 1, -1, 0, 26.8285, 2.8285)"/>
                </svg>
            </div>
  
            Cloneable
          </h3>

          {/* Header: Left side */}
          <div className="flex">

            {/* Hamburger button */}
            <button
              className="text-slate-500 hover:text-slate-600 lg:hidden"
              aria-controls="sidebar"
              aria-expanded={sidebarOpen}
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <span className="sr-only">Open sidebar</span>
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <rect x="4" y="5" width="16" height="2" />
                <rect x="4" y="11" width="16" height="2" />
                <rect x="4" y="17" width="16" height="2" />
              </svg>
            </button>

          </div>

          {/* Header: Right side */}
          <div className="flex items-center">

            <Help />

          </div>

        </div>
      </div>
    </header>
  );
}

export default Header;