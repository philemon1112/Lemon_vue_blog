<template>
  <div class="home">
    <h1>Home</h1>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts?.length">
      <PostLists :posts="posts" />
    </div>

    <div v-else>Loading ...</div>
   
   <!-- <div v-for="post in posts" :key="post?.id"> {{ post?.title }}</div> -->
  </div>
</template>

<script>

import PostLists from '../components/PostLists.vue';
import getPosts from '../composable/getPosts';

export default {
  name: 'HomeView',
  components: { PostLists},
  setup(){
    const {posts, error , load} = getPosts()

    load()

    return {posts, error}
  },
}
</script>
