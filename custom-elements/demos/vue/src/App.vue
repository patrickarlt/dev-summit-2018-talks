<template>
  <div class="grid-container">
    <div class="column-24">
      <VueCopyableText v-on:copy="logCopy" class="leader-1 trailer-1" label="Copy Me!" text="Copied!"></VueCopyableText>

      <VueCard class="leader-1">
        <h4 class="trailer-0" slot="header">Header</h4>
        <p>This is the body of the card&hellip;</p>
        <p class="font-size--2 text-dark-gray trailer-0" slot="footer">Misc Info</p>
      </VueCard>
    </div>
  </div>
</template>

<script>
import VueCard from "./components/Card.vue";
import VueCopyableText from "./components/CopyableText.vue";

export default {
  name: "app",
  components: {
    VueCard,
    VueCopyableText
  },
  methods: {
    logCopy: function() {
      console.log("copy event");
    }
  }
};
</script>
