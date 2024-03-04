<template>
    <div>
        <MainBannerVue />
        <ServiceSectionVue />
        <CallToAction />

    </div>
</template>

<script>

import MainBannerVue from '@/components/Home/MainBanner.vue';
import ServiceSectionVue from '@/components/Home/ServiceSection.vue';
import CallToAction from '@/components/Sections/CallToAction.vue';

  export default {
    components: {
        MainBannerVue, ServiceSectionVue, CallToAction
    }
  }
</script>