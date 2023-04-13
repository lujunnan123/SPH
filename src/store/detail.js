import { reqGetSpDetailInfo,reqAddUpdataShopCart } from "@/api"
const state={
    goodinfo:{}
}
const mutations={
    GETGOODINFO(state,goodinfo){
        state.goodinfo = goodinfo;
    }
}
const actions={
    async getGoodInfo({commit},skuId){
        let result = await reqGetSpDetailInfo(skuId);
        if(result.code == 200){
            commit('GETGOODINFO',result.data)
        }
    },
    async addOrUpdataShopCart({commit},{skuId,skuNum}){
        // 加入购物车返回的解构
       let result = await reqAddUpdataShopCart(skuId,skuNum);
       console.log(result);
    }
    
}
// getters :简化数据而生
const getters = {
    // 加“||{}”原因：state.goodInfo初始状态为空对象，空对象的categoryView属性值为undefined
    // 当前计算出的 categoryView属性值至少是一个空对象，假的不会报错
    categoryView(state){
        return state.goodinfo.data.categoryView || {};
    },
    skuInfo(state){
        return state.goodinfo.data.skuInfo ||{};
    }
}
export default{
    state,
    mutations,
    actions,
    getters
}