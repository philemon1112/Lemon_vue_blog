import { ref } from 'vue';

export default function getPost(id) {
    const post = ref(null);
    const error = ref(null);

    const load = async() => {
      try {
        let data = await fetch(`http://localhost:3000/posts/${id}`)
        if(!data.ok){
          throw Error("No data available")
        }
        post.value = await data.json()
      } catch (err) {
        error.value = err.message
        console.log(error.value)
      }
    }

    return {post, error, load}
}

