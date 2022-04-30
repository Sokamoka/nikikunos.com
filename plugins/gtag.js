import Vue from 'vue'
import VueGtag from 'vue-gtag'

export default ({ app }) => {
  const getGDPR = 'true'
  // const getGDPR = localStorage.getItem('GDPR:accepted')
  const isGDPRAccepted = getGDPR === 'true'

  Vue.use(
    VueGtag,
    {
      config: { id: app.context.env.GA_MEASUREMENT_ID },
      bootstrap: isGDPRAccepted,
      appName: 'NikiKunos.com',
      enabled: app.context.env.GA_MEASUREMENT_ENABLED === 'true' ? true : isGDPRAccepted,
      pageTrackerScreenviewEnabled: true,
    },
    app.router
  )
}
