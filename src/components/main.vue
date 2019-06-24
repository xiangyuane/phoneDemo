<template>
  <div class="hello">
    <section class="mainBox">
      <router-view></router-view>
      <my-tab></my-tab>
    </section>
  </div>
</template>

<script>
import myTabbar from '@/components/tabMain/tabMain.vue';
export default {
  name: 'mainPage1',
  data () {
    return {
      value: ''
    }
  },
  components: {
    'my-tab':myTabbar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
