<template>
    <div class="contentBox">
        <div v-for="i in data" class="content">
          <dl>
            <dt>
              <img :src="i.img"/>
            </dt>
            <dd> 
              <p class="txt">{{i.infomation}}</p>
              <span> {{i.price}}</span>
              <p class="des">
                <span>免运费</span>
                <span>0人付款</span>
                <span>{{i.addr}}</span>
              </p>
            </dd>
          </dl>
        </div>
    </div>
</template>

<script>
  export default {
    name:"app",
    data(){
        return {
          data:[]
        }
    },
    beforeCreate(){
        this.$ajax({
          url:"/api",
          type:"get"
        }).then((data)=>{
          console.log(data.list)
          this.data=data.list
        })
    }

  }
</script>
<style scoped>
  *{
    margin:0;
    padding:0;
    list-style:none;
  }
  htlm,body,.wrap,.contentBox{
    width:100%;
    height:100%;
  }
  .content{
    border-bottom:1px solid #ccc;
  }
  .content,.content dl {
    width:100%;
    height:150px;
    margin-top:10px;
  }
  .content dl{
    display:flex;
    justify-content:space-around;
    align-items:center;
  }
  .content dl dd{
    width:60%;
    margin-left:10px;
  }
  .txt{
    width:100%;
    height:100%;
     text-overflow:ellipsis;
     white-space:nowrap;
     overflow:hidden;
  }
  .content dl dd .des{
    width:100%;
    height:100%;
    display:flex;
    justify-content:space-around;
    align-items:center;
  }
</style>