<template>
  <section class="section">
    <div class="section__separator">
      <div class="articles">
        <user-article/>
        <user-article/>
        <user-article/>
        <user-article/>
      </div>
      <div class="sticky">
        sticky
      </div>

    </div>
  </section>
</template>

<script>
import Article from '@/components/Article';

export default {
  components: {
    userArticle: Article,
  },
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

  &__separator {
    display: flex;
  }
}

.articles {
  width: 100%;
  max-width: 618px;
  margin-right: 28px;


  @media (max-width: 1000px) {
    max-width: 600px;
    margin: 0;
    padding: 0;
  }
}

.sticky {
  max-width: 293px;
  width: 100%;

  /* temp */
  border: 1px solid rgb(219, 219, 219);

  @media (max-width: 1000px) {
    display: none;
  }

}

</style>
