import React, { useEffect, useState } from 'react';

import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import { ipcRenderer } from "electron";
import { Link, useParams } from 'react-router-dom';
import GetStatusBadge from '../utils/GetStatusBadge';
import parseUrl from 'parse-url';
import { getFolderFromProject } from '../utils/Utils';

function Downloads() {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const params = useParams();

  let [statusFilters, setStatusFilters] = useState(params.filterId ? [Number.parseInt(params.filterId)] : []);

  let [statusFiltersEls, setStatusFiltersEls] = useState([0, 1, 2, 3, -1].map((val, index) => {
    return (
      <div
        key={'filter-' + val}
        onClick={() => {
          toggleStatus(val)
        }}
        className="status-filter"
      >
        {GetStatusBadge(val, 'large')}
      </div>
    );
  }));
  let [projects, setProjects] = useState([]);
  let [lastSearchValue, setLastSearchValue] = useState('');
  let [allProjects, setAllProjects] = useState([]);
  let [filteredProjects, setFilteredProjects] = useState([]);
  let [projectsLi, setProjectsLi] = useState((
    <li>
      Loading...
    </li>
  ));

  useEffect(() => {
    ipcRenderer.on("deleted-project", loadProjects);
    return () => {
      ipcRenderer.removeListener("deleted-project", loadProjects);
    }
  });

  function projectsListener(event, projects) {
    setAllProjects(projects);
  }
  function setProjectsLiFunc(projects) {
    setProjectsLi(projects.map((project) => (
      <li key={project.id} className="flex px-2">
        <div className="grow flex items-center border-b border-slate-100 text-sm py-2">
          <div className="grow flex justify-between">
            <div>
              <Link to={"/downloads/" + project.id} className="self-center hover:text-purple-800 text-2xl">{GetStatusBadge(project.status)} <strong>{project.name}</strong> {/* ({project.id})*/}</Link>
              <div className="download-info">URL: {project.url}</div>
            </div>
            <div className="shrink-0 ml-2">
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
                className="text-center open-folder-button btn bg-purple-700 hover:bg-purple-800 text-white ml-4"
              >
                <Link to={"/start/" + project.id}>
                  View Clone
                </Link>
              </button>
              <a className="font-medium text-indigo-500 hover:text-indigo-600 ml-4" href="#"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  ipcRenderer.send("delete-project", project.id);
                }}
              >✖</a>
            </div>
          </div>
        </div>
      </li>
    )));
  }
  function loadProjects() {
    ipcRenderer.send("get-projects");
    ipcRenderer.on("projects", projectsListener);
  }
  useEffect(() => {
    loadProjects();
    return () => {
      ipcRenderer.removeListener("projects", projectsListener);
    }
  }, []);

  function toggleStatus(val) {
    let s = statusFilters;
    if (typeof val !== 'undefined' ) {
      if (statusFilters.indexOf(val) === -1) {
        s.push(val);
        setStatusFilters(s);
      }
      else {
        const index = statusFilters.indexOf(val);
        if (index > -1) {
          s.splice(index, 1);
          setStatusFilters(s);
        }
      }
    }

    if (s.length > 0) {
      let p = allProjects.filter((val) => {
        if (val && typeof val.status !== 'undefined' && s.indexOf(val.status) === -1) {
          return false;
        }
        return true;
      });
      setFilteredProjects(p);
    }
    else {
      setFilteredProjects(allProjects);
    }

    setStatusFiltersElFunc(s);
  }

  useEffect(() => {
    toggleStatus();
  }, [allProjects]);
  
  useEffect(() => {
    if (lastSearchValue.length > 0) {
      let p = filteredProjects.filter((val) => {
        if (val && typeof val.name !== 'undefined' && val.name.toLowerCase().indexOf(lastSearchValue.toLowerCase()) !== -1) {
          return true;
        }
        if (val && typeof val.url !== 'undefined' && val.url.toLowerCase().indexOf(lastSearchValue.toLowerCase()) !== -1) {
          return true;
        }
        return false;
      })
      setProjectsLiFunc(p);
    }
    else {
      setProjectsLiFunc(filteredProjects);
    }
  }, [lastSearchValue, filteredProjects]);

  function handleSearchChange(event) {
    let search = event.target.value.trim();
    setLastSearchValue(search);
  }

  function setStatusFiltersElFunc(arr) {
    setStatusFiltersEls([0, 1, 2, 3, -1].map((val, index) => {
      return (
        <div
          key={'filter-' + val}
          onClick={() => {
            toggleStatus(val)
          }}
          className={arr.indexOf(val) === -1 ? "status-filter" : "status-filter active"}
        >
          {GetStatusBadge(val, 'large')}
        </div>
      );
    }));
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

            <div className="grid grid-cols-12 gap-6">
              <div className="flex flex-col col-span-full xs:col-span-12 sm:col-span-6">
                <h1 className="text-2xl md:text-3xl text-slate-800 font-bold mb-4">Filters</h1>
                <div className="status-filters">
                  {statusFiltersEls}
                </div>
              </div>
              <div className="flex flex-col col-span-full xs:col-span-12 sm:col-span-6">
                <h1 className="text-2xl md:text-3xl text-slate-800 font-bold mb-1">Search</h1>
                <input type="text" placeholder="" onChange={handleSearchChange}></input>
              </div>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-full bg-white shadow-lg rounded-sm border border-slate-200">
                <header className="px-5 py-4 border-b border-slate-100">
                  <h2 className="font-semibold text-slate-800">Clones</h2>
                </header>
                <div className="p-3">
                  <div>
                    <ul className="my-1">
                      {projectsLi}
                    </ul>
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

export default Downloads;