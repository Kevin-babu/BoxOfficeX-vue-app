import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'

createApp(App).mount('#app')

// localStorage['tickets'] = '{}';

const container = document.querySelector('.container');
const leftButton = document.querySelector('.left');
const rightButton = document.querySelector('.right');

leftButton.addEventListener('click', () => {
  container.scrollTo({
    left: container.scrollLeft - 370,
    behavior: 'smooth'
  });
});

rightButton.addEventListener('click', () => {
  container.scrollTo({
    left: container.scrollLeft + 370,
    behavior: 'smooth'
  });
});


