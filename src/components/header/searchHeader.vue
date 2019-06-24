<template>
  <div class="sercher">
    <div>
      <mt-search
        v-model="value"
        cancel-text=""
        placeholder="搜索">
      </mt-search>
    </div>
  </div>
</template>
<style>
  .mint-search{
    position: fixed;
    top:0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 50px;
  }
</style>
<script>
export default {
  name: 'searchHeader',
  data () {
    return {
      value: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
