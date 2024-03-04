<template>
<section :class="{ 'nav-white-background': isNavbarSolid, 'transparent-background': !isNavbarSolid }"
      class="fixed top-0 left-0 w-full z-10 transition-all duration-300" >
  <nav class="relative py-6 bg-transparent z-50">
    <div class="container px-4 mx-auto">
      <div class="flex items-center">
        <a class="inline-block text-lg font-bold" href="/">
          <img class="h-10" src="../assets/full-logo3.png" alt="" width="auto">
        </a>
        <div class="lg:hidden ml-auto">
          <button class="navbar-burger flex w-12 h-12 items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-md transition duration-200" @click="toggleMenu">
            <svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 12H21" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M3 6H21" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M3 18H21" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </button>
        </div>
        <ul class="hidden lg:flex ml-14 lg:w-auto lg:space-x-12">
          <li><a class="inline-block text-sm text-gray-900 hover:text-orange-900 font-medium" href="/">Home</a></li>
          <li class="group relative">
            <a class="inline-block text-sm text-gray-900 hover:text-orange-900 font-medium" href="#">Services</a>
            <div class="hidden group-hover:block absolute top-full left-0 min-w-max max-w-xs p-4 z-50">
              <div class="-mb-2 ml-8 w-4 h-4 rounded-sm bg-white border-l border-t border-gray-200 transform rotate-45"></div>
              <div class="w-full max-w-xs bg-white border border-gray-100 rounded-3xl pt-4 pb-4 px-4">
                <div class="pb-3 mb-3 border-b border-gray-100">
                  <a class="block py-3 px-4 text-sm text-gray-900 hover:bg-orange-50 rounded-lg" href="/services/webdevelopment">Web Development</a>
                  <a class="block py-3 px-4 text-sm text-gray-900 hover:bg-orange-50 rounded-lg" href="/services/webdesign">Web Design</a>
                  <a class="block py-3 px-4 text-sm text-gray-900 hover:bg-orange-50 rounded-lg" href="/services/seo">SEO</a>
                </div>
                  <div class="ml-3">
                    <span class="block text-xs text-gray-500">Drop us a hello!</span>
                    <a class="text-sm font-semibold text-black hover:text-orange-900" href="#">info@cybercreative.se</a>
                </div>
              </div>
            </div>
          </li>
          <li><a class="inline-block text-sm text-gray-900 hover:text-orange-900 font-medium" href="/pricing">Pricing</a></li>
        </ul>
        <div class="hidden lg:block ml-auto">
          <div class="flex items-center">
            <a class="relative group inline-block w-full sm:w-auto py-3 px-5 text-white font-semibold rounded-md bg-orange-900 overflow-hidden" href="/contactus">
        <div class="absolute top-0 right-full w-full h-full bg-gray-900 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
        <div class="relative flex items-center justify-center">
          CONTACT US HERE
        </div>
      </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <div class="navbar-menu fixed top-0 left-0 right-0 bottom-0 w-full max-w-md z-50" v-if="isMenuOpen">
    <div class="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25" @click="toggleMenu"></div>
    <nav class="relative flex flex-col py-6 px-10 w-full h-full bg-white border-r overflow-y-auto">
      <div class="flex items-center mb-16">
        <a class="mr-auto text-2xl font-medium leading-none" href="#">
          <img class="h-10" src="../assets/full-logo3.png" alt="" width="auto">
        </a>
        <a href="#" @click="toggleMenu">
          <svg class="h-6 w-6 text-gray-500 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor" @click="toggleMenu">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </a>
      </div>
      <div>
        <ul class="burger-links mb-2" :class="{ opened: isMenuOpen, closed: !isMenuOpen }">
          <li><a class="block py-4 px-5 text-gray-900 hover:bg-orange-50 rounded-lg" href="/">Home</a></li>
          <li><a class="block py-4 px-5 text-gray-900 hover:bg-orange-50 rounded-lg" href="/services/webdevelopment">Web Development</a></li>
          <li><a class="block py-4 px-5 text-gray-900 hover:bg-orange-50 rounded-lg" href="/services/webdesign">Web Design</a></li>
          <li><a class="block py-4 px-5 text-gray-900 hover:bg-orange-50 rounded-lg" href="/services/seo">SEO</a></li>
          <li><a class="block py-4 px-5 text-gray-900 hover:bg-orange-50 rounded-lg" href="/pricing">Pricing</a></li>
        </ul>
        <div class="flex px-6 mb-16 items-center">
          <a class="inline-block py-3 px-4 text-sm font-semibold text-orange-900 hover:text-white border border-gray-300 hover:border-orange-600 hover:bg-orange-900 rounded-md transition duration-200" href="/contactus">
            Contact us here!
          </a>
        </div>
        <div>
          <div class="flex w-20 h-20 mb-6 items-center justify-center bg-orange-50 rounded-full">
            <svg width="29" height="28" viewbox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M25.3333 16.6667C24.9797 16.6667 24.6406 16.8072 24.3905 17.0572C24.1405 17.3073 24 17.6464 24 18V23.3334C24 23.687 23.8595 24.0261 23.6095 24.2762C23.3594 24.5262 23.0203 24.6667 22.6667 24.6667H4C3.64638 24.6667 3.30724 24.5262 3.05719 24.2762C2.80714 24.0261 2.66667 23.687 2.66667 23.3334V10.5467L10.5067 18.4C11.2567 19.1491 12.2733 19.5698 13.3333 19.5698C14.3933 19.5698 15.41 19.1491 16.16 18.4L18.3467 16.2134C18.5977 15.9623 18.7388 15.6218 18.7388 15.2667C18.7388 14.9116 18.5977 14.5711 18.3467 14.32C18.0956 14.069 17.7551 13.9279 17.4 13.9279C17.0449 13.9279 16.7044 14.069 16.4533 14.32L14.2667 16.5067C14.0174 16.751 13.6823 16.8878 13.3333 16.8878C12.9843 16.8878 12.6492 16.751 12.4 16.5067L4.54667 8.66669H13.3333C13.687 8.66669 14.0261 8.52622 14.2761 8.27617C14.5262 8.02612 14.6667 7.68698 14.6667 7.33336C14.6667 6.97974 14.5262 6.6406 14.2761 6.39055C14.0261 6.1405 13.687 6.00002 13.3333 6.00002H4C2.93913 6.00002 1.92172 6.42145 1.17157 7.1716C0.421427 7.92174 0 8.93916 0 10V23.3334C0 24.3942 0.421427 25.4116 1.17157 26.1618C1.92172 26.9119 2.93913 27.3334 4 27.3334H22.6667C23.7275 27.3334 24.7449 26.9119 25.4951 26.1618C26.2452 25.4116 26.6667 24.3942 26.6667 23.3334V18C26.6667 17.6464 26.5262 17.3073 26.2761 17.0572C26.0261 16.8072 25.687 16.6667 25.3333 16.6667ZM27.6133 5.05336L23.6133 1.05336C23.4865 0.93197 23.337 0.836817 23.1733 0.773358C22.8487 0.64 22.4846 0.64 22.16 0.773358C21.9963 0.836817 21.8468 0.93197 21.72 1.05336L17.72 5.05336C17.4689 5.30443 17.3279 5.64496 17.3279 6.00002C17.3279 6.35509 17.4689 6.69562 17.72 6.94669C17.9711 7.19776 18.3116 7.33881 18.6667 7.33881C19.0217 7.33881 19.3623 7.19776 19.6133 6.94669L21.3333 5.21336V12.6667C21.3333 13.0203 21.4738 13.3595 21.7239 13.6095C21.9739 13.8595 22.313 14 22.6667 14C23.0203 14 23.3594 13.8595 23.6095 13.6095C23.8595 13.3595 24 13.0203 24 12.6667V5.21336L25.72 6.94669C25.844 7.07166 25.9914 7.17086 26.1539 7.23855C26.3164 7.30624 26.4907 7.34109 26.6667 7.34109C26.8427 7.34109 27.017 7.30624 27.1794 7.23855C27.3419 7.17086 27.4894 7.07166 27.6133 6.94669C27.7383 6.82274 27.8375 6.67527 27.9052 6.51279C27.9729 6.35032 28.0077 6.17604 28.0077 6.00002C28.0077 5.82401 27.9729 5.64973 27.9052 5.48726C27.8375 5.32478 27.7383 5.17731 27.6133 5.05336Z" fill="black"></path>
            </svg>
          </div>
          <span class="block mb-3 text-sm text-gray-500">Drop us a hello!</span>
          <a class="font-semibold text-black" href="#">info@cybercreative.se</a>
        </div>
      </div>
    </nav>
  </div>
