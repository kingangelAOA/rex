<template>
  <v-container fluid class="text-xs-center">
    <v-layout justify-space-between row wrap>
      <v-flex xs12 class="mt-5">
        <v-badge v-model="item.show" :color="item.cyan" :left="item.left" v-for="item in items">
          <span slot="badge">6</span>
          <v-icon large :color="item.iconColor">{{ item.icon }}</v-icon>
        </v-badge>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    name: "Badges",
    props: {
      items: {
        type: Array,
        required: true
      }
    }
  }
</script>

<style scoped>

</style>
