import { reqGetSearchInfo } from "@/api";
// search 模块小仓库
// state:仓库存储数据的地方
const state = {
    // 仓库初始化状态
    searchList : {}
};
// mutations：修改state的唯一手段
const mutations = {
    GETSEARCHLIST(state,searchList){
        state.searchList = searchList
    }
};
// action：处理action，可以书写自己的业务逻辑，也可以处理异步
const actions = {
    // 1.获取search模块数据
    async getSearchList({commit},params = {}){
        let result = await reqGetSearchInfo(params)
        if(result.code == 200){
            commit("GETSEARCHLIST",result.data)
        }
    }
};
// 计算属性
// 项目当中getters主要的作用是：简化仓库中的数据（简化数据而生）
// 可以把我们将来在组件中需要用的数据简化一下【将来组件获取数据就方便了】
const getters = {
    goodsList(state){
        // "|| {}" 假如网络不给力或没有网， state.searchList.goodList返回的是undefined
        return state.searchList.goodsList || {}
    },
    trademarkList(state){
        return state.searchList.trademarkList
    },
    attrsList(state){
        return state.searchList.attrsList
    },
};
// 对外暴露Store类的一个实例
export default({
    state,
    mutations,
    actions,
    getters
})