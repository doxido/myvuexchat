//Vue
import { createApp } from 'vue'

//App + Store + Style
import App from './components/App.vue'
import store from './store'
import './assets/css/style.css';

//Core
createApp(App).use(store).mount('#app')

//Initialize App with Data
store.dispatch("initialize")
