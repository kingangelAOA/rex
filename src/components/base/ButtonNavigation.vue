<template>
  <v-card height="200px" flat>
    <div class="headline text-xs-center pa-5">
      {{ this.html }}
    </div>
    <v-bottom-nav
      :active.sync="bottomNav"
      :value="true"
      absolute
      color="transparent">
      <v-btn
        color="teal"
        flat
        :value="item.value"
        v-for="item in items">
        <span>{{ item.name }}</span>
        <v-icon>{{ item.icon }}</v-icon>
      </v-btn>
    </v-bottom-nav>
  </v-card>
</template>

<script>
  export default {
    name: "ButtonNavigation",
    props: {
      html: {
        type: String,
        required: true
      },
      items: {
        type: Array,
        required: true
      }
    },
    created: {

    },
    methods: {
      
    },
    data() {
      return {
        bottomNav: ''
      }
    }
  }
</script>

<style scoped>

</style>
