// Metodo più efficiente

function initVueEff() {
  new Vue({
    el:".vue",
    data: {
      images: ['img/immagine-1.jpg',
                'img/immagine-2.jpg',
                'img/immagine-3.jpg',
                'img/immagine-4.jpg',
                'img/immagine-5.jpg',
    ],
    imageInd: "0",
  },



    methods: {
      nextClick: function () {
        this.imageInd++
        if (this.imageInd >= this.images.length) {

          this.imageInd = 0;
        }
      },
      prevClick: function () {
        this.imageInd--;
        if (this.imageInd < 0) {

          this.imageInd = this.images.length - 1;
        }
      },
    },

    mounted: function(){
      setInterval(this.nextClick,3000)
    }
  });
}

function initVue() {
  new Vue({
    el:".vue",
    data: {
      images: 'img/immagine-',
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

  // initVue();
  initVueEff();
}

$(init);
