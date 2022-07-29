import React, { useState } from 'react';

import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import { Link } from 'react-router-dom';

function Help() {

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
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

              <h2 className="text-center text-2xl md:text-3xl text-slate-800 font-bold mb-1">Help Center</h2>

              <p className="mb-4 text-center">
                If you have a question that's not answered here, don't hestitate to contact us at <a href="mailto:cloneableapp@gmail.com">cloneableapp@gmail.com</a> or interact with us on <a href="https://github.com/CloneableApp/Cloneable" target="_blank">GitHub</a>.
              </p>
              
              <h3 id="general" className="mt-4 mb-6 text-2xl font-extrabold tracking-tight text-center text-slate-800 lg:mb-8 lg:text-3xl dark:text-white mb-4">General Questions</h3>
              <Accordion
                allowMultipleExpanded={true}
              >
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                          What about [insert missing feature]?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                          If Cloneable is missing a feature that you want, don't hestitate to contact us by emailing us at <a href="mailto:cloneableapp@gmail.com">cloneableapp@gmail.com</a> or contacting us on <a href="https://github.com/CloneableApp/Cloneable" _target="_blank">GitHub</a>.
                          <br/><br/>
                          We try to make the software as flexible and useful as possible.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                          Who made Cloneable?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                          The founder of Cloneable is web developer who loves making useful tools. Email me at <a href="mailto:cloneableapp@gmail.com">cloneableapp@gmail.com</a> if you want to chat.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
            </Accordion>

            <h3 id="filters" className="mt-4 mb-6 text-2xl font-extrabold tracking-tight text-center text-slate-800 lg:mb-8 lg:text-3xl dark:text-white mb-4">Filters</h3>
              <Accordion
                allowMultipleExpanded={true}
              >
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                          How do the filter settings work?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                          The filters are a configurable way to control how a website is crawled.
                          <br/>
                          <br/>
                          There are a few different kinds of filters. See the questions below for individual help with each one.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                          How does the "Extra URLs / Domains" filter setting work?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                          By default, Cloneable will only crawl the domain of the main URL you give it. But sometimes you'll want to allow Cloneable
                          to crawl other domains, too. For example, if a website hosts its media files (images, videos) on a different domain, you might want to add that domain
                          to this setting so that you can download those media files, too.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                          How does the "Accept filters" filter setting work?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                          This setting has two different modes, depending on if you include a Regex wildcard character (*, ?, [, ]) or not.
                          <br/><br/>
                          If you don't include a wildcard character, this setting will act as a list of suffixes to accept in the crawl.
                          For example, if you set this to "png", the crawl will only download files ending in "png".
                          <br/><br/>
                          If you do include a Regex wildcard character, this setting will act as a list of patterns to match against the filename (not just a suffix).
                          For example, if you set this to "*mortgage*", the crawl will only download files with "mortgage" in the filename.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                          How does the "Reject filters" filter setting work?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                          This setting has two different modes, depending on if you include a Regex wildcard character (*, ?, [, ]) or not.
                          <br/><br/>
                          If you don't include a wildcard character, this setting will act as a list of suffixes to reject in the crawl.
                          For example, if you set this to "png", the crawl will not download files ending in "png".
                          <br/><br/>
                          If you do include a Regex wildcard character, this setting will act as a list of patterns to match against the filename (not just a suffix).
                          For example, if you set this to "*mortgage*", the crawl will not download files with "mortgage" in the filename.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                          How does the "Include directories" filter setting work?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                          While "Accept filters" and "Reject filters" work on filenames, this setting works on directory names. For example,
                          in the URL https://example.com/one/index.html, "one" is a directory name while "index.html" is a filename.
                          <br/><br/>
                          If left blank, the crawl will follow all directories (except the ones in "Exclude directories" setting). But if you provide 
                          a value for this setting, the crawl will only follow directories in the given list.
                          <br/><br/>
                          For example, if you set this to "one", all of the pages under https://example.com/one/ will be crawled, but not any pages under
                          https://example.com/two/ or https://example.com/three/ etc.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                          How does the "Exclude directories" filter setting work?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                          While "Accept filters" and "Reject filters" work on filenames, this setting works on directory names. For example,
                          in the URL https://example.com/one/index.html, "one" is a directory name while "index.html" is a filename.
                          <br/><br/>
                          If you provide a value for this setting, the crawl will not follow directories in the given list.
                        </p>
                    </AccordionItemPanel>
                    </AccordionItem>
            </Accordion>

            <h3 id="errors" className="mt-4 mb-6 text-2xl font-extrabold tracking-tight text-center text-slate-800 lg:mb-8 lg:text-3xl dark:text-white mb-4">Errors</h3>
              <Accordion
                allowMultipleExpanded={true}
              >
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                          What does "Error: spawn wget ENOENT" mean?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                          It means the bundled version of <span style={{fontFamily: 'monospace'}}>wget</span> does not work on your system. Please install <span style={{fontFamily: 'monospace'}}>wget</span> separately, 
                          and set the path to the binary in your Clone settings under the Advanced tab.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                          What does this error code mean?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                          Here are a list of common error codes:
                          <br/>
                          1 - Generic error code. <br/>
                          2 - Parse error — for instance, when parsing options.<br/>
                          3 - File I/O error. <br/>
                          4 - Network failure. <br/>
                          5 - SSL verification failure. <br/>
                          6 - Username/password authentication failure. <br/>
                          7 - Protocol errors. <br/>
                          8 - Server issued an error response. <br/>
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                          I got a different error than the above.
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                          Please contact us at <a href="mailto:cloneableapp@gmail.com">cloneableapp@gmail.com</a> with details and we will try to help. Please include the error message and the "Detailed Logs" from the Clone, and any other info you think may be helpful.
                          <br/><br/>
                          Or open an issue on our <a href="https://github.com/CloneableApp/Cloneable" target="_blank">GitHub repo</a>.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
            </Accordion>

            <h3 id="cookies" className="mt-4 mb-6 text-2xl font-extrabold tracking-tight text-center text-slate-800 lg:mb-8 lg:text-3xl dark:text-white mb-4">Cookies</h3>
              <Accordion
                allowMultipleExpanded={true}
              >
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                          What format should the "Cookies file path" file be in?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                          Cloneable expects the file to be in the Netscape cookies format. There are some free tools online for generation and conversion of cookies form your browser to this format.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                          If I enable "Save cookies" and/or "Keep session cookies", where are they stored?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                          Your cookies file will be stored in a file called cookies.txt in the root of the chosen working directory of the Clone.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
            </Accordion>

            <h3 id="credit" className="mt-4 mb-6 text-2xl font-extrabold tracking-tight text-center text-slate-800 lg:mb-8 lg:text-3xl dark:text-white mb-4">Credits</h3>
              <Accordion
                allowMultipleExpanded={true}
              >
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                          Icon8 credit
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                          <a target="_blank" href="https://icons8.com/icon/19036/double-down">Double Down</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
            </Accordion>

          </div>
        </main>

      </div>
    </div>
  );
}

export default Help;