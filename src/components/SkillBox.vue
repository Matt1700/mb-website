<template>
  <InfoBox :column="column" :row="row">
    <div class="row">
      <h1>{{name}}</h1>
    </div>
  </InfoBox>
</template>

<script>
import InfoBox from './InfoBox.vue';

export default {
  name: 'SkillBox',
  components: {
    InfoBox,
  },
  props: {
    column: {
      type: String,
      default: '1 / 3',
    },
    row: {
      type: String,
      default: '2 / 4',
    },
    name: {
      type: String,
      default: 'Change me',
    },
  },
};

</script>

<style lang="scss">
.row {
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
</style>
