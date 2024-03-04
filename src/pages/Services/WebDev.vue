<template>
    <div>
        <WebDevBanner />
        <AboutWebDev />
        <CallToAction />

    </div>
</template>

<script>

import WebDevBanner from '@/components/Services/WebDev/WebDevBanner.vue';
import AboutWebDev from '@/components/Services/WebDev/AboutWebDev.vue';
import CallToAction from '@/components/Sections/CallToAction.vue';

  export default {
    components: {
        WebDevBanner, AboutWebDev, CallToAction
    }
  }
</script>