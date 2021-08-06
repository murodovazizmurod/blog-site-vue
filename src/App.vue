<template>
  <div>
      <!-- <div class="mobile">
        <h1>Sorry, this page only for PC</h1>
      </div> -->
      <router-view></router-view>
      <div class="loader" id="loader" v-if="loading">
        <div class="loader-wrapper">
            <div class="loader-container">
            <h1 class="lt">&lt;</h1>
            <h1 class="loader-c">/</h1>
            <h1 class="lt" id="ltNd">&lt;</h1>
            </div>
        </div>
      </div>  
    </div>
</template>

<script>

import curDot from 'cursor-dot';
// import $ from 'jquery';

export default {
  data () {
    return {
      loading: true,
    }
  },
  name: 'App',
  components: {
    
  },
  mounted() {
      const dot = curDot({
                  // diameter in pixels
      diameter: 60,

      // border width
      borderWidth: 2,

      // border color
      borderColor: '#000',

      // easing
      easing: 4,
      zIndex: 1001,

      // background
      background: 'transparent'
      });
      dot.over("a", {
        background: "#ccc",
        scale: .7
      });
      dot.over("h1", {
        background: "black"
      });
      let jquery = document.createElement('script')
      jquery.setAttribute('src', 'https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js')
      document.head.appendChild(jquery)
      // let model = document.createElement('script')
      // model.setAttribute('src', 'https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js')
      // document.head.appendChild(model)
      let full = document.createElement('script')
      full.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/3.1.2/fullpage.min.js')
      document.head.appendChild(full)
      let main = document.createElement('script')
      main.setAttribute('src', '/assets/js/main.js')
      document.head.appendChild(main)
      // var loader = $('#loader');
      // // loader.style.opacity = '0';  
      // loader.css('display', 'none');
      this.loading = false
  }
}
</script>
