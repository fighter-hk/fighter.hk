var fighter = new Vue(
  {
    el: '#app',
    vuetify: new Vuetify(),
    router: new VueRouter(),
    data: {
      isHome: true,
      sections: [
        {
          title: '工具合集',
          icon: 'mdi-toolbox',
          grids: [
            {
              url: '/live',
              img: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
              text: '直播'
            }
          ]
        },
        {
          title: '被捕須知',
          icon: 'mdi-charity'
        }
      ]
    },
    computed: {
      drawer: function(){
        return this.isHome === false;
      }
    }
  }
)


fighter = {

}
