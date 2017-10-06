<template>
  <div id="app">
    <main class="main">
      <keep-alive>
        <router-view name="main" class="mainview"></router-view>
      </keep-alive>
    </main>
  </div>
</template>

<script>
export default {
  name: 'app',
  created () {
    console.log('APP_ENV:', process.env.APP_ENV)
    console.log('Release:', process.env.RELEASE)
  }
}
</script>

<style lang="scss">
@import "style/sass/mixins";
*, *:before, *:after { @include border-box; }
@import "style/sass/ui/icons";
@import "style/sass/ui/fonts";

body{
  @include OpenSans;
  min-height: 100vh;
  font-size: $default_font_size;
  background-color: $light_gray;

  a{
    color: $green;
    font-weight: $font_weight_semibold;

    &:hover{
      color: saturate(lighten($orange, 7%), 15%);
    }
  }

  #app{
    display: flex;

    main{
      flex-grow: 1;

      @include bpSm{
        margin-left: -300px;
        width: 100vw;
      }

      @include bpXs{
        margin-left: calc(-100vw + #{$blh*3});
        width: 100vw;
      }
    }
  }
}

</style>
