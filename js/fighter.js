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
                <v-col cols="12" sm="6" md="4" lg="3" v-for="inner in section.grids" :key="inner.url">\
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
        <v-card class="pa-3">{{ loop.page }}</v-card>\
      </v-col>\
    </v-row>\
  </v-container>',
  data(){
    return{
      loop: data.detail
    }
  }
}

var notfound = {
  template: '<v-container fluid fill-height>\
    <v-row>\
      <v-col cols="12" class="transition" :class="status == 404 ? \'clickable\': \'\'" @click="status = 777">\
        <p href="#!" class="display-4 text-center">{{ status }}</a>\
        <p class="display-3 text-center">Not Found</p>\
      </v-col>\
    </v-row>\
  </v-container>',
  data(){
    return{
      status: 404
    }
  }
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
            component: notfound
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
        this.drawer = this.$router.currentRoute.fullPath != '/';
        this.$vuetify.breakpoint.width < 1264 ? this.drawer = false: '';
      }
    },
    watch: {
      $route (to){
        to.fullPath === '/' ? this.drawer = false : this.drawer = true;
        this.$vuetify.breakpoint.width < 1264 ? this.drawer = false: '';
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
