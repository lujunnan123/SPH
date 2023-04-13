// 当前模块：API进行统一管理
// 引入二次封装的axios（带有请求、响应的拦截器）
import requests from "./request";
import mockRequests from "./mockAjax";
// 三级联动文档
export const reqCategoryList = ()=>{
    // 发送请求,axios发送请求返回的是promise对象
    return requests({url:'product/getBaseCategoryList',method:'get'});
}
// 获取banner模拟数据（首页轮播图）
export const reqGetBannerList = () => mockRequests({ url: '/banner', method: 'get' });

// 获取搜索模块数据 地址:/mock/search 请求方式：post 参数：需要带参数
export const reqGetSearchInfo = (params) => mockRequests({url:"/search",method:'post',data:params});


// 获取商品详细信息数据 地址/mock/spdetail 请求方式：get 参数：需要带参skuId
export const reqGetSpDetailInfo = (skuId) => mockRequests({url:"/spdetail",method:'get',data:skuId});

// 将产品添加到购物车中（获取更新某一个产品的个数）
// export const reqAddUpdataShopCart = (skuId,skuNum) => localRequests({url:"/cart",method:'post',data:{skuId,skuNum}});