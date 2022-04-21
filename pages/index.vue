<template>
  <main>
    <NavHeader />
    <HeroSection data-st-container="hero" />
    <ProfileSection data-st-container="profile" />
    <FeatureSection />
    <RoadmapTitle data-st-container="roadmap" />
    <RoadmapItem />
    <UpcomingSection data-st-container="upcoming" />
    <ContactUs data-st-container="footer" />
    <FooterSection />
  </main>
</template>

<script>
export default {
  name: 'IndexPage',

  mounted() {
    this.$scrollTap({ offset: 160, margin: 68 })
  },
}
</script>

<style>
:root {
  --animate-delay: 0.4s;
}
</style>
