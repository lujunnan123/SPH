<template>
    <!-- 商品分类导航 -->
    <div class="type-nav">
        <div class="container">
            <div @mouseleave="leaveIndex(index)" @mouseenter="enterShow">

                <h2 class="all">全部商品分类</h2>
                <!-- 三级联动 -->
                <!-- 过渡动画 -->
                
                <transition name="sort">
                    <div class="sort" v-show="show">
                        <div class="all-sort-list2" @click="goSearch">
                            <div class="item" v-for="(c1, index) in categoryList" :key="c1.categoryId"
                                :class="{ cur: currentIndex == index }">
                                <h3 @mouseenter="changeIndex(index)">
                                    <a :data-categoryName="c1.categoryName" :data-category1Id="c1.categoryId">{{
                                        c1.categoryName }}</a>
                                </h3>
                                <!-- 二级、三级分类 -->
                                <div class="item-list clearfix" :style="{ display: currentIndex == index ? 'block' : 'none' }">
                                    <div class="subitem" v-for="(c2, index) in c1.categoryChild" :key="c2.categoryId">
                                        <dl class="fore">
                                            <dt>
                                                <a :data-categoryName="c2.categoryName"
                                                    :data-category2Id="c2.categoryId" 
                                                    @click="goSearch">
                                                    {{ c2.categoryName}}
                                                </a>
                                            </dt>
                                            <dd>
                                                <em v-for="(c3, index) in c2.categoryChild" :key="c3.categoryId">
                                                    <a 
                                                        :data-categoryName="c3.categoryName"
                                                        :data-category3Id="c3.categoryId">
                                                        {{ c3.categoryName }}
                                                    </a>
                                                </em>
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </transition>
            </div>
            <nav class="nav">
                <a href="###">服装城</a>
                <a href="###">美妆馆</a>
                <a href="###">尚品汇超市</a>
                <a href="###">全球购</a>
                <a href="###">闪购</a>
                <a href="###">团购</a>
                <a href="###">有趣</a>
                <a href="###">秒杀</a>
            </nav>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex';
// 按需引入 节流 函数
import throttle from 'lodash/throttle';
export default {
    name: 'TypeNav',
    data() {
        return {
            currentIndex: -1,
            show: true
        }
    },
    // 组件挂载完毕：可以向服务器发请求
    mounted() {
        // 当组件挂载完毕，让show属性变为false
        // 如果不是home组件，将typeNav进行隐藏
        if (this.$route.path != '/home') {
            this.show = false
        }
    },
    computed: {
        ...mapState({
            // 拿到state中的数据
            categoryList: state => state.home.categoryList
        })
    },
    methods: {
        // 鼠标进入修改响应式数据currentIndex属性
        changeIndex: throttle(function (index) {
            this.currentIndex = index
        }, 50),
        leaveIndex() {
            if (this.$route.path != '/home') {
                this.currentIndex = -1;
                // 鼠标离开时，隐藏typeNav
                this.show = false
            }
        },
        goSearch(event) {
            // 解决：编程式导航+事件委派
            // 利用事件的委派存在问题：1.点击一定是a标签？2.如何获取参数（123级分类的产品名、id）
            let element = event.target;
            // 节点中dataset属性，可以获取结点的自定义属性与属性值
            let { categoryname, category1id, category2id, category3id } = element.dataset;
            // 如果标签身上有categoryname一定是a标签
            if (categoryname) {
                let query = { categoryName: categoryname }
                let location = { name: "search" }
                // 一级分类、二级分类、三级分类
                if (category1id) {
                    query.category1Id = category1id;
                } else if (category2id) {
                    query.category2Id = category2id;
                } else {
                    query.category3Id = category3id;
                }
                // 判断：如果路由器跳转的时候，带有params参数，也一并传过去。
                if(this.$route.params){
                    location.params = this.$route.params
                    // 整理完参数
                    location.query = query;
                    // 路由跳转
                    this.$router.push(location)
                }
            }
        },
        enterShow() {
            this.show = true
        }
    },
}
</script>
<style scoped lang="less">
.type-nav {
    border-bottom: 2px solid #e1251b;

    .container {
        width: 1200px;
        margin: 0 auto;
        display: flex;
        position: relative;

        .all {
            width: 210px;
            height: 45px;
            background-color: #e1251b;
            line-height: 45px;
            text-align: center;
            color: #fff;
            font-size: 14px;
            font-weight: bold;
        }

        .nav {
            a {
                height: 45px;
                margin: 0 22px;
                line-height: 45px;
                font-size: 16px;
                color: #333;
            }
        }

        .sort {
            position: absolute;
            left: 0;
            top: 45px;
            width: 210px;
            height: 461px;
            position: absolute;
            background: #fafafa;
            z-index: 999;

            .all-sort-list2 {
                .item {
                    h3 {
                        line-height: 30px;
                        font-size: 14px;
                        font-weight: 400;
                        overflow: hidden;
                        padding: 0 20px;
                        margin: 0;

                        a {
                            color: #333;
                        }
                    }

                    .item-list {
                        display: none;
                        position: absolute;
                        width: 734px;
                        min-height: 460px;
                        background: #f7f7f7;
                        left: 210px;
                        border: 1px solid #ddd;
                        top: 0;
                        z-index: 9999 !important;

                        .subitem {
                            float: left;
                            width: 650px;
                            padding: 0 4px 0 8px;

                            dl {
                                border-top: 1px solid #eee;
                                padding: 6px 0;
                                overflow: hidden;
                                zoom: 1;

                                &.fore {
                                    border-top: 0;
                                }

                                dt {
                                    float: left;
                                    width: 54px;
                                    line-height: 22px;
                                    text-align: right;
                                    padding: 3px 6px 0 0;
                                    font-weight: 700;
                                }

                                dd {
                                    float: left;
                                    width: 415px;
                                    padding: 3px 0 0;
                                    overflow: hidden;

                                    em {
                                        float: left;
                                        height: 14px;
                                        line-height: 14px;
                                        padding: 0 8px;
                                        margin-top: 5px;
                                        border-left: 1px solid #ccc;
                                    }
                                }
                            }
                        }
                    }


                }

                .cur {
                    background-color: skyblue;
                }
            }
        }
        // 过渡动画
        // 开始状态
        .sort-enter{
            height: 0;
        }
        // 动画结束
        .sort-enter-to{
            height: 461px;
        }
        // 定义动画的时间、速率
        .sort-enter-active{
            transition: all .5s linear;
            overflow: hidden;
        }
    }
}</style>