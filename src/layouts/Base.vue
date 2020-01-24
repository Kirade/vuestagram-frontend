<template>
  <div>
    <gnb/>
    <section class="section">
      <router-view/>
    </section>
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

.section {
  margin-top: 77px;
}

</style>
