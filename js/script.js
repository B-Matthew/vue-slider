function initVue() {
  new Vue({
    el:".vue",
    data: {
      image: 'img/immagine-',
      imageNum: "1",
      imageFormat: ".jpg"
    },

    methods: {
      nextClick: function () {
        if (this.imageNum == 5) {

          this.imageNum = 1;
        }else {

          this.imageNum++;
        }
      },
      prevClick: function () {
        if (this.imageNum == 1) {

          this.imageNum = 5;
        }else {

          this.imageNum--;
        }
      },
    },

    mounted: function(){
      setInterval(this.nextClick,3000)
    }
  });
}

function init() {

  initVue();
}

$(init);