</section>
</template>

<script>
export default {
  data() {
    return {
      isDropdownOpen: false,
      dropdownTop: 0,
      isNavbarSolid: false,
      isMenuOpen: false
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    console.log(this.isMenuOpen)
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    toggleDropdown(event) {
      this.isDropdownOpen = !this.isDropdownOpen;
      this.dropdownTop = event.target.getBoundingClientRect().bottom;
    },
    handleScroll() {
      const scrollY = window.scrollY || window.pageYOffset;
      this.isNavbarSolid = scrollY > 50; // Adjust the threshold as needed
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
      console.log("clicked")

    }
  },
}
</script>


<style>
.nav-dark-background {
  background-color: rgb(244, 242, 242);
}

.transparent-background {
  background-color: transparent;
}

.rotate-180 {
  transform: rotate(180deg);
}

.transition-transform {
  transition: transform 0.3s ease;
}


.burger-links, .burger-menu {
  max-height: 0;
  overflow: hidden;
  opacity: 0;
  animation: slideDown 1s ease-in-out;
}

.burger-links.opened, .burger-menu.opened {
  max-height: 400px; /* Just ett exempelvärde, ändra efter behov */
  opacity: 1;
}

@keyframes slideDown {
  from {
    max-height: 0;
    opacity: 0;
  }
  to {
    max-height: 400px; /* Samma värde som .burger-links.opened */
    opacity: 1;
  }
}


@media (min-width: 1024px) {
  .navbar-menu {
    display: none;
  }
}
</style>