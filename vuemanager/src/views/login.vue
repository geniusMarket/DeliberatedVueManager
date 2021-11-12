<template>
  <div>
    1
    <button @click="test()">2222</button>
  </div>
</template>

<script>
  export default {
    name: "login",
    data() {
      return {

      }
    },
    methods: {
      test() {
        this.$router.push("/entry")
      }
    }
  }
</script>

<style scoped>

</style>
