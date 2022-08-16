// 定义分类相关的 API接口函数
import request from '@/utils/request'
/**
 * 获取所有分类(顶级，二级，对应的商品推荐 )
 * @returns Promise
 */
export const findAllCategory = () => {
  return request('/home/category/head', 'get')
}
