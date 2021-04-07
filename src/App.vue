<template >
  <div class="container-fluid">
    <div class="mb-3">
      <label for="githubUser" class="form-label">Email address</label>
      <input
        v-model="name"
        type="text"
        class="form-control"
        id="githubUser"
        placeholder="Enter Github Username"
      />
    </div>
    <button @click="newName = name" type="button" class="btn btn-success">
      Get User
    </button>
  </div>

  <h3>Repository list for {{ name }}</h3>
  <P v-if="userData.status !== 200"> User not found or no repositories for the user</P>
  <ul>
    <li v-for="repo in userData" :key="repo.name">{{ repo.name }}</li>
  </ul>
</template>

<script>
import { ref, watch, reactive, toRefs } from "vue";
export default {
  mounted() {
    this.initialize();
  },
  name: "App",
  components: {},
  setup() {
    const name = ref(null);
    const newName = ref(null);
    const state = reactive({ userData: [] });
    const client = ref(null);

    watch(() => {
      if (name.value) {
        console.log();
        client.value.request
          .get(`https://api.github.com/users/${name.value}/repos`, {
            headers: { "User-Agent": "Vue3-App" },
          })
          .then(
            (data) => {
              state.userData = JSON.parse(data.response);
              console.log("User Details", JSON.parse(data.response));
            },
            (error) => {
              state.userData = error
              console.error("error", error);
              console.log('state.userData',state.userData);
            }
          );
      }
    });
    return {
      name,
      newName,
      client,
      ...toRefs(state),
    };
  },
  methods: {
    initialize() {
      app.initialized().then((client) => {
        this.client = client;
      });
    },
  },
};
</script>

<style scoped>

</style>


