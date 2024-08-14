<template>
  <div class="tit_page">
    <h2 class="tit">레시피</h2>
  </div>

  <div id="main">
    <div id="content">
      <div id="qnb" class="quick-navigation" style="top: 70px;">
        <div class="bnr_qnb">
          <div class="thumb"></div>
        </div>
      </div>
      <div class="layout-wrapper">
        <table width="100%">
          <tbody>
            <tr>
              <td>
                <table width="100%">
                  <tbody v-if="!isLoading">
                    <tr>
                      <td>
                        <table class="boardView" width="100%">
                          <tbody >
                            <tr>
                              <th scope="row" style="border:none;">제목</th>
                              <td>{{recipeData.title}}</td>
                            </tr>
                            <tr>
                              <th scope="row">작성자</th>
                              <td>{{ recipeData.memberName }}</td>
                            </tr>
                            <tr class="etcArea">
                              <td colspan="2">
                                <ul>
                                  <li class="date">
                                    <strong class="th">작성일</strong> <span class="td">{{ recipeData.date }}</span>
                                  </li>
                                  <li class="hit">
                                    <strong class="th">CALORIE</strong> <span class="td">{{recipeData.totalCalorie}}kcal</span>
                                  </li>
                                </ul>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td height="200" valign="top" class="view_recipe">
                        <table width="100%" style="table-layout:fixed" class="goods_wrap">
                          <tbody>
                            <tr>
                              <td valign="top">
                                <div class="goods_recipe">
                                  <h3>
                                    <span class="recipe_tit">GreenPlate's Recipe</span>
                                    <small class="recipe_product">{{recipeData.title}}</small>
                                  </h3>
                                  <div class="context">
                                    <div class="pic">
                                      <img :src="getValidImageUrl(recipeData.imageUrl)" alt="Recipe Image" />
                                    </div>
                                    <div class="words">
                                      <strong class="recipe_item_tit">RECIPE</strong>
                                      <div v-html="recipeData.contents"></div>
                                    </div>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td id="recipe_view" align="center">
                <RecipeDetailsItemComponent :itemList="itemList" />
              </td>
          </tr>
          </tbody>
        </table>
        <table width="100%" style="table-layout:fixed; border-top:1px solid rgb(128, 183, 89); height:80px;">
          <tbody>
            <tr>
              <td align="center" style="padding-top:10px;">
                <table width="100%">
                  <tbody>
                    <tr>
                      <td></td>
                      <td align="right">
                        <router-link :to="{ path: `/recipe/list/0` }">
                          <span class="bhs_button yb" style="float:none;">목록</span>
                        </router-link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import RecipeDetailsItemComponent from "../components/recipe/RecipeDetailsItemComponent.vue";
import axios from 'axios';

export default 
{
  components: {
    RecipeDetailsItemComponent
  },
  name: "RecipeDetailPage",
  props: ['id'],
  data() {
    return {
      recipeData: null,
      itemList: [],
      isLoading: true
    };
  },
  mounted() {
    this.getData(this.id);
  },
  methods: {
    getValidImageUrl(imageUrl) {
      const placeholder = "https://via.placeholder.com/900x500";
      if (!imageUrl || !this.isValidUrl(imageUrl)) {
        return placeholder;
      }
      return imageUrl;
    },
    isValidUrl(string) {
      try {
        new URL(string);
        return true;
      } catch (_) {
        return false;
      }
    },
    async getData(id) {
      try {
        // pageId를 computed 속성에서 가져와서 사용합니다
        const response = await axios.get(`http://localhost:8080/recipe/details?recipeId=${id}`);
        console.log(response.data.result);
        this.recipeData = response.data.result;
        this.itemList = response.data.result.itemList;
      } catch (error) {
        console.log(error);
      } finally {
        this.isLoading = false;
      }
    }
  }
};
</script>

<style scoped>
#qnb {
  position: absolute;
  z-index: 1;
  right: 20px;
  top: 70px;
  width: 80px;
  font: normal 12px/16px "Noto Sans";
  color: #333;
  letter-spacing: -0.3px;
  transition: top 0.2s;
}

.bnr_qnb {
  padding-bottom: 7px;
}

.thumb {
  width: 80px;
  height: 120px;
  vertical-align: top;
}

.side_menu {
  width: 80px;
  border: 1px solid #ddd;
  border-top: 0 none;
  background-color: #fff;
}

.link_menu {
  display: block;
  height: 29px;
  padding-top: 5px;
  border-top: 1px solid #ddd;
  text-align: center;
}

.link_menu:hover,
.link_menu.on {
  color: rgb(102, 153, 51);
}

@media all and (max-width: 1250px) {
  #qnb {
    display: none;
  }
}

.goods-add-product-item-price {
  left: 35%;
}

.goods-add-product-title {
  text-align: left;
}

.goods-add-product {
  margin-bottom: 50px;
}

.goods-add-product-move {
  height: 35px !important;
}

.goods-add-product-item-name {
  overflow: hidden;
  width: 100%;
  height: 20px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  text-align: center;
}

.goods-add-product .btn_cart {
  display: block;
  overflow: hidden;
  position: absolute;
  right: 15px;
  bottom: 15px;
  width: 45px;
  height: 45px;
  margin-top: 15px;
  border: 0 none;
  background: url(https://res.kurly.com/pc/service/common/1908/ico_list_add_cart.png) no-repeat 50% 50%;
  font-size: 0;
  line-height: 0;
  text-indent: -9999px;
}
</style>
