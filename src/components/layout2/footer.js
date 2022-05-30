import React from 'react'

export default function Footer() {
  return (
    <div>
    <footer class="p-4 bg-white  shadow md:px-6 md:py-8 dark:bg-gray-800">
    <div class="sm:flex sm:items-center sm:justify-between">
    <a href="professionbeat.com" class="flex items-center mb-4 sm:mb-0">
    <img src="professionbeat logo.png" class="mr-3 h-8" alt="professionbeat Logo"/>
    {/* <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Professionbeat</span> */}
    </a>
    <ul class="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
    <li>
    <a href="/" class="mr-4 hover:underline md:mr-6 ">All Programs</a>
    </li>
    <li>
    <a href="/" class="mr-4 hover:underline md:mr-6">Schedule GD</a>
    </li>
    <li>
    <a href="/" class="mr-4 hover:underline md:mr-6 ">Blog</a>
    </li>
    <li>
    <a href="/" class="mr-4 hover:underline">Learn More</a>
    </li>
    <li>
    <a href="/" class="hover:underline">Support</a>
    </li>
    </ul>
    </div>
    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 Professsionbeat. All Rights Reserved.
    </span>
    </footer>
    </div>
  )
}
