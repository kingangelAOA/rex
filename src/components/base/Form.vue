<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <template v-for="item in items">
      <v-text-field
        v-model="form[item.name]"
        :rules="item.rules"
        :counter="item.counter == 0 || item.counter == undefined ? 25 : item.counter"
        :label="item.label"
        required
        v-if="item.type == FormType.TEXT">
      </v-text-field>
      <v-select
        v-model="form[item.name]"
        :items="item.items"
        :rules="item.rules"
        :item-text="item.text"
        :item-value="item.value"
        :label="item.label"
        required
        v-else-if="item.type == FormType.SELECT">
      </v-select>
      <v-checkbox
        v-model="checkbox"
        :rules="[v => v || 'You must agree to continue!']"
        label="Do you agree?"
        required
        v-if="item.type == FormType.CHECKBOX">
      </v-checkbox>
      <v-btn
        :disabled="!valid"
        @click="item.function"
        v-if='item.type = FormType.BTN'
        right>
        {{item.text == undefined ? '' : item.text}}
      </v-btn>
    </template>
    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required>
    </v-text-field>
    <v-select
      v-model="select"
      :items="items"
      :rules="[v => v || 'Item is required']"
      label="Item"
      required>
    </v-select>
    <v-checkbox
      v-model="checkbox"
      :rules="[v => v || 'You must agree to continue!']"
      label="Do you agree?"
      required>
    </v-checkbox>
    v-spacer
    <v-btn
      :disabled="!valid"
      @click="item.function">
      submit
    </v-btn>
    <v-btn @click="clear">clear</v-btn>
  </v-form>
</template>

<script>
  import {FormType} from '../../constant'

  export default {
    name: "Form",
    props: {
      form: {
        type: Object,
        required: true
      },
    },
    components: {
      FormType
    },
    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters'
      ],
      email: '',
      emailRules: [
        v => v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ],
      select: null,
      items: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4'
      ],
      checkbox: false
    }),

    methods: {
      submit() {
        if (this.$refs.form.validate()) {
          // Native form submission is not yet supported
          axios.post('/api/submit', {
            name: this.name,
            email: this.email,
            select: this.select,
            checkbox: this.checkbox
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
