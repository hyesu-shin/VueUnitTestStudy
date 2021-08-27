<template>
  <!-- jest __test__ component -->
  <div>
    {{ msg }}
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'TodoList for Hyesu'
    }
  },
  // computed: {
  //   reversedMsg () {
  //     return this.reversedString(this.msg)
  //   }
  // },
  // methods: {
  //   reversedString (str) {
  //     return str.split('').reverse().join('')
  //   }
  // }
}
</script>

<style scoped>

</style>
