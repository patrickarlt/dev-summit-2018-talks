<template>
  <div class="wrapper">
    <input type="text" ref="input" v-bind:value="text">
    <button v-on:click="copyText">{{label}}</button>
  </div>
</template>

<script>
export default {
  name: "VueCopyableText",
  props: {
    text: String,
    label: String
  },
  methods: {
    copyText: function() {
      const copyTarget = document.createElement("input");
      copyTarget.value = this.text;
      document.body.appendChild(copyTarget);

      try {
        copyTarget.select();
        document.execCommand("copy");
      } catch (err) {
        this.$refs.input.select();
      } finally {
        document.body.removeChild(copyTarget);
      }

      this.$emit("copy");
    }
  }
};
</script>

<style scoped>
.wrapper {
  display: flex;
}

input {
  flex: 1 1 auto;
  border: 1px solid #333;
  border-right: none;
  font-family: sans-serif;
  padding: 0.5rem;
  margin: 0;
}

button {
  flex: 0 0 auto;
  border: 1px solid #333;
  background: #efefef;
  font-family: sans-serif;
  padding: 0.5rem;
}
</style>
