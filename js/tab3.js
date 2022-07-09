const data = {
    columns: [
      {
        label: '姓名',
        field: 'name'
      },
      '性别',
      '借阅书籍',
      '借阅日期',
      '归还时间',
    ],
    rows: [
      ["林一", "男", "围城", "2022/7/8", "2022/7/15"],
      ["陈二", "女", "数据结构教程", "2022/7/1", "2022/7/15"],
      ["张三", "男", "离散数学", "2022/6/27", "2022/7/5"],
      ["李四", "男", "计算机系统", "2022/7/10", "2022/7/15"],
      ["王五", "男", "简爱", "2022/7/15", "2022/7/21"],
    ],
  };
  
  const instance = new mdb.Datatable(document.getElementById('datatable'), data)
  
  document.getElementById('datatable-search-input').addEventListener('input', (e) => {
    instance.search(e.target.value);
  });