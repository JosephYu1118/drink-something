import { createStore } from 'vuex';

import getRandomString from '@/utils/getRandomString';
import types from '@/lib/mutationTypes';

export default createStore({
  state: {
    itemList: [
      {
        id: '123456',
        name: '星巴克咖啡',
        price: 120,
        description: 'eeeee',
      },
      {
        id: '234567',
        name: '珍珠奶茶',
        price: 50,
        description: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      },
      {
        id: '345678',
        name: '檸檬紅茶',
        price: 30,
        description: 'yyyyyyyyyyy',
      },
    ],
  },
  mutations: {
    [types.ADD_ITEM]: (state, payload) => {
      const id = getRandomString();
      state.itemList.push({ ...payload, id });
    },
    [types.EDIT_ITEM]: (state, payload) => {
      const { itemList } = state;
      const { id } = payload;
      const index = itemList.findIndex((item) => item.id === id);
      itemList[index] = { ...payload };
      state.itemList = [...itemList];
    },
    [types.DELETE_ITEM]: (state, payload) => {
      const { itemList } = state;
      state.itemList = itemList.filter((item) => item.id !== payload);
    },
    [types.SORT_ITEM_LIST]: (state, payload) => {
      const { itemList } = state;
      const { sortBy, sortOrder } = payload;
      state.itemList = itemList.sort((a, b) => {
        if (sortOrder === 'descending') {
          return a[sortBy] < b[sortBy] ? 1 : -1;
        }
        return a[sortBy] > b[sortBy] ? 1 : -1;
      });
    },
  },
  actions: {
    addItem: ({ commit }, data) => {
      commit(types.ADD_ITEM, data);
    },
    editItem: ({ commit }, data) => {
      commit(types.EDIT_ITEM, data);
    },
    deleteItem: ({ commit }, id) => {
      commit(types.DELETE_ITEM, id);
    },
    sortItemList: ({ commit }, data) => {
      commit(types.SORT_ITEM_LIST, data);
    },
  },
});
