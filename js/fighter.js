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
            </v-container>'
}

var inner = {
  template: '<v-container fluid fill-height class="grey lighten-1">\
    <v-row>\
      <v-col cols="12">\
        <v-card class="pa-3">inner demo</v-card>\
      </v-col>\
    </v-row>\
  </v-container>'
}

var notfound = {
  template: '<v-container fluid fill-height>\
    <v-row>\
      <v-col cols="12">\
        <p class="display-4 text-center">404</p>\
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
            component: home,
            props: this.sections
          },
          {
            path: '/inner/:url',
            component: inner
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
      sections: [
        {
          title: '工具合集',
          icon: 'mdi-toolbox',
          grids: [
            {
              url: '/inner/live',
              img: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
              text: '直播'
            },
            {
              url: '/inner/timetable',
              img: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
              text: '日程'
            },
            {
              url: '/inner/yellow-blue',
              img: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
              text: '黃藍'
            },
            {
              url: '/inner/popo',
              img: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
              text: '黑警'
            },
            {
              url: '/inner/map',
              img: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
              text: '地圖'
            }
          ]
        },
        {
          title: '被捕須知',
          icon: 'mdi-charity',
          grids: [
            {
              url: '/inner/arrested',
              img: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
              text: '我俾狗咬'
            },
            {
              url: '/inner/help-friend',
              img: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
              text: 'Friend俾狗咬'
            },
            {
              url: '/inner/help-family',
              img: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
              text: '家人俾狗咬'
            }
          ]
        }
      ]
    },
    methods:{
      checkHome: function(){
        console.error(this.$router.currentRoute.fullPath != '/');
        this.drawer = this.$router.currentRoute.fullPath != '/';
      }
    },
    updated(){
      this.checkHome();
    },
    mounted(){
      this.checkHome();
    }
  }
)
