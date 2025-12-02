import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import HomePage from './Home.vue'
import './style.css'

export default {
  ...DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component('HomePage', HomePage)
  }
}
