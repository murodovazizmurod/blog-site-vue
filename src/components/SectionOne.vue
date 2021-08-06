<template>
  <div class="section">
    <header>
        <div class="logo">
            <h1 class="gletch" title=":)">:)</h1>
        </div>
        <div class="nav">
            <a href="#about"><h3 title="about">about</h3></a>
            <a href="#posts"><h3 title="posts">posts</h3></a>
        </div>
    </header>
    <section class="hello" style="width: 80%; margin: 0 auto;">
        <h1 title="Hello, friend!" style="font-size: 55pt; font-family: 'Title', sans-serif;">Hello, friend!</h1>
        <p class="wave">My name is Azizmurod. I'm Web Developer</p>
    </section>
    <a class="scroll" href="#about">
        <span class="link__arrow">
          <span></span>
          <span></span>
        </span>
        <span class="link__line"></span>
        <span class="link__text">About</span>
      </a>
    <model-viewer id="model" class="unselectable model" auto-rotate src="/assets/models/scene.gltf" loading="eager"></model-viewer>
  </div>
</template>

<script>

import ModelViewer from '@google/model-viewer'
export default {
  data () {
    return {
    }
  },
  name: 'SectionOne',
  components: {
    ModelViewer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

