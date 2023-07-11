Vue.component('app-page', {
  template: `
  <div>
    <h1 id="title" class="center" :style="{color: color}">Plane Excellence</h1>
    <a href="pages/parametric-stars.html">stars</a>
    <img src="img/unknown.png" alt="Excellent" class="center" @click="handleClick"></img>
  </div>
  `,
  props: {
    interval: null,
    color: '#000000'
  },
  methods: {
    handleClick: function() {
      if(this.interval) {
        clearInterval(this.interval);
        this.interval = null
      } else {
        this.interval = setInterval(this.changeColor, 400);
      }
    },
    changeColor: function() {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      this.color = color;
    }
  },
  mounted : function(){
      this.handleClick();
  },
  beforeDestroy () {
     clearInterval(this.interval);
  }
});

const vm = new Vue({
  el: '#app'
});