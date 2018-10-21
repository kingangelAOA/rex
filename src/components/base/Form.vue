<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <template v-for="item in items">
      <v-text-field
        v-model="form[item.name]"
        :rules="item.rules"
        :counter="item.counter === 0 || item.counter === undefined ? 25 : item.counter"
        :label="item.label"
        required
        v-if="item.type === FormType.TEXT">
      </v-text-field>
      <v-select
        v-model="form[item.name]"
        :items="item.items"
        :rules="item.rules"
        :item-text="item.text"
        :item-value="item.value"
        :label="item.label"
        required
        v-else-if="item.type === FormType.SELECT">
      </v-select>
      <v-checkbox
        v-model="form[item.name]"
        :rules="item.rules"
        label="Do you agree?"
        required
        v-if="item.type === FormType.CHECKBOX">
      </v-checkbox>
    </template>
    <template>
      <v-btn
        v-if="hasSubmit"
        :disabled="!valid"
        @click="submit"
        right>
        Submit
      </v-btn>
      <v-btn
        @click="clear"
        right>
        Submit
      </v-btn>
    </template>
  </v-form>
</template>

<script>
  import {FormType} from '../../constant'
  import {createNamespacedHelpers} from 'vuex'

  const {mapState: requestMapState, mapActions: requestMapActions} = createNamespacedHelpers('request');

  export default {
    name: "Form",
    props: {
      form: {
        type: Object,
        required: true
      },
      items: {
        type: Array,
        required: true
      },
      postUrl: {
        type: String
      },
      postOptions: {
        type: Object
      },
      hasSubmit: {
        type: Boolean,
        required: true
      }
    },
    created: {

    },
    components: {
      FormType
    },
    computed: {
      ...requestMapState({
        isFetching: state => state.isFetching,
        isError: state => state.isError,
        successResponseJson: state => state.successResponseJson,
        failedResponseJson: state => state.failedResponseJson
      })
    },
    data() {
      return {
        valid: false
      }
    },
    methods: {
      ...requestMapActions([
        'fetchRequest'
      ]),
      submit() {
        if (this.$refs.form.validate()) {
          this.fetchRequest({
            url: this.postUrl,
            options: this.postOptions
          })
        }
      },
      clear() {
        this.$refs.form.reset()
      }
    }
  }
</script>

<style scoped>

</style>
