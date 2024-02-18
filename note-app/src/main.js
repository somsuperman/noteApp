// Import the createApp function from Vue to initialize the application
import { createApp } from 'vue';

// Import createPinia for state management across the app
import { createPinia } from 'pinia';

// Import the main App component
import App from './App.vue';

// Import TailwindCSS for styling
import './assets/css/tailwind.css';

// Import the router setup from the router directory
import router from './router/index.ts';

// Create a new Vue application instance
const app = createApp(App);

// Use Pinia for state management
app.use(createPinia());

// Use Vue Router for handling navigation
app.use(router);

// Mount the Vue application to the DOM element with the ID 'app'
app.mount('#app');
