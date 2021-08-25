<!--
 * @Description: 
 * @Autor: weiyang
 * @Date: 2021-08-25 15:59:38
 * @LastEditors: weiyang
 * @LastEditTime: 2021-08-25 16:27:07
-->
<template>
  <div id="container"></div>
</template>

<script>
import AMapLoader from '@amap/amap-jsapi-loader';
export default {
    name:"Test",
    data(){
      return {
        map:null
      }
    },
    mounted(){
        console.log(111)
        this.init()
    },
    methods:{
      init(){
        AMapLoader.load({
    "key": "434978618e94de4b558c139efcbaf269",              // 申请好的Web端开发者Key，首次调用 load 时必填
    "version": "2.0",   // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
    "plugins": [],           // 需要使用的的插件列表，如比例尺'AMap.Scale'等
    "AMapUI": {             // 是否加载 AMapUI，缺省不加载
        "version": '1.1',   // AMapUI 缺省 1.1
        "plugins":[],       // 需要加载的 AMapUI ui插件
    },
    // "Loca":{                // 是否加载 Loca， 缺省不加载
    //     "version": '1.3.2'  // Loca 版本，缺省 1.3.2
    // },
}).then((AMap)=>{
    this.map  = new AMap.Map('container');
}).catch(e => {
    console.log(e);
})
      }
    }
}
</script>

<style scoped lang="scss">
  #container{
    width: 100vw;
    height: 100vh;
  }
</style>