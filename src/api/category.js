// 定义分类相关的 API接口函数
import request from '@/utils/request'
/**
 * 获取所有分类(顶级，二级，对应的商品推荐 )
 * @returns Promise
 */
export const findAllCategory = () => {
  return request('/home/category/head', 'get')
}

/**
 * 获取单个顶级分类信息
 * @param {String} id - 顶级分类ID
 */
export const findTopCategory = (id) => {
  return request('/category', 'get', { id })
}
