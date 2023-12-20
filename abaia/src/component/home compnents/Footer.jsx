// Copyright 2023 ragad
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


import React from 'react';
import logo from './../../logo/logo-no-background.png'
function Footer() {
    return (
        <footer className=" bg-blue-sky font-secondry mt-48">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <a href="https://flowbite.com/" className="flex items-center">
                            <img src={logo} className="h-12 me-3" alt="FlowBite Logo" />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap text-pastel-yellow">NA Abayas</span>
                        </a>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-4">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-pastel-yellow uppercase ">Resources</h2>
                            <ul className="text-gray-100 dark:text-gray-400 font-medium">

                                <li className="mb-4">
                                    <a href="https://tailwindcss.com/" className="hover:underline">Tailwind CSS</a>
                                </li>
                                <li className="mb-4">
                                    <a href="https://flowbite.com/" className="hover:underline">Flowbite</a>
                                </li>
                             
                            </ul>

                        </div>
                        <div>
                            <div className='h-10'></div>
                            <ul className="text-gray-100 dark:text-gray-400 font-medium">

                                <li className="mb-4">
                                    <a href="https://hawraaabaya.com/#" className="hover:underline">Hawraa Images</a>
                                </li>
                                <li className="mb-4">
                                    <a href="https://pinkit.sa/" className="hover:underline">Pinkit Images</a>
                                </li>
                            </ul>
                            
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-pastel-yellow uppercase ">Follow Me</h2>
                            <ul className="text-gray-100 font-medium">
                                <li className="mb-4">
                                    <a href="https://github.com/Raghad-alju" className="hover:underline ">Github</a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/in/raghad-aljuhaymi-1161a123b/" className="hover:underline">Linkedin</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-pastel-yellow uppercase ">Legal</h2>
                            <ul className="text-gray-100  font-medium">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-100 sm:text-center ">
                    </span>
                    <div className="flex mt-4 sm:justify-center sm:mt-0">
                        <a href="https://www.linkedin.com/in/raghad-aljuhaymi-1161a123b/" className="text-gray-100 hover:text-gray-400 dark:hover:text-white">
                            <svg className="w-4 h-4  " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 15">
                                <path fill-rule="evenodd" d="M7.979 5v1.586a3.5 3.5 0 0 1 3.082-1.574C14.3 5.012 15 7.03 15 9.655V15h-3v-4.738c0-1.13-.229-2.584-1.995-2.584-1.713 0-2.005 1.23-2.005 2.5V15H5.009V5h2.97ZM3 2.487a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" clip-rule="evenodd" />
                                <path d="M3 5.012H0V15h3V5.012Z" />
                            </svg>

                            <span className="sr-only">Linkedin page</span>
                        </a>

                        <a href="https://github.com/Raghad-alju" className="text-gray-100 hover:text-gray-400  ms-5 mr-1">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd" />
                            </svg>
                            <span className="sr-only">GitHub account</span>
                        </a>

                    </div>
                </div>
            </div>
        </footer>

    );
}

export default Footer;