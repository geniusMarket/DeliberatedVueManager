<template>
  <div class="div container">
    <div class="title"><h1>深思熟Vue后台管理系统</h1></div>
<!--    <div>-->
<!--      <img src="../assets/img/bg.jpg" height="420" width="490" style="margin-left: 145px; margin-top: 100px;"/>-->
<!--    </div>-->
    <div class="login">
      <div class="form">
        <Form ref="form" :model="form">
          <FormItem prop="user">
            <Input type="text" v-model="form.user" placeholder="Username">
              <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
          </FormItem>
          <FormItem prop="password">
            <Input type="password" v-model="form.password" placeholder="Password">
              <Icon type="ios-lock-outline" slot="prepend"></Icon>
            </Input>
          </FormItem>
          <FormItem>
            <Button type="primary" @click="goLogin()" long>Sign in</Button>
          </FormItem>
        </Form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "login",
    data() {
      return {
        form: {
          user: '',
          password: ''
        }
      }
    },
    methods: {
      goLogin() {
        this.$router.push('/entry')
      }
    }
  }
</script>

<style scoped lang="less">
  .div{
    width: 100%;
    height: 100%;
    /*background: #41b833;*/
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .title{
    color: #41b833;
    margin-bottom: 20px;
  }
  .login{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .form{
      width: 400px;
      height: 250px;
      background: #ffffff;
      padding: 50px;
    }
  }
</style>
