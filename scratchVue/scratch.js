// ドロップダウンメニュー
new Vue ({
    el: '#dropDownMenu',
    data: {
      offices:['Tokyo', 'Osaka'],
      departments:['developper','innovator','supporter'],
      active: '',
    },
    methods: {
      dropdown(office) {
        this.active = this.active===office ? "":office;
      },
      dropup(office) {
        this.active = "";
      }
    }
})


// 非同期通信
new Vue ({
    el: "#form",
    data: {
      　id: "",
        name: "",
        gender: "",
        password: "",
        hoge:"sample-name",
    },
    methods:{
      submit:function() {
        alert("Are you sure to submit?")
      },
      reset:function() {
        this.id       = "";
        this.name     = "";
        this.gender   = "";
        this.password = "";
      }
    }
})


// カウンタ
var lang = {
    template: '<li>PHP <button v-on:click="vote" class="btn-sticky" style="margin: 5px">vote</button> → {{ count }}</li>',
    data: function() {
      return {
      count: 0
      }
    },
    methods: {
      vote: function() {
        this.count++;
      }
    }
  }
  new Vue({
    el: '#vote',
    components: {
      'lang': lang
    }
  })


// モーダル
Vue.component('modal', {
  template: '#modal-template'
})

new Vue({
  el: '#modal',
  data: {
    showModal: false,
    message: "乗ってへん",
    // moge: "btn btn-dark"
  },
  methods:{
    mouseover: function() {
      this.message = "乗ってるで"
      // this.moge = "btn btn-light"
    },
    mouseleave: function() {
      this.message = "乗ってへん"
      // this.moge = "btn btn-dark"
    }
  }
})

new Vue({
  el: '#todo',
  data: {
    todos: [
      'task1',
      'task2',
      'task3'
    ],
    newItem: "",
    // hoge:"btn btn-dark",
    message:"入力しいや",
  },
  methods:{
    addItem:function() {
      this.todos.push(this.newItem);
      this.newItem = "";
    },
    mouseover: function() {
      this.message = "追加するで";
      // this.hoge = "btn btn-light";
    },
    mouseleave: function() {
      this.message = "入力しいや";
      // this.hoge = "btn btn-dark";
    },
  }
});