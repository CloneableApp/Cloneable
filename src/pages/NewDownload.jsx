import React, { useState, useRef, useEffect } from 'react';
import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import { Link, useParams } from 'react-router-dom';
import SettingsTabs from '../partials/SettingsTabs';
import { ipcRenderer } from "electron";
import GetStatusBadge from '../utils/GetStatusBadge';
import parseUrl from 'parse-url';
import { getFolderFromProject, getTimeElapsedFunc } from '../utils/Utils';
const moment = require('moment');

function NewDownload(props) {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const params = useParams();

  const [step, setStep] = useState(0);
  const [projectNameInputValue, setProjectNameInputValue] = useState('');
  const [projectURLInputValue, setProjectURLInputValue] = useState('');
  const [projectId, setProjectId] = useState(params.id ? params.id : props.id ? props.id : '');
  const [project, setProject] = useState(null);
  const [timeElapsed, setTimeElapsed] = useState('');
  const [cloneData, setCloneData] = useState(null);

  useEffect(() => {
    function projectListener(event, project) {
      setProjectNameInputValue(project.name);
      setProjectURLInputValue(project.url);
      setProject(project);
      if (project.clone_data) {
        setCloneData(project.clone_data);
      }

      if (project.status > 0 && step === 0) {
        setStep(4);
      }
    }

    function timeElapsedListener(event, project) {
      setTimeElapsedFunc(project);
    }

    if (params.id) {
      if (!project) {
        ipcRenderer.send("get-project", params.id);
        ipcRenderer.on("project", projectListener);
      }
      ipcRenderer.on("time-elapsed", timeElapsedListener);
    }

    return(() => {
      ipcRenderer.removeListener("project", projectListener);
      ipcRenderer.removeListener("time-elapsed", timeElapsedListener);
    });
  });

  useEffect(() => {
    if (step === 4) {
      function timeElapsedListener(event, project) {
        setTimeElapsedFunc(project);
      }
      ipcRenderer.on("time-elapsed", timeElapsedListener);
      return(() => {
        ipcRenderer.removeListener("time-elapsed", timeElapsedListener);
      });
    }
  }, [step]);

  useEffect(() => {
    function cloneFinishedListener(event, project) {
      setProject(project);
      ipcRenderer.send("save-project-clone-data", project.id, cloneData);
    }
    ipcRenderer.on("clone-finished", cloneFinishedListener);
    return(() => {
      ipcRenderer.removeListener("clone-finished", cloneFinishedListener);
    })
  });

  useEffect(() => {
    function cloneDataListener(event, projectId, data) {
      if (project && projectId !== project.id) {
        return;
      }
      if (cloneData) {
        setCloneData(cloneData + "\r\n" + data);
      }
      else {
        setCloneData(data);
      }
    }
    ipcRenderer.on("clone-data", cloneDataListener);
    return(() => {
      ipcRenderer.removeListener("clone-data", cloneDataListener);
    })
  });

  function setTimeElapsedFunc(project) {
    setTimeElapsed(getTimeElapsedFunc(project));
  }

  let stepRendered = (
    <div>

    </div>
  );

  function getProjectUrl() {
    if (!project) {
      return '';
    }
    let parsed = parseUrl(project.url);
    return parsed.resource || parsed.pathname;
  }

  function handleKeyPress(event) {
    if(event.key === 'Enter') {
      try {
        document.getElementById('next-step-button').click();
      } catch (err) {
      }
    }
  }

  if (step === 1 || step === 0) {
    stepRendered = (
      <div className="bg-white shadow-lg rounded-sm border border-slate-200 px-4 py-8">
          <h1 className="text-2xl md:text-3xl text-slate-800 font-bold mb-8">1. Clone info</h1>
          <div>
            <div>
              <strong>Name:</strong>
              <input 
                type="text"
                id="projectName"
                className="ml-4 mb-4"
                placeholder=""
                onChange={(e) => setProjectNameInputValue(e.target.value)}
                defaultValue={projectNameInputValue}
                required
                onKeyPress={handleKeyPress}
              >
              </input>
              <p className="pb-30px font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                This is a helpful name to identify this Clone. It will also be used as the folder name to store the Clone under.
              </p>
            </div>
            <div>
              <strong>Website address (URL): </strong>
              <input 
                type="text"
                id="projectURL"
                className="ml-4 mb-4"
                placeholder=""
                onChange={(e) => setProjectURLInputValue(e.target.value)}
                defaultValue={projectURLInputValue}
                required
                onKeyPress={handleKeyPress}
              >
              </input>
              <p className="pb-100px font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                This is the full URL of the website to clone (like <em>https://example.com</em> or <em>https://en.wikipedia.org/wiki/Dog</em>).
              </p>
            </div>
          </div>
          <button
            disabled={(projectNameInputValue && projectNameInputValue.trim() && projectURLInputValue && projectURLInputValue.trim() ? false : true)}
            onClick={() => {
              if (!projectId) {
                ipcRenderer.send("save-new-project", {name: projectNameInputValue, url: projectURLInputValue});
                ipcRenderer.on("saved-new-project", (event, projectId) => {
                  setProjectId(projectId);
                  setStep(2);
                });
              }
              else {
                ipcRenderer.send("save-project-info", projectId, {name: projectNameInputValue, url: projectURLInputValue});
                ipcRenderer.on("saved-project-info", (event, id) => {
                  setStep(2);
                });
              }
            }}
            id="next-step-button"
            className="next-step-button btn bg-purple-700 hover:bg-purple-800 text-white">
                <span className="">Settings →</span>
          </button>                
      </div>
    );
  }
  else if (step === 2) {
    stepRendered = (
      <div className="bg-white shadow-lg rounded-sm border border-slate-200 px-4 py-8">
          <h1 className="text-2xl md:text-3xl text-slate-800 font-bold mb-8">2. Settings</h1>
          <p className="pb-30px font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Adjust the settings for this Clone. (You can always adjust these defaults on the global <Link to="/settings">Settings page</Link>).
          </p>
          <div className="text-center pb-100px">
            <SettingsTabs
              projectId={projectId}
            />
          </div>
          <button
            onClick={() => {
              setStep(1)
            }}
            className="previous-step-button btn bg-purple-700 hover:bg-purple-800 text-white">
                <span className="">← Clone Info</span>
          </button>   
          <button
            onClick={() => {
              if (!project || project.status === 0) {
                ipcRenderer.send("start-clone", projectId);
                ipcRenderer.on("started-clone", (event, project) => {
                  setProject(project);
                  setStep(4);
                });
              }
              else {
                setStep(4);
              }
            }}
            className="next-step-button btn bg-purple-700 hover:bg-purple-800 text-white">
                <span className="">{project && project.status === 2 ? 'View Clone →' : '🚀 Clone'}</span>
          </button>                
      </div>
    );
  }
  else if (step === 3) {
    stepRendered = (
      <div className="bg-white shadow-lg rounded-sm border border-slate-200 px-4 py-8">
          <h1 className="text-2xl md:text-3xl text-slate-800 font-bold mb-8">3. Start Clone</h1>
          <p className="pb-100px font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            When ready, start the Cloning process. Progress will show here.
          </p>
          <button
            onClick={() => {
              setStep(2)
            }}
            className="previous-step-button btn bg-purple-700 hover:bg-purple-800 text-white">
                <span className="">← Settings</span>
          </button>   
          <button
            onClick={() => {
              if (!project || project.status === 0) {
                ipcRenderer.send("start-clone", projectId);
                ipcRenderer.on("started-clone", (event, project) => {
                  setProject(project);
                  setStep(4);
                });
              }
              else {
                setStep(4);
              }
            }}
            className="next-step-button btn bg-purple-700 hover:bg-purple-800 text-white">
                <span className="">{!project || project.status === 0 ? '🚀 Clone' : 'View Clone →'}</span>
          </button>                
      </div>
    );
  }
  else if (step === 4) {
    stepRendered = (
      <div className="bg-white shadow-lg rounded-sm border border-slate-200 px-4 py-8">
          <h1 className="text-2xl md:text-3xl text-slate-800 font-bold mb-8">3. Clone {project && project.name ? project.name : ''}</h1>
          <div className="text-center pb-100px">
            {/* Table */}
            <div className="overflow-x-auto">
              <table className="table-auto w-full">
                  {/* Table header */}
                  <thead className="text-xs uppercase text-slate-400 bg-slate-50 rounded-sm">
                  <tr>
                      <th className="p-2">
                          <div className="font-semibold text-center">Field</div>
                      </th>
                      <th className="p-2">
                          <div className="font-semibold text-center">Value</div>
                      </th>
                  </tr>
                  </thead>
                  {/* Table body */}
                  <tbody className="text-sm font-medium divide-y divide-slate-100">
                      <tr>
                          <td className="p-2">
                              <div className="text-slate-800">Status</div>
                          </td>
                          <td className="p-2">
                              {project ? GetStatusBadge(project.status) : ''}
                          </td>
                      </tr>
                      <tr>
                          <td className="p-2">
                              <div className="text-slate-800">Name</div>
                          </td>
                          <td className="p-2">
                              <div className="">{project ? project.name : ''}</div>
                          </td>
                      </tr>
                      <tr>
                          <td className="p-2">
                              <div className="text-slate-800">Base URL</div>
                          </td>
                          <td className="p-2">
                              <div className="">{project ? project.url : ''}</div>
                          </td>
                      </tr>
                      <tr>
                          <td className="p-2">
                              <div className="text-slate-800">Started</div>
                          </td>
                          <td className="p-2">
                              <div className="">{project ? project.started ? moment(project.started).format('MMMM Do YYYY, h:mma') : '' : ''}</div>
                          </td>
                      </tr>
                      <tr className={project && project.status === 2 ? "" : "hidden"}>
                          <td className="p-2">
                              <div className="text-slate-800">Completed</div>
                          </td>
                          <td className="p-2">
                              <div className="">{project ? project.completed ? moment(project.completed).format('MMMM Do YYYY, h:mma') : '' : ''}</div>
                          </td>
                      </tr>
                      <tr className={project && project.status === 2 ? "hidden" : ""}>
                          <td className="p-2">
                              <div className="text-slate-800">Total time</div>
                          </td>
                          <td className="p-2">
                              <div className="">{timeElapsed}</div>
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

            <div className={project && project.error ? 'block mb-4' : 'hidden'}>
              {GetStatusBadge(-1)} {project && project.error ? project.error : ''}
            </div>

            <h1 className={project && project.status === 2 ? "text-3xl text-slate-800 font-bold mb-1" : "hidden"}>Download finished</h1>
            <div className={project && project.status === 2 ? "clone-ready-text mb-10" : "hidden"}>
              <div className="mb-4">
                The site is downloaded to your local filesystem at <span className="clone-path">{project && project.base_path ? project.base_path : ''}{project && !project.no_directories ? '/' + (project ? getProjectUrl() : '') : ''}</span>
              </div>
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

            <h1 className={cloneData ? "text-xl text-slate-800 font-bold mb-1" : "hidden"}>Detailed Logs</h1>
            <pre className={cloneData ? "clone-logs" : "hidden"}>
              {cloneData ? cloneData : null}
            </pre>
          </div>
          <button
            onClick={() => {
              setStep(2)
            }}
            className={project && (project.status === -1 || project.status > 1) ? "previous-step-button btn bg-purple-700 hover:bg-purple-800 text-white" : "hidden"}>
                <span className="">← Settings</span>
          </button> 
          <button
            onClick={() => {
              ipcRenderer.send("cancel-clone", projectId);
              ipcRenderer.on("canceled-clone", (event, project) => {
                setProject(project);
              });
            }}
            className={project && (project.status === 1) ? "block next-step-button btn bg-rose-500 hover:bg-rose-800 text-white" : "hidden"}
          >
                <span className="">Cancel Clone</span>
          </button>   
          <button
            onClick={() => {
              ipcRenderer.send("start-clone", projectId);
              setCloneData(null);
              ipcRenderer.on("started-clone", (event, project) => {
                setProject(project);
                setStep(4);
              });
            }}
            className={project && (project.status === 2 || project.status === 3 || project.status === -1) ? "block next-step-button btn bg-purple-700 hover:bg-purple-800 text-white" : "hidden"}>
                <span className="">🚀 Restart Clone</span>
          </button>                
      </div>
    );
  }

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
                <div className="w-full">

                    {stepRendered}
            
                </div>

            </div>

            {/* Cards */}
            <div className="grid grid-cols-12 gap-6">

            </div>

          </div>
        </main>

      </div>
    </div>
  );
}

export default NewDownload;