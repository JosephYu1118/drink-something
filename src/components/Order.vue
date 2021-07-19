<template>
  <div class="order">
    <div class="tools-block">
      <button class="btn-add" @click="handleAdd">Add</button>
    </div>
    <div class="table-block">
      <ul class="table-head">
        <li class="table-item">
          Name
          <div class="sort-block">
            <button class="btn-sort" @click="handleSort('name', 'ascending')">^</button>
            <button class="btn-sort" @click="handleSort('name', 'descending')">v</button>
          </div>
        </li>
        <li class="table-item">
          Price
          <div class="sort-block">
            <button class="btn-sort" @click="handleSort('price', 'ascending')">^</button>
            <button class="btn-sort" @click="handleSort('price', 'descending')">v</button>
          </div>
        </li>
        <li class="table-item description">Description</li>
        <li class="table-item status">Status</li>
      </ul>
      <ul class="table-body">
        <li class="table-row" v-for="item in itemList" :key="item.id">
          <p class="table-item">{{ item.name }}</p>
          <p class="table-item">NT$ {{ item.price }}</p>
          <p class="table-item description">{{ item.description }}</p>
          <div class="table-item status">
            <button class="btn-edit" @click="handleEdit(item)">Edit</button>
            <button class="btn-delete" @click="handleDelete(item.id)">Delete</button>
          </div>
        </li>
      </ul>
    </div>
    <teleport to="#app">
      <Modal
        v-model:isVisible="isModalVisible"
        :modalType="modalType"
        :currentItem="currentItem"
      ></Modal>
    </teleport>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

import { modalTypes } from '@/lib/constants';
import Modal from '@/components/Modal.vue';

export default {
  components: {
    Modal,
  },
  data: () => ({
    isModalVisible: false,
    modalType: '',
    currentItem: null,
  }),
  computed: {
    ...mapState(['itemList']),
  },
  methods: {
    ...mapActions(['deleteItem', 'sortItemList']),
    handleAdd() {
      this.modalType = modalTypes.ADD;
      this.currentItem = {
        name: '',
        price: '',
        description: '',
      };
      this.isModalVisible = true;
    },
    handleEdit(item) {
      this.modalType = modalTypes.EDIT;
      this.currentItem = item;
      this.isModalVisible = true;
    },
    handleDelete(id) {
      this.deleteItem(id);
    },
    handleSort(sortBy, sortOrder) {
      this.sortItemList({ sortBy, sortOrder });
    },
  },
};
</script>

<style lang="scss" scoped>
.order {
  width: 700px;
  margin-top: 100px;
  .tools-block {
    text-align: right;
    margin-bottom: 10px;
    .btn-add {
      width: 50px;
      height: 30px;
      border-radius: 5px;
      background-color: blue;
      color: white;
      cursor: pointer;
    }
  }
  .table-block {
    .table-head, .table-body {
      @include flex-center;
    }
    .table-head {
      background-color: rgba(grey, 0.2);
      .table-item {
        justify-content: space-between;
        .sort-block {
          @include flex-center;
          flex-direction: column;
          .btn-sort {
            width: 15px;
            height: 15px;
            background-color: rgba(black, 0.3);
            color: white;
            cursor: pointer;
          }
        }
      }
    }
    .table-body {
      flex-direction: column;
      .table-row {
        width: 100%;
        display: flex;
      }
    }
    .table-item {
      flex: 1;
      min-height: 50px;
      padding: 5px;
      border: 1px solid #000;
      word-break: break-all;
      @include flex-center;
      justify-content: flex-start;
      &.description {
        flex: 2;
      }
      &.status {
        button {
          width: 50px;
          height: 30px;
          margin: 5px;
          border-radius: 5px;
          background-color: red;
          color: white;
          cursor: pointer;
          &.btn-edit {
            background-color: green;
          }
        }
      }
    }
  }
}
</style>
