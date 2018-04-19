import Vue from "vue"
import Home from "./components/Home"
import ajax from "./tools"
Vue.prototype.ajax = ajax

var vm = new Vue({
    el: "#app",
    template: "<div><Home /></div>",
    components: {
        Home
    }
})