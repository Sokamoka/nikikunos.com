import Vue from 'vue'
import VueGtag from 'vue-gtag'

export default ({ app }) => {
  const getGDPR = 'true'
  // const getGDPR = localStorage.getItem('GDPR:accepted')
  const isGDPRAccepted = getGDPR === 'true'
  const isEnabled = app.context.env.GA_MEASUREMENT_ENABLED === 'true' ? isGDPRAccepted : false

  Vue.use(
    VueGtag,
    {
      config: { id: app.context.env.GA_MEASUREMENT_ID },
      bootstrap: isEnabled,
      appName: 'NikiKunos.com',
      enabled: isEnabled,
      pageTrackerScreenviewEnabled: true,
    },
    app.router
  )
}
