import React from 'react'
import "./style.css";
export default function Footer() {
    return (
        <div>

            <footer className="p-4 bg-white sm:p-6 dark:bg-gray-100">
                <div className="flex md:justify-between">
                   
                    <div className="flex justify-between" style={{width: '100%',flexWrap:'wrap'}}>
                        <div className="mx-4 my-4">
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-gray-800">Resources</h2>
                            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" / >
                            <ul className="text-gray-600 dark:text-gray-400">
                                <li className="mb-4">
                                    <a href="/" className="hover:underline">About Us</a>
                                </li>
                                <li className="mb-4">
                                    <a href="/" className="hover:underline">Contact Us</a>
                                </li>
                                <li>
                                    <a href="/" className="hover:underline">Pricing</a>
                                </li>
                            </ul>
                        </div>
                        <div className="mx-4 my-4">
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-gray-800">Find Us</h2>
                            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" / >
                            <ul className="text-gray-600 dark:text-gray-400 ">
                                <li className="mb-4 flex dark:hover:text-gray-800">
                                <a href="info@professionbeat.com" className="hover:underline hover:text-gray-900 dark:hover:text-gray-800"><svg className="w-5 h-5 icons mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M464 64C490.5 64 512 85.49 512 112C512 127.1 504.9 141.3 492.8 150.4L275.2 313.6C263.8 322.1 248.2 322.1 236.8 313.6L19.2 150.4C7.113 141.3 0 127.1 0 112C0 85.49 21.49 64 48 64H464zM217.6 339.2C240.4 356.3 271.6 356.3 294.4 339.2L512 176V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V176L217.6 339.2z"/></svg></a>
                                <a href="info@professionbeat.com" className="hover:underline ">info@professionbeat.com</a>
                                </li>
                                <li className="flex dark:hover:text-gray-800">
                               <svg className="w-5 h-5 icons mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M511.2 387l-23.25 100.8c-3.266 14.25-15.79 24.22-30.46 24.22C205.2 512 0 306.8 0 54.5c0-14.66 9.969-27.2 24.22-30.45l100.8-23.25C139.7-2.602 154.7 5.018 160.8 18.92l46.52 108.5c5.438 12.78 1.77 27.67-8.98 36.45L144.5 207.1c33.98 69.22 90.26 125.5 159.5 159.5l44.08-53.8c8.688-10.78 23.69-14.51 36.47-8.975l108.5 46.51C506.1 357.2 514.6 372.4 511.2 387z"/></svg>
                                    <p  className="hover:underline">+91 9653007853</p>
                                </li>
                            </ul>
                        </div>
                        <div className="mx-4 my-4">
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-gray-800">Legal</h2>
                            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" / >
                            <ul className="text-gray-600 dark:text-gray-400">
                                <li className="mb-4">
                                    <a href="/" className="hover:underline">Privacy Policy</a>
                                </li>
                                <li className="mb-4">
                                    <a href="/" className="hover:underline">Terms &amp; Conditions</a>
                                </li>

                                <li>
                                    <a href="/" className="hover:underline">Cancellation/Refound Policy</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                  
                </div>
                <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0 md:mt-4">
                            <a target="_blank" rel="noreferrer" href="https://www.facebook.com/Professionbeat" className="text-gray-500 hover:text-gray-900 dark:hover:text-gray-800">
                                <svg className="w-5 h-5 icons" fill="#465893" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path></svg>
                            </a>
                            <a target="_blank" rel="noreferrer" href="https://www.instagram.com/professionbeat/" className="text-gray-500 hover:text-gray-900 dark:hover:text-gray-800">
                                <svg className="w-5 h-5 icons" fill="#CF1D93" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path></svg>
                            </a>
                            <a target="_blank" rel="noreferrer" href="https://twitter.com/professionbeat" className="text-gray-500 hover:text-gray-900 dark:hover:text-gray-800">
                                <svg className="w-5 h-5 icons" fill="#03A8F5" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg>
                            </a>
                            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/professionbeat" className="text-gray-500 hover:text-gray-900 dark:hover:text-gray-800">
                                <svg className="w-5 h-5 icons" fill="#465893" viewBox="0 0 448 512" aria-hidden="true"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg>
                            </a>
                            <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCxh25EWiXPBuqjIKiOe6-WQ" className="text-gray-500 hover:text-gray-900 dark:hover:text-gray-800" style={{color:"#FE0100", hover:"color:white"}}>
                                <svg className="w-5 h-5 icons" fill="currentColor"  viewBox="0 0 576 512" aria-hidden="true"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path></svg>
                            </a>
                        </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" / >
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="/" className="hover:underline">Professionbeat™</a>. All Rights Reserved.
                        </span>
                        
                    </div>
            </footer>

        </div>
    )
}
