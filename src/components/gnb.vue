<template>
  <nav class="gnb-wrapper">
    <div class="gnb">
      <div class="logo-wrapper">
        <img class="logo__image" src="@/assets/logo.svg"/>
        <div class="logo__vertical-separator"></div>
        <p class="logo__name">vuestagram</p>
      </div>
      <div class="search-wrapper">
        <input class="search__input" type="text" placeholder="Search">
      </div>
      <div class="icon-wrapper">
        <div class="icon-group">
          <img class="icon__image" src="@/assets/compass.svg">
          <img class="icon__image icon__image--margin-left" src="@/assets/heart.svg">
          <img class="icon__image icon__image--margin-left" src="@/assets/user.svg">
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
};
</script>

<style lang="scss" scoped>

.gnb {

  &-wrapper {
    display: flex;
    justify-content: center;

    position: fixed;
    top: 0;
    width: 100%;
    box-sizing: border-box;
    height: 77px;

    border-bottom: 1px solid rgb(219, 219, 219);
  }

  display: flex;
  align-items: center;

  box-sizing: border-box;
  height: 100%;
  width: 100%;
  max-width: 975px;
  padding: 20px;
}

.logo {

  &-wrapper {
    display: flex;
    align-items: center;

    flex: 1;
  }

  &__image {
    width: 24px;
    height: 24px;
  }

  &__vertical-separator {
    margin-left: 16px;
    margin-right: 16px;

    width: 1px;
    height: 28px;
    background-color: rgb(38, 38, 38);
  }

  &__name {
    font-size: 28px;
    font-weight: bold;
    font-family: Cursive, sans-serif;
  }

}

.search {

  &-wrapper {

    display: flex;
    align-items: center;
    flex: 0;
    justify-content: center;
    height: 28px;
    min-width: 215px;
  }

  &__input {
    box-sizing: border-box;
    height: 100%;
    width: 100%;

    border: 1px solid rgb(219, 219, 219);
    border-radius: 3px;
    padding: 3px 26px;
  }

}

.icon {
  &-wrapper {
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: flex-end;
  }

  &-group {
    display: flex;
    justify-content: space-between;
  }

  &__image {


    &--margin-left {
      margin-left: 30px;
    }
  }
}


</style>
