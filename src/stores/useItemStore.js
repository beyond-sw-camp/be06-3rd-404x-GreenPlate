import { defineStore } from "pinia";
import axios from "axios";

export const useItemStore = defineStore("itemList", {
  state: () => ({
    itemList: [
      {
        id: 0,
        name: "",
        price: 0,
        calorie: 0,
        imageUrl: "",
        discountPrice: 0,
        companyName: "",
      },
    ],
    totalPages: 0,
    totalItems: 0,
  }),
  actions: {
    async getItemList(page) {
      if (page >= 1) {
        page = page - 1;
      }
      const response = await axios.get("/api/item/list", {
        params: { page },
      });

      if (response.data.result) {
        this.itemList = response.data.result.content;
        this.totalPages = response.data.result.totalPages;
        this.totalItems = response.data.result.totalElements;

        console.log("store itemList:" + this.itemList[0]);
        console.log("store totalPages:" + this.totalPages);
        console.log("store totalItems:" + this.totalItems);
      }
      return response.data.result;
    },

    async getItemListByCategory(main, sub) {
      const response = await axios.get("/api/item/category", {
        params: { main, sub },
      });

      if (response.data.result) {
        this.itemList = response.data.result.content;
        this.totalPages = response.data.result.totalPages;
        this.totalItems = response.data.result.totalElements;
      }

      return response.data.result;
    },
    async getItems(page, size) {
      if (page >= 1) {
        page = page - 1;
      }
      const response = await axios.get("/api/item/list", {
        params: { page, size },
      });

      if (response.data.result) {
        this.itemList = response.data.result.content;
        this.totalPages = response.data.result.totalPages;
        this.totalItems = response.data.result.totalElements;

        console.log("store itemList:" + this.itemList[0]);
        console.log("store totalPages:" + this.totalPages);
        console.log("store totalItems:" + this.totalItems);
      }
      return response.data.result;
    },
    async getItemsByName(name, page) {
      if (page >= 1) {
        page = page - 1;
      }
      if (name != null) {
        const response = await axios.get("/api/item/search/word", {
          params: {
            name,
            page,
          },
        });
        this.itemList = response.data.result.content;
        this.totalPages = response.data.result.totalPages;
        this.totalItems = response.data.result.totalElements;

        return response.data.result;
      }
    },
  },
});
