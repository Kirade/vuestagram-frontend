<template>
  <div>
    <gnb/>
    <h1>Default Layout</h1>
    <router-view/>
  </div>
</template>

<script>
import GNB from '@/components/gnb';

export default {
  components: {
    gnb: GNB,
  },
};
</script>

<style scoped>

</style>
