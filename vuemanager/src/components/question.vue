<template>
  <div>
    <Menu mode="horizontal" :theme="light" active-name="1">
      <MenuItem name="1">
        <Icon type="ios-paper" />
        未审核
      </MenuItem>
      <MenuItem name="2">
        <Icon type="ios-people" />
        已审核
      </MenuItem>
    </Menu>
    <Table ref="selection" border :columns="columns" :data="data">
      <template slot-scope="{ row }" slot="title">
        <strong>{{ row.title }}</strong>
      </template>
      <template slot-scope="{ row, index }" slot="action">
        <Button type="primary" size="small" style="margin-right: 5px" @click="show(index)">View</Button>
        <Button type="error" size="small" @click="remove(index)">Delete</Button>
      </template>
    </Table>
    <div style="margin-top: 1%; float: left; width: 300px;">
      <Button @click="handleSelectAll(true)" style="margin-right: 1%;">全选</Button>
      <Button @click="handleSelectAll(false)" style="margin-right: 1%;">全不选</Button>
      <Button @click="handleDelete()">选中删除</Button>
    </div>
    <div style="float: right; margin-top: 1.5%;">
      <Page :total=totalNum :page-size=8 :current="currentPage" size="small" show-total />
    </div>
  </div>
</template>

<script>
  export default {
    name: "question",
    data() {
      return {
        search_box: '',
        select: 'task_id',
        columns: [
          {
            type: 'selection',
            width: 60,
            align: 'center'
          },
          {
            title: 'Title',
            key: 'title',
            slot: 'title'
          },
          {
            title: 'UserId',
            key: 'userid'
          },
          {
            title: 'Content',
            key: 'content'
          },
          {
            title: 'Release time',
            key: 'release_time'
          },
          {
            title: 'Action',
            slot: 'action',
            align: 'center'
          }
        ],
        data: [
          {
            title: 'John Brown',
            userid: 'test@qq.com',
            content: '111111111111111111111111111111111111111111',
            release_time: '2021-03-31',
          },
          {
            title: 'John Brown',
            userid: 'test@qq.com',
            content: '111111111111111111111111111111',
            release_time: '2021-03-31',
          },
          {
            title: 'John Brown',
            userid: 'test@qq.com',
            content: '2222222222222222222222222',
            release_time: '2021-03-31',
          },
          {
            title: 'John Brown',
            userid: 'test@qq.com',
            reporterid: '232222222222222222',
            content: '1111111111111111111111111111',
            release_time: '2021-03-31',
          },
          {
            title: 'John Brown',
            userid: 'test@qq.com',
            reporterid: 'mmmmmmmmmmmm',
            content: '222222222222222222',
            release_time: '2021-03-31',
          },
        ],
        totalNum: 100,
        currentPage: 2
      }
    },
    methods: {
      search() {

      },
      handleSelectAll (status) {
        this.$refs.selection.selectAll(status);
      },
      show(index) {
        console.log(index);
        this.$router.push('/detail')
      },
      remove(index) {
        console.log(index);
      },
      handleDelete() {

      }
    }
  }
</script>

<style scoped>

</style>

