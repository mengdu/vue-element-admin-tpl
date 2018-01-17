function Pagination (total, len) {
  // 总条目数
  this.total = Math.abs(~~total)
  // 当前页
  this.currentPage = 1
  var l = Math.abs(~~len)
  len = l > this.total ? this.total : l
  // 每页显示条目个数
  this.pageSize = len || 10
  // 总页数
  this.pageCount = Math.ceil(~~Math.abs(this.total) / ~~Math.abs(this.pageSize))
}
// 指定页数据
Pagination.prototype.page = function (n) {
  var page = Math.abs(~~n) || this.currentPage
  if (page > this.pageCount) {
    // 防止出现当前页为零情况
    this.currentPage = this.pageCount || 1
  } else {
    this.currentPage = page
  }
  // console.log(this.currentPage)
  var index1 = (this.currentPage > 0 ? this.currentPage - 1 : 0) * this.pageSize
  var index2 = this.currentPage * this.pageSize
  index2 = index2 > this.total ? this.total : index2
  // slice(index1, index2) 实际arr[index1] ~ arr[index2-1]
  return [index1, index2]
}

Pagination.prototype.slice = function (arr, n) {
  return arr.slice.apply(arr, this.page(n))
}

Pagination.prototype.sql = function (n) {
  var pages = this.page(n)
  return {
    offset: pages[0],
    limit: this.pageSize
  }
}

export default Pagination
