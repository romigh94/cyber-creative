<template>
    <div>
        <WebDesignBanner />
        <AboutWebDesign />
        <CallToAction />

    </div>
</template>

<script>

import WebDesignBanner from '@/components/Services/WebDesign/WebDesignBanner.vue';
import AboutWebDesign from '@/components/Services/WebDesign/AboutWebDesign.vue';
import CallToAction from '@/components/Sections/CallToAction.vue';

  export default {
    components: {
        WebDesignBanner, AboutWebDesign, CallToAction
    }
  }
</script>