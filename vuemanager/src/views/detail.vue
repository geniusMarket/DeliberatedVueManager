<template>
  <div class="container">
    <div class="con">
      <div class="category">Title</div>
      <div class="item">{{detail.title}}</div>
    </div>
    <div class="con">
      <div class="category">Author</div>
      <div class="item">{{detail.author}}</div>
    </div>
    <div class="con">
      <div class="category">发布时间</div>
      <div class="item">{{detail.releaseTime}}</div>
    </div>
    <div class="con">
      <div class="category">状态</div>
      <div class="item">{{detail.status}}</div>
    </div>
    <div class="con">
      <div class="category">内容</div>
      <div class="item">{{detail.content}}</div>
    </div>
    <Button type="primary" style="margin-right: 5px">通过审核</Button>
    <Button type="error" >退回</Button>
  </div>
</template>

<script>
  export default {
    name: "detail",
    data() {
      return {
        class: 1,
        detail: {
          title: 'hhh我的意思是',
          author: 'cyj',
          releaseTime: '2021-1-12',
          content: 'hhh我的意思是，我们都先别',
          status: '未审核'
        }
      }
    }
  }
</script>

<style scoped lang="less">
.container {
  padding: 30px;
  font-size: 20px;
}
.con{
  margin-bottom: 20px;
  display: flex;
  .category {
    font-weight: bolder;
    width: 120px;
  }
}
</style>
