<template>
  <div id="app">
    <home-page :items="items" />
  </div>
</template>

<script>
  import HomePage from './components/HomePage'
  export default {
    name: 'App',
    components: {HomePage},
    data() {
      return {
        items: [
          {icon: 'contacts', text: 'Contacts', name: 'Test'},
          {icon: 'history', text: 'Frequently contacted'},
          {icon: 'content_copy', text: 'Duplicates'},
          {
            icon: 'keyboard_arrow_up',
            'icon-alt': 'keyboard_arrow_down',
            text: 'Labels',
            model: true,
            children: [
              {icon: 'add', text: 'Create label'}
            ]
          },
          {
            icon: 'keyboard_arrow_up',
            'icon-alt': 'keyboard_arrow_down',
            text: 'More',
            model: false,
            children: [
              {text: 'Import'},
              {text: 'Export'},
              {text: 'Print'},
              {text: 'Undo changes'},
              {text: 'Other contacts'}
            ]
          },
          {icon: 'settings', text: 'Settings'},
          {icon: 'chat_bubble', text: 'Send feedback'},
          {icon: 'help', text: 'Help'},
          {icon: 'phonelink', text: 'App downloads'},
          {icon: 'keyboard', text: 'Go to the old version'}
        ]
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
