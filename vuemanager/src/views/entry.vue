<template>
  <div class="container">
    <bar></bar>
    <div class="menu">
      <Menu theme="dark" width="auto">
        <MenuItem name="1" to="/entry/question">
          <Icon type="md-help" />
          提问审核
        </MenuItem>
        <MenuItem name="2" to="/entry/article">
          <Icon type="md-document" />
          文章审核
        </MenuItem>
<!--        <MenuItem name="3" to="/manager/user">-->
<!--          <Icon type="ios-people" />-->
<!--          用户管理-->
<!--        </MenuItem>-->
<!--        <MenuItem name="4" to="/manager/monitor">-->
<!--          <Icon type="ios-stats" />-->
<!--          流量监控-->
<!--        </MenuItem>-->
<!--        <MenuItem name="5" to="/manager/report">-->
<!--          <Icon type="ios-jet" />-->
<!--          举报处理-->
<!--        </MenuItem>-->
<!--        <MenuItem name="6" to="/manager/history">-->
<!--          <Icon type="md-trending-up" />-->
<!--          操作记录-->
<!--        </MenuItem>-->
      </Menu>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>

  </div>
</template>

<script>
  import bar from "../components/bar";
  export default {
    name: "entry",
    components: { bar },
    data() {
      return {

      }
    },
    methods: {

    }
  }
</script>

<style scoped>
  .menu{
    float: left;
    width: 17%;
    height: 100%;
    background: #515a6e;
  }
  .content{
    padding: 1%;
    float: left;
    width: 83%;
    height: 100%;
  }
</style>
