<template>
  <main>
    <NavHeaderHug />
    <HeroSection />
    <ProfileSection />
    <FeatureSection />
    <RoadmapTitle />
    <RoadmapItem />
    <UpcomingSection />
    <ContactUs />
    <FooterSection />
  </main>
</template>

<script>
export default {
  name: 'IndexPage',

  mounted() {
    this.$scrollTap({ offset: 160, margin: 70 })
  },
}
</script>

<style>
:root {
  --animate-delay: 0.4s;
}
</style>
