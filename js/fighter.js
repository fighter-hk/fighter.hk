var home = {
  template: '<v-container fluid class="grey lighten-1 align-start pa-0">\
              <v-row no-gutters v-for="section in sections" :key="section.icon">\
                <v-col cols="12">\
                  <v-card tile class="pa-3">\
                    <v-card-title class="pa-0">\
                      <v-icon class="pr-2">{{ section.icon }}</v-icon>\
                      {{ section.title }}\
                    </v-card-title>\
                  </v-card>\
                </v-col>\
                <v-col cols="3" v-for="inner in section.grids" :key="inner.url">\
                  <router-link :to="inner.url" class="home-grids">\
                    <v-card tile class="d-flex justify-center align-center" dark>\
                      <v-img :src="inner.img" height="250">\
                        <span class="display-2">{{inner.text}}</span>\
                      </v-img>\
                    </v-card>\
                  </router-link>\
                </v-col>\
              </v-row>\
            </v-container>',
  data(){
    return{
      sections: data.sections
    }
  }
}

var inner = {
  props: ['page'],
  template: '<v-container fluid fill-height class="grey lighten-1">\
    <v-row>\
      <v-col cols="12">\
        <v-card class="pa-3">inner {{ page }}</v-card>\
      </v-col>\
    </v-row>\
  </v-container>'
}

var notfound = {
  template: '<v-container fluid fill-height>\
    <v-row>\
      <v-col cols="12">\
        <p href="#!" class="display-4 text-center" @click="status = \'777\'">{{ status }}</a>\
        <p class="display-3 text-center">Not Found</p>\
      </v-col>\
    </v-row>\
  </v-container>'
}

var fighter = new Vue(
  {
    el: '#app',
    vuetify: new Vuetify(),
    router: new VueRouter(
      {
        routes: [
          {
            path: '/',
            component: home
          },
          {
            path: '/inner/:page',
            component: inner,
            props: true
          },
          {
            path: '/*',
            component: notfound,
            props: {
              status: '404'
            }
          }
        ]
      }
    ),
    data: {
      drawer: false,
      sections: data.sections
    },
    methods:{
      checkHome: function(){
        console.error(this.$router.currentRoute.fullPath != '/');
        this.drawer = this.$router.currentRoute.fullPath != '/';
      }
    },
    watch: {
      $route (to){
        to.fullPath === '/' ? this.drawer = false : this.drawer = true;
     }
    },
    updated(){
      // this.checkHome();
    },
    mounted(){
      this.checkHome();
    }
  }
)
