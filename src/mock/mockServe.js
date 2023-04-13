// 引入mockjs模块
import Mock from 'mockjs';
// 引入Json数据格式
// webpack默认对外暴露：图片、JSON数据格式
import banner from './banner.json';
import floor from './floor.json';
import search from './search.json';
import spdetail from './spdetail.json'

// mock数据:第一个参数 参数请求地址，第二个参数：请求数据
Mock.mock("/mock/banner",{code:200,data:banner})
Mock.mock("/mock/floor",{code:200,data:floor})
Mock.mock("/mock/search",{code:200,data:search})
Mock.mock("/mock/spdetail",{code:200,data:spdetail})