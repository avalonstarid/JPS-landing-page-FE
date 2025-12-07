<script setup lang="ts">
import logoJps from '~/assets/images/logo-jps.png'

const currentYear = new Date().getFullYear()

const footerColumns = [
  {
    title: 'PT Janu Putra Sejahtera',
    links: ['Pricing', 'Updates', 'Beta', 'Newsletter', 'Collaborations'],
  },
  {
    title: 'Product',
    links: ['Business', 'Designers', 'Classrooms', 'Newcomers'],
  },
  {
    title: 'Learning',
    links: ['Learn Hub', 'Manuals', 'Tutorials', 'Communities'],
  },
  {
    title: 'Resources',
    links: ['Tutorials', 'Editorials', 'Product', 'Newsroom'],
  },
  {
    title: 'About',
    links: ['Company', 'Careers', 'Legal', 'Help'],
  },
]
</script>

<template>
  <footer class="bg-[#3A52A3] text-white" role="contentinfo">
    <div class="container-main py-16">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 text-center">
        <div v-for="column in footerColumns" :key="column.title" class="space-y-3">
          <h3 class="font-semibold text-lg">{{ column.title }}</h3>
          <ul class="space-y-2 text-sm text-white/80">
            <li v-for="link in column.links" :key="link">
              <a href="#" class="hover:text-white transition-colors">{{ link }}</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="mt-14 flex flex-col items-center gap-4">
        <div class="flex items-center gap-3">
          <img :src="logoJps" alt="PT Janu Putra Sejahtera" class="h-12 w-12 bg-white p-1 rounded-full" />
          <span class="font-semibold text-lg">PT Janu Putra Sejahtera</span>
        </div>
        <p class="text-sm text-white/80">© {{ currentYear }} All rights reserved.</p>
        <div class="flex items-center gap-4 text-white">
          <a href="#" aria-label="LinkedIn" class="hover:text-white/80 transition-colors">
            <i class="mdi mdi-linkedin text-xl"></i>
          </a>
          <a href="#" aria-label="X" class="hover:text-white/80 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0,0,256,256">
              <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(8.53333,8.53333)"><path d="M26.37,26l-8.795,-12.822l0.015,0.012l7.93,-9.19h-2.65l-6.46,7.48l-5.13,-7.48h-6.95l8.211,11.971l-0.001,-0.001l-8.66,10.03h2.65l7.182,-8.322l5.708,8.322zM10.23,6l12.34,18h-2.1l-12.35,-18z"></path></g></g>
            </svg>
          </a>
          <a href="#" aria-label="Instagram" class="hover:text-white/80 transition-colors">
            <i class="mdi mdi-instagram text-xl"></i>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

