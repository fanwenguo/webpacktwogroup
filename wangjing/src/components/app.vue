<template>
    <div class='box'>
        <div v-for="i in data" class='list' >
            <dl>
                <dt>
                    <img v-bind:src='i.img'/>
                </dt>
                <dd>
                    <h5>{{i.title}}</h5>
                    <p><span>￥{{i.price}}</span><span>￥1288</span></p>
                    <p><span>免运费</span><span>0人付款</span><span>{{i.addr}}</span></p>
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
<style>
    .box{
      width:100%;
      height:100%;
      overflow: hidden;
    }
    .list{
      width:100%;
      height:120px;
      border-bottom:1px solid #ccc;
      padding:10px;
      box-sizing:border-box;
      padding-left:120px;
      position:relative;
    }
    .list dt{
      position:absolute;
      top:10px;
      left:10px;
    }
    .list dd h5, .list dd p{
      line-height:30px;
    }
    .list dd p:nth-child(2) span:nth-child(1){
      color:red;
    }
    .list dd p:nth-child(2) span:nth-child(2){
      text-decoration:line-through;
      color:#ccc;
      margin-left:10px;
    }
    .list dd p:nth-child(3){
        display:flex;
        justify-content:space-between;
        color:#222;
    }

</style>