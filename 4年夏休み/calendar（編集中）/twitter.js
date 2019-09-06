// https://jp.vuejs.org/v2/examples/todomvc.html
var STORAGE_KEY = 'todos-vuejs-demo'
var todoStorage = {
  fetch: function() {
    var todos = JSON.parse(
      localStorage.getItem(STORAGE_KEY) || '[]'
    )
    todos.forEach(function(todo, index) {
      todo.id = index
    })
    todoStorage.uid = todos.length
    return todos
  },
  save: function(todos) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  }
}

// リストレンダリング
var app = new Vue({
    el: '#app',
    data: {
      todos: [],
      addMonth : '',
    },
    methods: {
      add: function (event) {
        this.todos.push({ title: this.addTitle, month: this.addMonth, day:this.addDay })
        this.addTitle = '';
        this.addMonth = '';
        this.addDay = '';
      },
     // 削除の処理
     doRemove: function(item) {
          var index = this.todos.indexOf(item)
          this.todos.splice(index, 1)
        } 
      },
      watch: {
        // オプションを使う場合はオブジェクト形式にする
        todos: {
          // 引数はウォッチしているプロパティの変更後の値
          handler: function(todos) {
            todoStorage.save(todos)
          },
          // deep オプションでネストしているデータも監視できる
          deep: true
        }
      },
      created() {
        // インスタンス作成時に自動的に fetch() する
        this.todos = todoStorage.fetch()
      }
  })


// リスト要素を書き換えたい時
// （コンソールでの編集）
// this.$set(更新するデータ, インデックス or キー, 新しい値)
// this.$set(this.list, 0, {id : 1, name: 'キングスライム', hp: 500})

