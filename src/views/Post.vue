<template>
<div id="page">
  <a href="#" @click="$router.go(-1)" class="back"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M3 12l18-12v24z"/></svg> Go Back</a>
  <div id="cont">
  <div id="progress"></div>
  </div>
  <div class="site-content">
    <div class="content-area">
      <main class="site-main" role="main">
        <span v-if="post.poster">
        <img :src="post['poster']" :alt="post.title" class="unselectable">
        </span>
        <div class="post">
          <h1 class="entry-title">{{post.title}}</h1>
          <div class="entry-meta">
            <span class="posted-on">{{post.created_on | dater}} </span>
            <span><br></span>
            <span class="posted-on" id="readTime"> Loading... </span>
          </div>
          <div class="entry-content">
            <p v-html="post.content"></p>
          </div>
          <footer class="entry-footer" v-if="post.tag_set">
            <p>Tags: <a href="javascript:void(0)" v-for="tag in post.tag_set" :key="tag.id">{{tag}}</a></p>
          </footer>
        </div>
      </main>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios';
import $ from 'jquery';
export default {
  name: "Post",
  data() {
    return {
      route: this.$route.params.slug,
      post: [],
    }
  },
  mounted () {
    document.querySelector('html').style.overflow = 'visible';
    document.querySelector('body').style.overflow = 'visible';
    axios.get('https://184c0da960.pythonanywhere.com/posts/'+this.route)
      .then(data => {
        this.post = data.data;
        this.readingTime(this.post.content);
      });
      $(window).scroll (function () {
      var ratio = $(document).scrollTop () / (($(document).height () - $(window).height ()) / 100);
      $("#progress").width (ratio + "%");

      window.onscroll = function() {scroll()};

      // Get the header
      var title =  document.querySelector("#page > div.site-content > div > main > div > h1")

      // Get the offset position of the navbar
      var sticky = title.offsetTop;

      // Add the sticky class to the title when you reach its scroll position. Remove "sticky" when you leave the scroll position
      function scroll() {
        if (window.pageYOffset > sticky) {
          title.classList.add("active-title");
          title.classList.remove("entry-title");
        } else {
          title.classList.remove("active-title");
          title.classList.add("entry-title");
        }
      }
      
});
  },
  methods: {
    readingTime(text) {
      const wpm = 225;
      const words = text.trim().split(/\s+/).length;
      const time = Math.ceil(words / wpm);
      $('#readTime').text(' ' + time + ' minutes to read')
      // document.getElementById("readTime").innerText = time + 'minutes to read';
      $('body > div:nth-child(5)').css('mix-blend-mode', 'difference');
      $('body > div:nth-child(5)').css('background', '#fafafa');
      let hight = document.createElement('script')
      hight.setAttribute('src', '/assets/js/highlight.js')
      document.head.appendChild(hight);
    }
  },
  filters: {
        dater(value) {
            if (value) {
                var month= ["January","February","March","April","May","June","July", "August","September","October","November","December"];
                let date = new Date(Date.parse(value));
                let text = ''
                text += `${date.getDay()}-${month[date.getMonth()]} ${date.getFullYear()} at ${date.getHours()}:${date.getMinutes()}`
                return text
            }
        }
    },
    created() {
        $('script').each(function() {
        if (this.src === 'https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/3.1.2/fullpage.min.js') {

          this.parentNode.removeChild( this );
        }
    });
    }
}
</script>

<style>
@import url('/assets/style/admin.css');
@import url('/assets/style/highlight.css');

/* ===== Scrollbar CSS ===== */
  /* Firefox */
  * {
    scrollbar-width: thin;
    scrollbar-color: #484748 #726e6e;
  }
  *::-moz-selection { color: rgb(175, 150, 80)}
  *::selection { color: rgb(175, 150, 80); }  

  /* Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 10px;
  }

  *::-webkit-scrollbar-track {
    background: #726e6e;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #484748;
    border-radius: 5px;
    border: 3px none #938a8a;
  }

  code {
    margin: 1em 0;
    padding: 5px;
    background-color: #f3f3f3;
    overflow: auto;
    line-height: 1.5em;
    font-family: 'Consolas', sans-serif;
  }
  #cont {
 width: 100%;
 position: fixed;
 top: 0;
 left: 0;
 bottom: 0;
 height: 2px;
 z-index: 9999;
}

#progress {
 background: #3a3838;
 width: 0%;
 height: 6px;
}

  #page {
  margin: 3em auto 60px;
  padding: 0 30px;
  max-width: 732px;
}

.back {
  position: sticky;
  left: 00px;top: 10px;right: 0;bottom: 0;
  font-size: 16pt;
  display: inline;
  font-family: 'Title', sans-serif;
}

svg {
  margin-bottom: -3px;
  margin-left: -.5em;
}

img {
  max-width: 100%;
  max-height: 600px;
  z-index: 1;
}


pre {
  direction: ltr;
  padding: 10px;
  background-color: #f3f3f3;
  overflow: auto;
  font-family: monospace,monospace;
  font-size: 1em;
}

.site-main {
  margin: auto;
  max-width: 640px;
}

.site-main .entry-title,
.site-main .entry-meta {
  text-align: center;
}

h1.entry-title {
  margin: 60px 0 5px 0;
  font-size: 36px;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-family: 'Title', sans-serif;
}

.active-title {
  position: fixed;
  top: 0;left: 0;right: 0;
  transition: all 1s ease;
  font-size: 26px;
  margin-top: 20px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-family: 'Title', sans-serif;
  text-align: center;
  background-color: #d7dddd;
  color: #222121;
  max-width: 650px;
  padding: 15px;
  margin: auto;
  z-index: 100;

}

.entry-meta .posted-on {
  margin: 0;
  color: #64625C;
  font-size: 18px;
  font-style: italic;
}

.entry-content {
  margin-top: 60px;
  font-size: 22px;
}

.entry-content > p:first-of-type:first-line {
  text-transform: uppercase;
}

.entry-footer {
  margin: 90px 0;
  padding: 30px 0;
  font-size: 18px;
  font-style: italic;
  border-top: 1px solid #D6CCC7;
  border-bottom: 1px solid #D6CCC7;
}
.entry-footer p {
  margin: 0;
}


@media screen and (max-width: 680px) {
  #page {
    margin: 60px auto 30px;
  }
  
}
</style>