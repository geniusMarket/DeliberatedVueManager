<template>
  <div class="bar">
    <div class="text">
      <h1>深思熟Vue后台管理系统</h1>
    </div>
    <div class="avatar">
      <Avatar size="large" style="color: #f56a00;background-color: #fde3cf">U</Avatar>
    </div>
  </div>
</template>

<script>
  export default {
    name: "bar"
  }
</script>

<style scoped lang="less">
.bar{
  width: 100%;
  height: 55px;
  background: #4c5466;
}
.text{
  float: left;
  margin-left: 15px;
  width: 350px;
  margin-top: 7px;
  color: white;
  font-size: 13px;
}
.avatar{
  float: right;
  margin-top: 7px;
  margin-right: 15px;
}
</style>
