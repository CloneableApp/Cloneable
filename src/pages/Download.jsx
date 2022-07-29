import React, { useEffect, useState } from 'react';

import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import { ipcRenderer } from "electron";
const moment = require('moment');
import { Link, useParams } from "react-router-dom";
import GetStatusBadge from '../utils/GetStatusBadge';
import parseUrl from 'parse-url';
import { getFolderFromProject, getTimeElapsedFunc } from '../utils/Utils';

function Download(props) {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [project, setProject] = useState(null);
  const [projectRender, setProjectRender] = useState((<div>Loading...</div>));

  const params = useParams();

  function getProjectUrl(project) {
    if (!project) {
        return '';
    }
    let parsed = parseUrl(project.url);
    return parsed.resource || parsed.pathname;
  }

  function projectListener(event, project) {
    setProjectRender((
        <div>
            <header className="px-5 py-4 border-b border-slate-100">
                <h2 className="font-semibold text-slate-800 text-2xl">
                    {project.name}
                
                    <button className="float-right btn bg-purple-700 hover:bg-purple-800 text-white">
                        <Link to={"/start/" + project.id}>
                            <span className="ml-2">View Clone →</span>
                        </Link>
                    </button>
                </h2>

            </header>
            <div className="p-3">

                {/* Table */}
                <div className="overflow-x-auto">
                <table className="table-auto w-full">
                    {/* Table header */}
                    <thead className="text-xs uppercase text-slate-400 bg-slate-50 rounded-sm">
                    <tr>
                        <th className="p-2">
                            <div className="font-semibold text-left">Field</div>
                        </th>
                        <th className="p-2">
                            <div className="font-semibold text-left">Value</div>
                        </th>
                    </tr>
                    </thead>
                    {/* Table body */}
                    <tbody className="text-sm font-medium divide-y divide-slate-100">
                        {/*<tr>
                            <td className="p-2">
                                <div className="text-slate-800">ID</div>
                            </td>
                            <td className="p-2">
                                <div className="">{project.id}</div>
                            </td>
                        </tr>*/}
                        <tr>
                            <td className="p-2">
                                <div className="text-slate-800">Status</div>
                            </td>
                            <td className="p-2">
                                {GetStatusBadge(project.status)}
                            </td>
                        </tr>
                        <tr className={project && project.status === 2 ? "" : "hidden"}>
                            <td className="p-2">
                                <div className="text-slate-800">Open</div>
                            </td>
                            <td className="p-2">
                                <div className="">
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
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="p-2">
                                <div className="text-slate-800">Name</div>
                            </td>
                            <td className="p-2">
                                <div className="">{project.name}</div>
                            </td>
                        </tr>
                        <tr>
                            <td className="p-2">
                                <div className="text-slate-800">URL</div>
                            </td>
                            <td className="p-2">
                                <div className="">{project.url}</div>
                            </td>
                        </tr>
                        <tr className={project && project.status === 2 ? "" : "hidden"}>
                            <td className="p-2">
                                <div className="text-slate-800">Download path</div>
                            </td>
                            <td className="p-2">
                                <div className="">{project && project.base_path ? project.base_path : ''}/{project ? getProjectUrl(project) : ''}</div>
                            </td>
                        </tr>
                        <tr className={project && project.status === 2 ? "" : "hidden"}>
                            <td className="p-2">
                                <div className="text-slate-800">Started</div>
                            </td>
                            <td className="p-2">
                                <div className="">{project.started ? moment(project.started).format('MMMM Do YYYY, h:mma') : ''}</div>
                            </td>
                        </tr>
                        <tr className={project && project.status === 2 ? "" : "hidden"}>
                            <td className="p-2">
                                <div className="text-slate-800">Completed</div>
                            </td>
                            <td className="p-2">
                                <div className="">{project.completed ? moment(project.completed).format('MMMM Do YYYY, h:mma') : ''}</div>
                            </td>
                        </tr>
                        <tr className={project && project.status === 2 ? "" : "hidden"}>
                          <td className="p-2">
                              <div className="text-slate-800">Total time</div>
                          </td>
                          <td className="p-2">
                              <div className="">{project ? getTimeElapsedFunc(project) : ''}</div>
                          </td>
                      </tr>
                    </tbody>
                </table>

                </div>
            </div>
        </div>
    ));
  }
  function loadProject() {
        if (params && params.id) {
            ipcRenderer.send("get-project", params.id);
            ipcRenderer.on("project", projectListener);
        }
  }
  useEffect(() => {
    loadProject();

    return(() => {
        ipcRenderer.removeListener("project", projectListener);
    });
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
                <button className="btn bg-purple-700 hover:bg-purple-800 text-white">
                    <Link to="/downloads">
                        <span className="ml-2">← Back to All Clones</span>
                    </Link>
                </button>                
              </div>

            </div>

            {/* Cards */}
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-full bg-white shadow-lg rounded-sm border border-slate-200">
                <div className="p-3">
                  <div>
                    {projectRender}
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

export default Download;