<template>
  <div class="home">
    <h1>Home</h1>
    <input type="text" v-model="search">
    <p>Search Term - {{ search }}</p>
   <div v-for="name in matchingNames" :key="name"> {{ name }}</div>
  </div>
</template>

<script>
import { computed, reactive, ref, watch, watchEffect } from 'vue';

export default {
  name: 'HomeView',
  setup(){
    const search = ref('')
    const names = ref([
      'Mario',
      'Luigi',
      'Yoshi',
      "kong",
      "Peach",
      "Toad",
      "Koopa",
      "Princess Peach"
    ])

    watch(search, ()=> {
      console.log('Watch run')
    })

    watchEffect(()=> {
      console.log("Watch Effect function")
    })

    const matchingNames = computed(()=> {
      return names.value.filter((name)=> name.includes(search.value))
    })

    return { names, search, matchingNames}
  },
}
</script>
