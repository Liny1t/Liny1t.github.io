var app = new Vue({
  el: "#sys",
  data: {
    //tab1
    tmp: "",
    bid: "xxx",
    bname: "xxx",
    publisher: "xxx",
    author: "xxx",
    price: "xxx",
    index: 0,
    backup: [],
    book_info: [{ bid: "B-1", bname: "计算机系统", publisher: "机械工业出版社", author: "袁春风", price: "49" },
    { bid: "B-2", bname: "数据库系统概论", publisher: "高等教育出版社", author: "王珊/萨师煊", price: "42" },
    { bid: "B-3", bname: "数据结构教程", publisher: "清华大学出版社", author: "李春葆", price: "59.5" },
    { bid: "B-4", bname: "离散数学", publisher: "上海科学技术文献出版社", author: "左孝凌", price: "28" },
    { bid: "B-5", bname: "数学模型", publisher: "高等教育出版社", author: "姜启源", price: "49" }],

    // tab2
    imgList: [
      "../images/00.jpg",
      "../images/01.jpg",
      "../images/02.jpg",
      "../images/03.jpg",
      "../images/04.jpg",
    ],
    index2: 0
  },
  methods: {
    //tab1
    f_remove: function (index) {
      this.index = index;
    },
    remove: function () {
      this.book_info.splice(this.index, 1);
    },

    f_change: function (index) {
      this.index = index;
    },
    change: function () {
      this.book_info[this.index].bid = this.bid;
      this.book_info[this.index].bname = this.bname;
      this.book_info[this.index].publisher = this.publisher;
      this.book_info[this.index].author = this.author;
      this.book_info[this.index].price = this.price;
    },

    search: function () {
      this.backup = [];
      for (var item of this.book_info)
        if (this.tmp == item.bid || this.tmp == item.bname || this.tmp == item.publisher 
          || this.tmp == item.author || this.tmp == item.price)
          this.backup.push(item);
    },

    add: function () {
      var flag = true;
      for (var item of this.book_info)
        if (this.bid == item.bid) flag = false;

      if (flag)
        this.book_info.push({
          bid: this.bid, bname: this.bname,
          publisher: this.publisher, author: this.author, price: this.price
        });

      else alert("编号已存在！请重新添加");
    },

    //tab2
    prev:function() {
      this.index2--;
    },
    next:function() {
      this.index2++;
    }
  }
});