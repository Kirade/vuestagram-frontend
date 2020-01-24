<template>
  <article class="article">
    <header class="article__header">
      <img class="article__writer-thumbnail" src="@/assets/heart.svg" alt="profile image"/>
      <p class="article__writer">UserId123</p>
    </header>
    <div>
      <img class="article__photo" src="@/assets/test.jpg"/>
    </div>
    <div class="article__icon-group">
      <div class="article__icon-left-group">
        <img class="article__icon" src="@/assets/heart.svg"/>
        <img class="article__icon" src="@/assets/chat.svg"/>
        <img class="article__icon" src="@/assets/send.svg"/>
      </div>
      <div class="article__icon-right-group">
        <img class="article__icon" src="@/assets/bookmark.svg"/>
      </div>
    </div>
    <div class="article__like">
      45 Likes
    </div>
    <div class="article__comment">
      Comment...
    </div>
    <div class="article__date">
      January 11
    </div>
    <div class="article__add-comment">
      Add a Comment...!!! INVALIDATION!! ACTIVATED
    </div>
  </article>
</template>

<script>
export default {
};
</script>

<style lang="scss" scoped>

.article {
  margin-bottom: 60px;

  border: 1px solid rgb(219, 219, 219);

  &__header {
    display: flex;
    align-items: center;

    box-sizing: border-box;
    height: 60px;
    padding: 16px;
  }

  &__writer {
    &-thumbnail {
      width: 32px;
      height: 32px;
      margin-right: 16px;
    }
  }

  &__photo {
    width: 100%;
  }

  &__icon {
    width: 24px;
    height: 24px;

    padding: 8px;

    &-group {
      display: flex;
      justify-content: space-between;
    }

    &-left-group {
      display: flex;
      justify-content: flex-start;
    }

    &-right-group {
      display: flex;
      justify-content: flex-start;
    }
  }
}

</style>
