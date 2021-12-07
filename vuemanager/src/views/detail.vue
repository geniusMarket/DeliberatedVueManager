<template>
  <div class="container">
    <div class="con">
      <div class="category">Title</div>
      <div class="item" v-if="Class === 'article'">{{detail.title}}</div>
      <div class="category" v-else>{{detail.detail}}</div>
    </div>
    <div class="con">
      <div class="category" v-if="Class === 'article'">Author</div>
      <div class="category" v-else>Asker</div>
      <div class="item" v-if="Class === 'article'">{{detail.author}}</div>
      <div class="category" v-else>{{detail.asker}}</div>
    </div>
    <div class="con">
      <div class="category">发布时间</div>
      <div class="item">{{detail.createTime}}</div>
    </div>
    <div class="con">
      <div class="category">状态</div>
      <div class="item" v-if="detail.status===0">未审核</div>
      <div class="item" v-if="detail.status===1">通过审核</div>
      <div class="item" v-if="detail.status===2">暂时安全</div>
      <div class="item" v-if="detail.status===3">暂时危险</div>
      <div class="item" v-if="detail.status===5">未通过审核</div>
    </div>
    <div class="con">
      <div class="category">内容</div>
      <div class="item">{{detail.detail}}</div>
    </div>
    <Button type="primary" style="margin-right: 5px" @click="modal=true">通过审核</Button>
    <Button type="warning" style="margin-right: 5px" @click="set(1)">退回</Button>
    <Button type="error" @click="set(2)">删除</Button>
    <Modal
        v-model="modal"
        title="提示"
        @on-ok="ok"
        @on-cancel="cancel">
      <p>确定通过审核吗</p>
    </Modal>
  </div>
</template>

<script>
  import service from "../api/services/service";
  import transformTime from "../api/format";
  export default {
    name: "detail",
    computed: {
      articleId() {
        return JSON.parse(this.$route.params.detail).id
      },
      openId() {
        return JSON.parse(this.$route.params.detail).author
      },
      Class() {
        return JSON.parse(this.$route.params.detail).class
      },
      detail1() {
        return JSON.parse(this.$route.params.detail).detail
      },
      title() {
        return JSON.parse(this.$route.params.detail).title
      },
      questionId() {
        return JSON.parse(this.$route.params.detail).questionId
      },
      reward() {
        return JSON.parse(this.$route.params.detail).reward
      },
    },
    data() {
      return {
        detail: {},
        modal: false
      }
    },
    mounted() {
      if(this.Class === 'article') {
        this.getDetail()
        this.id = this.articleId
      }
      else {
        this.getQuestion()
        this.id = this.questionId
      }
    },
    methods: {
      pass() {
        let _class = ''
        if(this.Class === 'article') _class="Article"
        else _class = "Question"
        service.post('changeStatus/'+_class+'/'+this.id+'/1')
          .then(res => {
            console.log(res);
          })
          .catch(err => {
            console.log(err);
          })
      },
      getDetail() {
        let _this = this
        // let param = {
        //   articleId: 10023,
        //   openId: "fans_123"
        // }
        let param = {
          articleId: this.articleId,
          openId: this.openId
        }
        console.log(param);

        service.post('getArticle', param)
          .then(res => {
            console.log(res);
            console.log(res.data.data.data);
            _this.detail = res.data.data.data
            _this.detail.createTime = transformTime(_this.detail.createTime)
          })
          .catch(err => {
            console.log(err);
          })
      },
      getQuestion() {
        let _this = this
        let param = {
          questionId: this.questionId
        }
        console.log(param);
        service.post('getQuestion', param)
          .then(res => {
            console.log(res);
            console.log(res.data.data);
            _this.detail = res.data.data
            _this.detail.createTime = transformTime(_this.detail.createTime)
          })
          .catch(err => {
            console.log(err);
          })
      },
      set(index) {
        this.modal = true
        if(index === 1) {
          this.content = "确定要退回吗？"
        }
        if(index === 2)
          this.content = "确定要删除吗？"
      },
      ok () {
        this.pass()
      },
      cancel () {

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
