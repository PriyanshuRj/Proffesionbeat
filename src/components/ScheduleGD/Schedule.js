import React from 'react'

export default function Schedule() {
  return (
    <div> <section class="mb-20">
    <div class="px-6 py-12 md:px-12 bg-gray-50 text-gray-800 text-center lg:text-left">
      <div class="container mx-auto xl:px-8">
        <div class="grid lg:grid-cols-2 gap-12 flex items-center">
          <div class="mt-12 lg:mt-0">
            <h1 class="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">Schedule Group Discussion<br /><span class="text-blue-600">Free</span></h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            Participants take a stand and voice their views/opinions on a given topic.
            </p> <p className="mt-3 text-base text-gray-500  sm:text-lg sm:max-w-xl sm:mx-auto lg:mx-0 md:text-xl">
Theme of the week : Union budget 2022-23 15 - 21 February
</p> <p className="text-base text-gray-500 sm:mt-4 sm:text-lg sm:max-w-xl sm:mx-auto  md:text-xl lg:mx-0 mb-4">
Duration : 45 minutes
              </p>
            <a class="inline-block px-7 py-3 mr-2 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="#!" role="button">Book Your Slot</a>
            <a class="inline-block px-7 py-3 bg-transparent text-blue-600 font-medium text-sm leading-snug uppercase rounded hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="#!" role="button">Join Group Discussion</a>
            <p className="text-base text-gray-500 sm:mt-4 sm:text-lg sm:max-w-xl sm:mx-auto  md:text-xl lg:mx-0">(Link will be activated prior 10 minutes of GD)
            </p><p className="text-base text-gray-500 sm:text-lg sm:max-w-xl sm:mx-auto  md:text-lg lg:mx-0 mb-4">Registration Deadline : 30 min before the schedule time </p>
          </div>
          <div class="mb-12 lg:mb-0">
            <img
              src="https://mdbootstrap.com/img/new/ecommerce/vertical/028.jpg"
              class="w-full rounded-lg shadow-lg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </section></div>
  )
}
