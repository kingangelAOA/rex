<template>
  <div class="text-xs-center">
    <v-alert :value="alert" :type="type" dismissible>
      {{ this.message }}
    </v-alert>
  </div>
</template>

<script>
  import {createNamespacedHelpers} from 'vuex'

  const {mapState} = createNamespacedHelpers('alert')

  export default {
    name: "Alert",
    computed: {
      ...mapState({
        alert: state => state.status,
        type: state => state.type,
        message: state => state.message
      })
    }
  }
</script>

<style scoped>

</style>
