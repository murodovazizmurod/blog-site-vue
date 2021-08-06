<template>
    <div class="section">
        <p class="matrix about">Some blog</p>
            <div class="blogs">
                    <div class="post" v-for="post in posts" :key='post.id'>
                        <img :src="post.poster" :alt="post.title" style="border-bottom-left-radius: 5px;border-top-left-radius: 5px;">
                        <div class="content">
                            <span> {{ post.created_on | dater}} <i class="line"></i> by {{ post.author }}</span>
                            <h1><router-link :to="'/' + post.slug">{{ post.title }}</router-link></h1>
                            <br><br><br>
                            <router-link :to="'/' + post.slug">Read More</router-link>
                        </div>
                    </div>
                <!-- <center><a href="#">More</a></center> -->
            </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: "SectionThree",
    mounted () {
        axios.get('https://184c0da960.pythonanywhere.com/posts/')
        .then(data => {
            this.posts = data.data;
            console.log(new Date(Date.parse(this.posts[0].created_on)).getDate());

        })
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
    data() {
        return {
            posts: null
        }
    },
}   
</script>