import { createApp } from 'vue'
import App from './App.vue' //컴포넌트 파일

// var App={
//     template:'<div>app</div>'
// }

createApp(App).mount('#app')


// new Vue({
//     render:h=>h(App),
//     components:{
//         'app':App
//     }
// }).$mount('#app')

// new Vue({
//     el:'#app',
//     render:h=>h(App)
// })