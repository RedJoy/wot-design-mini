Page({
  options: {
    multipleSlots: true
  },
  data: {
    value1: '',
    value2: '这是禁用状态',
    value3: '这是只读状态',
    value4: '支持清空',
    value5: 'mima',
    value6: '',
    value7: '',
    value8: 'textarea内容',
    value9: '',
    size:{ minRows: 2, maxRows: 6 }
  },
  handleInput(e) {
    console.log('页面input：', e)
    var value = e.detail.value
    var pos = e.detail.cursor
    
    // return value.replace(/11/g, '2')
    this.setData({
      value1: value.replace(/11/g, '2')
    })
  },
  handleChange1({ detail }) {
    this.setData({
      value1: detail
    })
  },
  handleChange2 ({ detail }) {
    this.setData({
      value2: detail
    })
  },
  handleChange3 ({ detail }) {
    this.setData({
      value3: detail
    })
  },
  handleChange4 ({ detail }) {
    this.setData({
      value4: detail
    })
  },
  handleChange5 ({ detail }) {
    this.setData({
      value5: detail
    })
  },
  handleChange6 ({ detail }) {
    this.setData({
      value6: detail
    })
  },
  handleChange7 ({ detail }) {
    this.setData({
      value7: detail
    })
  },
  handleChange8 ({ detail }) {
    this.setData({
      value8: detail
    })
  }
})