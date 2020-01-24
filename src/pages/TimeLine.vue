<template>
  <section class="section">
    <div class="">
      <article>
        TimeLine
      </article>
      <div>
        sticky
      </div>

    </div>
  </section>
</template>

<script>
export default {
};
</script>

<style lang="scss" scoped>

.section {
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 935px;
  margin: 0 auto;
  padding-top: 60px;

  @media (max-width: 1000px) {
    max-width: 600px;
  }
}

</style>
