<template>
  <section class="bg-white dark:bg-gray-900 min-h-screen sm:pt-10 md:pt-16 lg:pt-36 justify-center flex">
    <div class="py-8 px-4 mx-20 max-w-screen-xl text-center lg:py-16 lg:px-12">
      <div class="flex text-white justify-center mb-16">
        <div>
          <svg class="w-28 text-center m-auto" viewBox="0 0 256 256">
            <g>
              <path fill="currentColor" d="M54.2,32.1V17.4c0-4.1,3.3-7.4,7.4-7.4c4.1,0,7.4,3.3,7.4,7.4v14.8c0,4.1-3.3,7.4-7.4,7.4C57.5,39.5,54.2,36.2,54.2,32.1z M231.3,38.6v193.6c0,7.7-6.6,13.8-14.8,13.8h-177c-8.1,0-14.7-6.2-14.7-13.8V38.6c0-7.6,6.6-13.8,14.7-13.8h7.4v7.4c0,8.1,6.6,14.8,14.7,14.8c8.1,0,14.8-6.6,14.8-14.8v-7.4h103.3v7.4c0,8.1,6.6,14.8,14.8,14.8c8.1,0,14.7-6.6,14.7-14.8v-7.4h7.4C224.7,24.8,231.3,31,231.3,38.6z M216.5,69h-177v162.2l177,0.1V69z M194.4,39.5c4.1,0,7.4-3.3,7.4-7.4V17.4c0-4.1-3.3-7.4-7.4-7.4c-4.1,0-7.4,3.3-7.4,7.4v14.8C187,36.2,190.3,39.5,194.4,39.5z M61.6,113.3h132.8c4.1,0,7.4-3.3,7.4-7.4s-3.3-7.4-7.4-7.4H61.6c-4.1,0-7.4,3.3-7.4,7.4C54.2,110,57.5,113.3,61.6,113.3z M61.6,157.5h132.8c4.1,0,7.4-3.3,7.4-7.4c0-4.1-3.3-7.4-7.4-7.4H61.6c-4.1,0-7.4,3.3-7.4,7.4C54.3,154.2,57.5,157.5,61.6,157.5z M61.6,201.8h132.8c4.1,0,7.4-3.3,7.4-7.4c0-4.1-3.3-7.4-7.4-7.4H61.6c-4.1,0-7.4,3.3-7.4,7.4C54.2,198.5,57.5,201.8,61.6,201.8z"/>
            </g>
          </svg>
        </div>
      </div>
      <a class="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer" role="alert">
        <span class="text-xs bg-primary rounded-full text-dark px-4 py-1.5 mr-3">Novinka</span>
        <span class="text-sm font-medium">Super aplikácia</span>
        <svg class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
        </svg>
      </a>
      <h1 class="mb-4 text-4xl font-extrabold leading-none md:text-5xl lg:text-6xl text-primary">
        Poznámková aplikácia
      </h1>
      <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
        Vue 3, Vite, Pinia, Tailwindcss, TypeScript
      </p>
      <div class="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
        <router-link to="/dashboard" class="inline-flex justify-center items-center py-3 px-5 text-lg sm:text-xl font-bold text-center text-dark rounded-lg bg-primary hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 opacity-80 hover:opacity-100">
          Vytvoriť poznámku
          <svg class="w-8 ml-4" viewBox="0 0 256 256">
            <g>
              <path fill="#000000" d="M54.2,32.1V17.4c0-4.1,3.3-7.4,7.4-7.4c4.1,0,7.4,3.3,7.4,7.4v14.8c0,4.1-3.3,7.4-7.4,7.4C57.5,39.5,54.2,36.2,54.2,32.1z M231.3,38.6v193.6c0,7.7-6.6,13.8-14.8,13.8h-177c-8.1,0-14.7-6.2-14.7-13.8V38.6c0-7.6,6.6-13.8,14.7-13.8h7.4v7.4c0,8.1,6.6,14.8,14.7,14.8c8.1,0,14.8-6.6,14.8-14.8v-7.4h103.3v7.4c0,8.1,6.6,14.8,14.8,14.8c8.1,0,14.7-6.6,14.7-14.8v-7.4h7.4C224.7,24.8,231.3,31,231.3,38.6z M216.5,69h-177v162.2l177,0.1V69z M194.4,39.5c4.1,0,7.4-3.3,7.4-7.4V17.4c0-4.1-3.3-7.4-7.4-7.4c-4.1,0-7.4,3.3-7.4,7.4v14.8C187,36.2,190.3,39.5,194.4,39.5z M61.6,113.3h132.8c4.1,0,7.4-3.3,7.4-7.4s-3.3-7.4-7.4-7.4H61.6c-4.1,0-7.4,3.3-7.4,7.4C54.2,110,57.5,113.3,61.6,113.3z M61.6,157.5h132.8c4.1,0,7.4-3.3,7.4-7.4c0-4.1-3.3-7.4-7.4-7.4H61.6c-4.1,0-7.4,3.3-7.4,7.4C54.3,154.2,57.5,157.5,61.6,157.5z M61.6,201.8h132.8c4.1,0,7.4-3.3,7.4-7.4c0-4.1-3.3-7.4-7.4-7.4H61.6c-4.1,0-7.4,3.3-7.4,7.4C54.2,198.5,57.5,201.8,61.6,201.8z"/>
            </g>
          </svg>
        </router-link>
      </div>
      <LogosSection/>
    </div>
  </section>
</template>

<script>
import LogosSection from '../components/LogosBlock.vue';

export default {
  name: 'HomeView',
  components: {
    LogosSection
  },
};
</script>
