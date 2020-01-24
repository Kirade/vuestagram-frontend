<template>
  <article class="article">
    <header class="article__header">header</header>
    <div>
      <img class="article__photo" src="@/assets/test.jpg"/>
    </div>
    <div>div2</div>
    <div>div3</div>
    <div>div3</div>
  </article>
</template>

<script>
export default {
};
</script>

<style lang="scss" scoped>

.article {
  margin-bottom: 60px;

  /* temp */
  border: 1px solid rgb(219, 219, 219);

  &__header {
    height: 60px;
    /* temp */
    border: 1px solid rgb(219, 219, 219);
  }

  &__photo {

    width: 100%;
  }
}

</style>
