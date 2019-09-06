new Vue({
    el: '#app',
    data: {
      order: false,
      list: [
        { id: 1, name: 'りんご', price: 100 },
        { id: 2, name: 'ばなな', price: 200 },
        { id: 3, name: 'いちご', price: 300 }
      ]
    },
    computed: {
      // orderの値でリストの順番を反転する算出プロパティ
      sortedList: function () {
        // LodashのorderByメソッドを使用
        return _.orderBy(this.list, 'price', this.order ? 'desc' : 'asc')
      }
    }
  })

  new Vue({
    el: '#app1',
    data: {
      list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    },
    methods: {
      doShuffle: function () {
        this.list = _.shuffle(this.list)
      },
      doAdd: function() {
        var newNumber = Math.max.apply(null, this.list) + 1
        var index = Math.floor(Math.random() * (this.list.length + 1))
        this.list.splice(index, 0, newNumber)
      },
      doRemove: function (index) {
        this.list.splice(index, 1)
      }
    }
  })

  // SVGパーツのコンポーネントを定義
Vue.component('my-circle', {
    template: '<circle cx="80" cy="75" r="50" v-bind:fill="fill"/>',
    props: {
      fill: String
    }
  })
  new Vue({
    el: '#app2',
    data: {
      toggle: false
    },
    computed: {
      fill: function () {
        return this.toggle ? 'lightpink' : 'skyblue'
      }
    }
  })

  new Vue({
    el: '#app3',
    data: {
      show: true
    },
    methods: {
      // Enter
      beforeEnter: function (el) {
        console.log('before-enter')
      },
      enter: function (el, done) {
        console.log('enter')
        setTimeout(done, 1000)
      },
      afterEnter: function (el) {
        console.log('after-enter')
      },
      enterCancelled: function (el) {
        console.log('enter-cancelled')
      },
      // Leave
      beforeLeave: function (el) {
        console.log('before-leave')
      },
      leave: function (el, done) {
        console.log('leave')
        setTimeout(done, 1000)
      },
      afterLeave: function (el) {
        console.log('after-leave')
      },
      // v-show と共に使うときだけ leaveCancelled は有効です
      leaveCancelled: function (el) {
        console.log('leave-cancelled')
      }
    }
  })