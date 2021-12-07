<template>
  <div>
    <Menu mode="horizontal" :theme="theme1" active-name="1" @on-select="selectMenu">
      <MenuItem name="1">
        未审核
      </MenuItem>
      <MenuItem name="2">
        暂时安全
      </MenuItem>
      <MenuItem name="3">
        暂时危险
      </MenuItem>
      <MenuItem name="4">
        未通过审核
      </MenuItem>
      <MenuItem name="5">
        通过审核
      </MenuItem>
    </Menu>
    <Table ref="selection" border :columns="columns" v-if="nowName==='1'" :data="data1">
      <template slot-scope="{ row }" slot="title">
        <strong>{{ row.title }}</strong>
      </template>
      <template slot-scope="{ row, index }" slot="action">
        <Button type="primary" size="small" style="margin-right: 5px" @click="show(row.articleId, row.author, index)">查看</Button>
        <Button type="warning" size="small" style="margin-right: 5px" @click="set(row.articleId, row.author, 1)">退回</Button>
        <Button type="error" size="small" @click="set(row.articleId, row.author, 2)">删除</Button>
      </template>
    </Table>
    <Table ref="selection" border :columns="columns" v-if="nowName==='2'" :data="data2">
      <template slot-scope="{ row }" slot="title">
        <strong>{{ row.title }}</strong>
      </template>
      <template slot-scope="{ row, index }" slot="action">
        <Button type="primary" size="small" style="margin-right: 5px" @click="show(row.articleId, row.author, index)">查看</Button>
        <Button type="warning" size="small" style="margin-right: 5px"  @click="set(row.articleId, row.author, 1)">退回</Button>
        <Button type="error" size="small" @click="set(row.articleId, row.author, 2)">删除</Button>
      </template>
    </Table>
    <Table ref="selection" border :columns="columns" v-if="nowName==='3'" :data="data3">
      <template slot-scope="{ row }" slot="title">
        <strong>{{ row.title }}</strong>
      </template>
      <template slot-scope="{ row, index }" slot="action">
        <Button type="primary" size="small" style="margin-right: 5px" @click="show(row.articleId, row.author, index)">查看</Button>
        <Button type="warning" size="small" style="margin-right: 5px"  @click="set(row.articleId, row.author, 1)">退回</Button>
        <Button type="error" size="small" @click="set(row.articleId, row.author, 2)">删除</Button>
      </template>
    </Table>
    <Table ref="selection" border :columns="columns" v-if="nowName==='4'" :data="data4">
      <template slot-scope="{ row }" slot="title">
        <strong>{{ row.title }}</strong>
      </template>
      <template slot-scope="{ row, index }" slot="action">
        <Button type="primary" size="small" style="margin-right: 5px" @click="show(row.articleId, row.author, index)">查看</Button>
        <Button type="warning" size="small" style="margin-right: 5px"  @click="set(row.articleId, row.author, 1)">退回</Button>
        <Button type="error" size="small" @click="set(row.articleId, row.author, 2)">删除</Button>
      </template>
    </Table>
    <Table ref="selection" border :columns="columns" v-if="nowName==='5'" :data="data5">
      <template slot-scope="{ row }" slot="title">
        <strong>{{ row.title }}</strong>
      </template>
      <template slot-scope="{ row, index }" slot="action">
        <Button type="primary" size="small" style="margin-right: 5px" @click="show(row.articleId, row.author, index)">查看</Button>
        <Button type="warning" size="small" style="margin-right: 5px"  @click="set(row.articleId, row.author, 1)">退回</Button>
        <Button type="error" size="small" @click="set(row.articleId, row.author, 2)">删除</Button>
      </template>
    </Table>
    <div style="margin-top: 1%; float: left; width: 300px;">
      <Button @click="handleSelectAll(true)" style="margin-right: 1%;">全选</Button>
      <Button @click="handleSelectAll(false)" style="margin-right: 1%;">全不选</Button>
      <Button @click="handleDelete()">选中删除</Button>
    </div>
    <div style="float: right; margin-top: 1.5%;">
      <Page :total=totalNum1 :page-size=8 :current="currentPage" size="small" show-total/>
    </div>

    <Modal
        v-model="modal"
        title="提示"
        @on-ok="ok"
        @on-cancel="cancel">
      <p>{{content}}</p>
    </Modal>
  </div>
</template>

<script>
  import service from "../api/services/service";
  export default {
    name: "article",
    data() {
      return {
        modal: false,
        nowName: '1',
        theme1: 'light',
        content: '',
        columns: [
          {
            type: 'selection',
            width: 50,
            align: 'center'
          },
          {
            title: 'Title',
            key: 'title',
            slot: 'title'
          },
          {
            title: 'Author',
            key: 'author'
          },
          {
            title: 'CreateTime',
            key: 'createTime'
          },
          {
            title: 'Action',
            slot: 'action',
            align: 'center'
          }
        ],
        currentPage: 1,
        totalNum1: 0,
        data1: [],
        totalNum2: 0,
        data2: [],
        totalNum3: 0,
        data3: [],
        totalNum4: 0,
        data4: [],
        totalNum5: 0,
        data5: [],
        id: '',
        openId: ''
      }
    },
    mounted() {
      this.getData()
    },
    methods: {
      getData() {
        const _this = this
        service.post('getVerify')
          .then(res => {
            console.log(res);
            // 未审核
            _this.data1 = res.data.articles.filter(item => {
              return item.status === 0
            })
            _this.totalNum1 = _this.data1.length
            // 暂时安全
            _this.data2 = res.data.articles.filter(item => {
              return item.status === 2
            })
            _this.totalNum2 = _this.data1.length
            // 暂时危险
            _this.data3 = res.data.articles.filter(item => {
              return item.status === 3
            })
            _this.totalNum3 = _this.data1.length
            // 未通过审核
            _this.data4 = res.data.articles.filter(item => {
              return item.status === 5
            })
            _this.totalNum4 = _this.data1.length
            // 通过审核
            _this.data5 = res.data.articles.filter(item => {
              return item.status === 1
            })
            _this.totalNum5 = _this.data1.length
          })
          .catch(err => {
            console.log(err);
          })
      },
      selectMenu(name) {
        this.nowName = name
      },
      handleSelectAll(status) {
        this.$refs.selection.selectAll(status);
      },
      show(id, author) {
        let data = {
          id: id,
          author: author,
          class: 'article'
        }
        this.$router.push('/detail/' + JSON.stringify(data))
      },
      set(id, openId, index) {
        this.modal = true
        console.log(id, openId, index);
        this.id = id
        this.openId = openId
        if(index === 1) {
          this.content = "确定要退回这篇文章吗？"
        }
        if(index === 2)
          this.content = "确定要删除这篇文章吗？"
      },
      remove(index) {
        console.log(index);
      },
      handleDelete() {

      },
      ok () {
        service.post('changeStatus/Article/'+this.id+'/5')
          .then(res => {
            console.log(res);
          })
          .catch(err => {
            console.log(err);
          })
      },
      cancel () {

      }
    }
  }
</script>

<style scoped>

</style>


