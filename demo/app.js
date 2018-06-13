
export default {
  name: 'app',
  components: {
  },
  data () {
    return {
      title: 'Vue micro:bit BLE master',
      subtitle: 'Vue 2.x component for micro:bit interface',
      imageSelected: {
        id: '',
        src: '',
        alt: ''
      },
      imageMultipleSelected: [],
      dataImages: [{
        id: '1',
        src: 'http://placekitten.com/200/200',
        alt: 'jQuery'
      }, {
        id: '2',
        src: 'http://placekitten.com/200/200',
        alt: 'Angular'
      }, {
        id: '3',
        src: 'http://placekitten.com/200/200',
        alt: 'Vue.js'
      }, {
        id: '4',
        src: 'http://placekitten.com/200/200',
        alt: 'React'
      }],
      initialSelected: [
        {
          id: '2',
          src: 'http://placekitten.com/200/200',
          alt: 'Angular'
        },
        {
          id: '3',
          src: 'http://placekitten.com/200/200',
          alt: 'Vue.js'
        }
      ],
      template: ``,
    }
  },
  methods: {
    addImage: function() {

    }
  }
}
