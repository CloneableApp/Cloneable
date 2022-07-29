import React, { useState, useEffect } from 'react';

import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import { Link } from 'react-router-dom';
import GetStatusBadge from '../utils/GetStatusBadge';
import { ipcRenderer } from 'electron';
import { getFolderFromProject } from '../utils/Utils';

function Dashboard() {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  let [projectsTrs, setProjectsTrs] = useState(null);

  function recentProjectsListener(event, projects) {
    setProjectsTrs(projects.map((project, index) => (
      <tr key={"tr-" + index}>
        <td className="p-2">
            <div className="text-slate-800"><Link to={"/downloads/" + project.id}>{project.name}</Link></div>
        </td>
        <td className="p-2">
            <div className="">{project.url}</div>
        </td>
        <td className="p-2">
          <button
            onClick={() => {
              let p = getFolderFromProject(project);
              if (p) {
                  ipcRenderer.send("open-folder", p);
              }
            }}
            className={project.status === 2 ? "text-center open-folder-button btn bg-purple-700 hover:bg-purple-800 text-white" : "hidden"}
          >
              Open
          </button>
          <button
            className={project.status !== 2 ? "text-center open-folder-button btn bg-purple-700 hover:bg-purple-800 text-white" : "hidden"}
          >
            <Link to={"/downloads/" + project.id}>
              Details
            </Link>
          </button>
        </td>
      </tr>
    )));
  }
  function loadRecentProjects() {
    ipcRenderer.send("get-recent-projects");
    ipcRenderer.on("recent-projects", recentProjectsListener);
  }
  useEffect(() => {
    loadRecentProjects();
    return () => {
      ipcRenderer.removeListener("recent-projects", recentProjectsListener);
    }
  }, []);

  let [stats, setStats] = useState(null);

  function statsListener(event, stats) {
    setStats(stats);
  }
  function loadStats() {
    ipcRenderer.send("get-projects-stats");
    ipcRenderer.on("projects-stats", statsListener);
  }
  useEffect(() => {
    loadStats();
    return () => {
      ipcRenderer.removeListener("projects-stats", statsListener);
    }
  }, []);

  return (
    <div className="flex h-screen overflow-hidden">

      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

            {/* Dashboard actions */}
            <div className="sm:flex sm:justify-between sm:items-center mb-8">

              {/* Right: Actions */}
              <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
                {/* Add view button */}
                <button className="btn bg-purple-700 hover:bg-purple-800 text-white">
                    <Link to="/start">
                      <svg className="w-4 h-4 fill-current opacity-50 shrink-0 float-left-important" viewBox="0 0 16 16">
                          <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                      </svg>
                      <span className="ml-2">Start new Clone</span>
                    </Link>
                </button>                
              </div>

            </div>

            {/* Cards */}
            <div className="grid grid-cols-12 gap-6">

              <div className="dashboard-card flex flex-col col-span-full xs:col-span-12 sm:col-span-6 bg-white shadow-lg rounded-sm border border-slate-200">
                <div className="px-5 pt-5 pb-5">
                  <h2 className="text-lg font-semibold text-slate-800 mb-8">Clone Status</h2>
                  <div className="overflow-x-auto">
                    <table className="table-auto w-full">
                        {/* Table header */}
                        <thead className="text-xs uppercase text-slate-400 bg-slate-50 rounded-sm">
                        <tr>
                            <th className="p-2">
                                <div className="font-semibold text-left">Status</div>
                            </th>
                            <th className="p-2">
                                <div className="font-semibold text-left">Number</div>
                            </th>
                        </tr>
                        </thead>
                        {/* Table body */}
                        <tbody className="text-sm font-medium divide-y divide-slate-100">
                          {[0, 1, 2, 3, -1].map((val, index) => {
                              return (
                                <tr
                                  key={"tr-" + val}
                                >
                                  <td className="p-4">
                                      <div className="text-slate-800">
                                        <Link
                                          to={"/downloads-filter/" + val}
                                        >
                                          {GetStatusBadge(val)}
                                        </Link>
                                      </div>
                                  </td>
                                  <td className="p-4">
                                    {stats && stats[val.toString()] ? stats[val.toString()] : "0"}
                                  </td>
                                </tr>
                              );
                          })}
                        </tbody>
                    </table>
                  </div>
                </div>
              </div>
            
            <div className="dashboard-card flex flex-col col-span-full xs:col-span-12 sm:col-span-6 bg-white shadow-lg rounded-sm border border-slate-200">
                <div className="px-5 pt-5 pb-5">
                  <h2 className="text-lg font-semibold text-slate-800 mb-8">
                    Recent Clones
                    <div className="float-right">
                      <button
                        className="text-center open-folder-button btn bg-purple-700 hover:bg-purple-800 text-white ml-4"
                      >
                        <Link to={"/downloads/"}>
                          View All →
                        </Link>
                      </button>
                    </div>
                  </h2>
                  <div className={projectsTrs && projectsTrs.length === 0 ? "hidden" : "overflow-x-auto"} style={{clear: "both"}}>
                    <table className="table-auto w-full">
                        {/* Table header */}
                        <thead className="text-xs uppercase text-slate-400 bg-slate-50 rounded-sm">
                        <tr>
                            <th className="p-2">
                                <div className="font-semibold text-left">Name</div>
                            </th>
                            <th className="p-2">
                                <div className="font-semibold text-left">URL</div>
                            </th>
                            <th className="p-2">
                                <div className="font-semibold text-left">Actions</div>
                            </th>
                        </tr>
                        </thead>
                        {/* Table body */}
                        <tbody className="text-sm font-medium divide-y divide-slate-100">
                          {projectsTrs}
                        </tbody>
                    </table>
                  </div>
                  <div className={projectsTrs && projectsTrs.length === 0 ? "block" : "hidden"}>
                    It looks like you don't have any Clones yet.<br/><br/><Link to="/start">Start one here</Link>, and it will show up in this block.
                  </div>
                </div>
              </div>
  
              <div className="flex flex-col col-span-full xs:col-span-12 rounded-sm bg-white shadow-lg rounded-sm border border-slate-200">

                <div className="relative bg-white p-4 sm:p-6 rounded-sm overflow-hidden">
                  <div className="relative">
                    <h1 className="text-2xl md:text-3xl text-slate-800 font-bold mb-1">Need help? Check out the <Link to="/help">Help Center</Link>.</h1>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </main>

      </div>
    </div>
  );
}

export default Dashboard;