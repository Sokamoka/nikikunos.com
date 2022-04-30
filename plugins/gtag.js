import Vue from 'vue'
import VueGtag from 'vue-gtag'

export default ({ app }) => {
  const getGDPR = 'true'
  // const getGDPR = localStorage.getItem('GDPR:accepted')

  Vue.use(
    VueGtag,
    {
      config: { id: 'G-MRYC8XT16Y' },
      bootstrap: getGDPR === 'true',
      appName: 'NikiKunos.com',
      enabled: getGDPR === 'true',
      pageTrackerScreenviewEnabled: true,
    },
    app.router
  )
}
