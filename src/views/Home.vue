<template>
  <div id="fullpage">
    <!-- <div class="mobile">
      <h1>Sorry, this page only for PC</h1>
    </div> -->
    <SectionOne />
    <SectionTwo />
    <SectionThree />
  </div>
</template>

<script>
import SectionOne from '../components/SectionOne.vue';
import SectionTwo from '../components/SectionTwo.vue';
import SectionThree from '../components/SectionThree.vue'

import fullpage from 'fullpage.js';
import $ from 'jquery';
// import curDot from 'cursor-dot';

export default {
  data () {
    return {
      loading: true
    }
  },
  name: 'App',
  components: {
    SectionOne,
    SectionTwo,
    SectionThree
  },
  mounted() {
      // let model = document.createElement('script')
      // model.setAttribute('src', 'https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js')
      // document.head.appendChild(model)
      // let full = document.createElement('script')
      // full.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/3.1.2/fullpage.min.js')
      // document.head.appendChild(full)
      let main = document.createElement('script')
      main.setAttribute('src', '/assets/js/main.js')
      document.head.appendChild(main)
      // var loader = $('#loader');
      // // loader.style.opacity = '0';  
      // loader.css('display', 'none');
      fullpage('#fullpage', {
          navigation: true,
          anchors: ['home', 'about', 'posts'],
          navigationPosition: 'right',
          navigationTooltips: ['Home', "About", "Posts"]
      });
      this.loading = false;
      var before = $('.model').offset().top;

      function model () {
          var top = $('.model').offset().top;
          var model = $('.model');
          if (top < 0) {
              model.css('top', "210vh");
              model.css('left', "0%");
              model.css('z-index', "1");
              model.css('opacity', "0.4");

          } else if (top >  before +100) {
              model.css('top', "0px");
              model.css('left', "32%");
              model.css('z-index', "1");
              model.css('opacity', "1");

          }
      }

      setInterval(model, 100)
  }
}
</script>

<style scoped>
@import url('/assets/style/fullpage.css');
@import url('/assets/style/main.css');
</style>