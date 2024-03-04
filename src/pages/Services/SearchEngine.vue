<template>
    <div>
        <SeoBanner />
        <AboutSeo />
        <CallToAction />

    </div>
</template>

<script>

import SeoBanner from '@/components/Services/Seo/SeoBanner.vue';
import AboutSeo from '@/components/Services/Seo/AboutSeo.vue';
import CallToAction from '@/components/Sections/CallToAction.vue';

  export default {
    components: {
        SeoBanner, AboutSeo, CallToAction
    }
  }
</script>