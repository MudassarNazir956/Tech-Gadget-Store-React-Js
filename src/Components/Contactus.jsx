import React from 'react'

const Contactus = () => {
  return (
    <>
        <section class="text-black body-font relative">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-12">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-black">Contact Us</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.</p>
    </div>
    <div class="lg:w-1/2 md:w-2/3 mx-auto">
      <div class="flex flex-wrap -m-2">
        <div class="p-2 w-1/2">
          <div class="relative">
            <label for="name" class="leading-7 text-sm text-black font-semibold">Name</label>
            <input type="text" id="name" name="name" class="w-full bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-200 focus:ring-2text-base outline-none text-gray-100 py-1 px-3 leading-8"/>
          </div>
        </div>
        <div class="p-2 w-1/2">
          <div class="relative">
            <label for="email" class="leading-7 text-sm text-black font-semibold">Email</label>
            <input type="email" id="email" name="email" class="w-full bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-200 focus:ring-2text-base outline-none text-gray-100 py-1 px-3 leading-8"/>
          </div>
        </div>
        <div class="p-2 w-full">
          <div class="relative">
            <label for="message" class="leading-7 text-sm text-black font-semibold  ">Message</label>
            <textarea id="message" name="message" class="w-full bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-200 focus:ring-2 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" data-gramm="false" wt-ignore-input="true"></textarea>
          </div>
        </div>
        <div class="p-2 w-full">
          <button class="flex mx-auto text-black bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-800 rounded text-lg font-semibold hover:px-10">Submit</button>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default Contactus
