<template>
  <div class="modal" v-if="isVisible">
    <div class="modal-mask"></div>
    <div class="modal-wrapper">
      <button class="btn-close" @click="hide">x</button>
      <div class="header">{{ modalType }}</div>
      <div class="body">
        <label>
          <p>Name</p>
          <input
            type="text"
            placeholder="Your item's name"
            v-model="editingItem.name"
          >
        </label>
        <label>
          <p>Price</p>
          <input
            type="number"
            placeholder="Your item's price"
            v-model.number="editingItem.price"
          >
        </label>
        <label>
          <p>Description</p>
          <textarea
            rows="3"
            placeholder="Your item's description"
            v-model="editingItem.description"
          ></textarea>
        </label>
      </div>
      <p class="message">{{ message }}</p>
      <div class="footer">
        <button class="btn-save" @click="handleSave">Save</button>
        <button class="btn-cancel" @click="hide">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

import { modalTypes } from '@/lib/constants';

export default {
  name: 'Modal',
  props: {
    isVisible: {
      type: Boolean,
      default: false,
    },
    modalType: {
      type: String,
      default: '',
    },
    currentItem: {
      type: Object,
      default: () => ({}),
    },
  },
  data: () => ({
    message: '',
    editingItem: null,
  }),
  watch: {
    currentItem(value) {
      this.editingItem = { ...value };
    },
  },
  methods: {
    ...mapActions(['addItem', 'editItem']),
    hide() {
      this.$emit('update:isVisible', false);
    },
    handleSave() {
      const { modalType, editingItem } = this;
      const invalidatedInputList = [];
      Object.keys(editingItem).forEach((type) => {
        if (!editingItem[type]) {
          invalidatedInputList.push(type);
        }
      });
      if (invalidatedInputList.length) {
        this.message = `
          ${invalidatedInputList.join(', ')} ${invalidatedInputList.length > 1 ? 'are' : 'is'} required!
        `;
        return;
      }
      if (modalType === modalTypes.ADD) {
        this.addItem(editingItem);
      } else if (modalType === modalTypes.EDIT) {
        this.editItem(editingItem);
      }
      this.hide();
    },
  },
};
</script>

<style lang="scss" scoped>
.modal {
  width: 100%;
  height: 100%;
  @include position-center;
  .modal-mask {
    width: 100%;
    height: 100%;
    background-color: rgba(black, 0.5);
  }
  .modal-wrapper {
    width: 400px;
    border-radius: 5px;
    background-color: white;
    @include position-center;
    .btn-close {
      width: 20px;
      height: 20px;
      font-size: 20px;
      position: absolute;
      top: 5px;
      right: 5px;
      cursor: pointer;
    }
    .header {
      height: 40px;
      background-color: rgba(grey, 0.2);
      @include flex-center;
    }
    .body {
      margin-top: 20px;
      @include flex-center;
      flex-direction: column;
      label {
        margin: 5px 0;
        @include flex-center;
        p {
          width: 100px;
        }
        input {
          width: 200px;
          padding: 5px 10px;
          border-radius: 5px;
          background-color: rgba(grey, 0.1);
        }
        textarea {
          max-width: 200px;
          min-width: 200px;
          max-height: 50px;
          min-height: 50px;
          padding: 5px;
        }
      }
    }
    .message {
      height: 20px;
      margin: 20px;
      color: red;
      @include flex-center;
    }
    .footer {
      margin-bottom: 20px;
      @include flex-center;
      button {
        width: 60px;
        height: 30px;
        margin: 0 10px;
        border-radius: 5px;
        background-color: red;
        color: white;
        cursor: pointer;
        &.btn-save {
          background-color: green;
        }
      }
    }
  }
}
</style>
