//子コンポーネントのhtmlをここに定義。また、データとして使うものもここで定義。
//これで子コンポーネントのテンプレートは作成されたので、次は実際にデータを入れる。
Vue.component('comp-child', {
    template: '<li>{{ name }} HP.{{ hp }}</li>',
    props: ['name', 'hp']
  })
  // 子コンポーネントを記述しておくことで、設計図を残しておくこととなり、
  // html側ではなく、js側での随時の編集が可能になる。
  // 実際にコードを書き換えるより、devでのconsoleでの編集の方がやりやすい
  new Vue({
      //親コンポーネントに各々のデータを格納することで、一括管理を可能にする。
    el: '#app',
    data: {
      list: [
        { id: 1, name: 'スライム', hp: 100 },
        { id: 2, name: 'ゴブリン', hp: 200 },
        { id: 3, name: 'ドラゴン', hp: 500 }
      ]
    }
  })
// 子が自分のイベントを起こす
  Vue.component('comp-child', {
    template: '<button v-on:click="handleClick">イベント発火</button>',
    methods: {
      // ボタンのクリックイベントのハンドラでchilds-eventを発火する
      handleClick: function () {
        this.$emit('childs-event')
      }
    }
  })
  //親側で受け取る
  new Vue({
    el: '#app1',
    methods: {
      // childs-eventが発生した！
      parentsMethod: function () {
        alert('イベントをキャッチ！ ')
      }
    }
  })

  //子コンポーネント
  Vue.component('comp-child', {
    template: '<li>{{ name }} HP.{{ hp }}\
    <button v-on:click="doAttack">攻撃する</button></li>',
    props: {
      id: Number,
      name: String,
      hp: Number
    },
    methods: {
      // ボタンのクリックイベントのハンドラから$emitでattackを発火する
      doAttack: function () {
        // 引数として自分のIDを渡す
        this.$emit('attack', this.id)
      }
    }
  })
  new Vue({
    el: '#app2',
    data: {
      list: [
        { id: 1, name: 'スライム', hp: 100 },
        { id: 2, name: 'ゴブリン', hp: 200 },
        { id: 3, name: 'ドラゴン', hp: 500 }
      ]
    },
    methods: {
      // attackが発生した！
      handleAttack: function (id) {
        // 引数のIDから要素を検索
        var item = this.list.find(function (el) {
          return el.id === id
        })
        // HPが0より多ければ10減らす
        if (item !== undefined && item.hp > 0) item.hp -= 10
      }
    }
  })

  //コンポーネントの双方向データバインディング
  Vue.component('my-component', {
    template: '<div class="my-component">\
    <p>名前.{{ name }} HP.{{ hp }}</p>\
    <p>名前 <input v-model="localName"></p>\
    <p>HP <input size="5" v-model.number="localHp"></p>\
    </div>',
    props: {
      name: String,
      hp: Number
    },
    computed: {
      // 算出プロパティのセッター＆ゲッターを使ってv-modelを使用
      localName: {
        get: function () {
          return this.name
        },
        set: function (val) {
          this.$emit('update:name', val)
        }
      },
      localHp: {
        get: function () {
          return this.hp
        },
        set: function (val) {
          this.$emit('update:hp', val)
        }
      }
    }
  })

  new Vue({
    el: '#app3',
    data: {
      name: 'スライム',
      hp: 100
    }
  })

  //動的コンポーネント
  // コンポーネントA
Vue.component('my-component-a', {
    template: '<div class="my-component-a">component A</div>'
  })
  // コンポーネントB
  Vue.component('my-component-b', {
    template: '<div class="my-component-b">component B</div>'
  })
  new Vue({
    el: '#app4',
    data: {
      // コンポーネントのリスト
      componentTypes: ['my-component-a', 'my-component-b'],
      //配列だから、a=0, b=1
      // 描画するコンポーネントを選択するためのindex
      current: 0
      //デフォルトはa
    },
    computed: {
      component: function () {
        // currentと一致するindexのコンポーネントを使用
        return this.componentTypes[this.current]
        // 別に `return current ? 'my-component-b' : 'my-component-a'` とかでもよい
      }
    }
  })

  // 共通処理を登録するMixin
  var mixin = {
    created: function () {
      this.hello()
    },
    methods: {
      hello: function () {
        console.log('hello from mixin!')
      }
    }
  }
 // メッセージ一覧用コンポーネント
Vue.component('comp-board', {
    template: '<div>Message Board</div>',
  })
  // 入力フォーム用コンポーネント
  Vue.component('comp-form', {
    template: '<div>Form<textarea v-model="message"></textarea></div>',
    data: function () {
      return {
        message: ''
      }
    }
  })
  new Vue({
    el: '#app5',
    data: {
      current: 'comp-board' // 動的に切り替える
    }
  })

  new Vue({
    el: '#app6',
    data: {
      current: 'comp-board' // 動的に切り替える
    }
  })