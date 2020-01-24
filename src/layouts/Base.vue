<template>
  <div>
    <gnb/>
    <main>
      <router-view/>
    </main>
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
