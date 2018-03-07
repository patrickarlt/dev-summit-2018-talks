<template>
  <section class="card-wrapper">
    <header>
      <p>In header</p>
      <slot name="header"></slot>
    </header>

    <div class="card-body">
      <slot></slot>
    </div>

    <footer>
      <slot name="footer"></slot>
    </footer>
  </section>
</template>

<script>
export default {
  name: "VueCard"
};
</script>

<style scoped>
.card-wrapper {
  border: 1px solid #efefef;
}

header {
  padding: 0.25rem;
  background: #f8f8f8;
  border-bottom: 1px solid #efefef;
}

.card-body {
  padding: 0.25rem;
}

footer {
  padding: 0.25rem;
  background: #f8f8f8;
  border-top: 1px solid #efefef;
}
</style>
