import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import HomePage from './Home.vue'
import CustomContent from './components/customContent.vue'
import GenuiSdk from './components/GenuiSdk.vue'
import './style.css'

export default {
  ...DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component('HomePage', HomePage)
    app.component('CustomContent', CustomContent)
    app.component('GenuiSdk', GenuiSdk)
  }
}
