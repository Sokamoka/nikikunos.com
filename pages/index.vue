<template>
  <main>
    <NavHeader />
    <HeroSection data-st-container="hero" />
    <ProfileSection data-st-container="profile" />
    <FeatureSection data-st-container="feature" />
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
    this.$scrollTap({ offset: 160 })
  },
}
</script>

<style>
:root {
  --animate-delay: 0.4s;
}
</style>
