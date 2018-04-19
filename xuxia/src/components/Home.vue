<template>
    <div class="home">
        <dl 
            v-for="(item,index) in data" 
            :key="index"
            class="dl"
            >
            <dt>
                <img :src="item.img" alt="">
            </dt>
            <dd>
                <h5>{{item.paragraph}}</h5>
                <span>{{item.addr}}</span>
            </dd>
        </dl>
    </div>
</template>

<script>
  export default {
    data(){
        return {
          data:[]
        }
    },
    beforeCreate(){
        this.ajax({
          url:"/api",
          type:"get"
        }).then((data)=>{
          this.data=data
        })
    }

  }
</script>
<style scoped>
    .home {
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
    .dl{
        width: 90%;
        height: 120px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .dl dt{
        width: 120px;
        text-align: center;
    }
    .dl dd{
        flex:1;
        display: flex;
        margin:0;
        flex-direction: column;
    }

</style>
