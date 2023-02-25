<!-- eslint-disable max-len -->
<template>
  <InfoBox>
    <div class="row">
      <div class="vertical">
        <h1 class="text" style="margin-bottom: 10px !important;">About</h1>
        <p class="text">Experienced software developer with a strong background in Flutter, Vue.js, Node and SQL, bringing 4 years of expertise in designing and developing user-friendly applications.</p>
      </div>
      <div class="divider"></div>
      <div class="vertical" style="flex: 0.5 !important">
        <h1>My skills <span class="material-symbols-outlined" style="margin-left: 10px">trending_flat</span></h1>
      </div>
    </div>
  </InfoBox>
</template>

<script>
import InfoBox from './InfoBox.vue';

export default {
  name: 'AboutMeSection',
  components: {
    InfoBox,
  },
};
</script>

<style lang="scss">

.row {
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  align-items: center;

  .vertical {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    box-sizing: border-box;
  }

  .divider {
    width: 1px;
    height: auto;
    background-color: #545454;
    height: calc(100% - 40px);
  }

  .text {
    align-self: start;
    padding: 0;
    margin: 0;
  }
}
</style>
