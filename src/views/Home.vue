<template>
  <div class="home">
    <Order></Order>
  </div>
</template>

<script>
import Order from '@/components/Order.vue';

export default {
  name: 'Home',
  components: {
    Order,
  },
};
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
