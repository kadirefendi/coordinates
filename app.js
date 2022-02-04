const app = Vue.createApp({
  data() {
    return {
      coords: {
        x: 0,
        y: 0,
      },
    }
  },
  methods: {
    updateCoords(event) {
      console.log(event.x, event.y)
      this.coords = {
        x: event.x,
        y: event.y,
      }
    },
  },
}).mount('#app')

//Vue2 Version
//new Vue({
// el:'#app'
//})
