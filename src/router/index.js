import { createRouter, createWebHistory } from "vue-router";

import MainPage from "@/pages/MainPage.vue";
import ItemPage from "@/pages/ItemPage.vue";
import ItemCategoryPage from "@/pages/ItemCategoryPage.vue";
import ItemDetailPage from "@/pages/ItemDetailPage.vue";
import ItemRegisterPage from "@/pages/ItemRegisterPage.vue";
import CartPage from "@/pages/CartPage.vue";
import RecipePage from "@/pages/RecipePage.vue";
import RecipeDetailsPage from "@/pages/RecipeDetailPage.vue";
import MyPage from "@/pages/MyPage.vue";
import LoginPage from "@/pages/LoginPage.vue";
import RecipeWritePage from "@/pages/RecipeWritePage.vue";
import MyOrderPage from "@/pages/MyOrderPage.vue";
import MyOrderDetailPage from "@/pages/MyOrderDetailPage.vue";
import MyAddressPage from "@/pages/MyAddressPage.vue";
import CompanyItemPage from "@/pages/CompanyItemPage.vue";
import CompanyOrderPage from "@/pages/CompanyOrderPage.vue";
import CompanyOrderDetailPage from "@/pages/CompanyOrderDetailPage.vue";
import SignupPage from "@/pages/SignupPage.vue";
import OrderPage from "@/pages/OrderPage.vue";
import ItemSearchResultPage from "@/pages/ItemSearchResultPage.vue";
import MyKeywordPage from "@/pages/MyKeywordPage.vue";


const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: MainPage },
    { path: "/item/list/:page", component: ItemPage, props: true },
    {
      path: "/item/search",
      component: ItemSearchResultPage,
      props: (route) => ({
        query: route.query.word,
        page: Number(route.query.page) || 1,
      }),
    },
    {
      path: "/item/list/:main/:sub/:page",
      component: ItemCategoryPage,
      props: true,
    },
    { path: "/item/list/details/:id", component: ItemDetailPage },
    { path: "/item/register", component: ItemRegisterPage },
    { path: "/user/details", component: MyPage },
    { path: "/cart", component: CartPage },
    { path: "/recipe/list/:page", component: RecipePage },
    { path: "/recipe/details/:id", 
      component: RecipeDetailsPage,
      props: true
    },
    { path: "/recipe/write", component: RecipeWritePage },
    { path: "/login", component: LoginPage },
    { path: "/mypage/order", component: MyOrderPage },
    { path: "/mypage/order/:id", component: MyOrderDetailPage },
    { path: "/mypage/address", component: MyAddressPage },
    { path: "/company/product", component: CompanyItemPage },
    { path: "/company/order", component: CompanyOrderPage },
    { path: "/company/order/:id", component: CompanyOrderDetailPage },
    { path: "/signup", component: SignupPage },
    { path: "/order", component: OrderPage },
    { path: "/mypage/keyword", component: MyKeywordPage },
    
  ],
});

export default router;
