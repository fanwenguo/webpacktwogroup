<template>
        <div>
          <dl  
            v-for="(i,index) in data"
            :key="index">
            <dt>
              <img v-bind:src='i.img' alt=""/>
            </dt>
            <dd>
              <h3>{{i.text}}</h3>
              <p>{{i.addr}}</p>
              <p>{{i.name}}</p>
              <p>￥{{i.price}}</p>
              
            </dd>
          </dl>
          
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
          console.log(data)
          this.data=data
        })
    }

  }
</script>