<template>
  <div class="info-box" :style="{'grid-column': column, 'grid-row': row}">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'InfoBox',
  props: {
    column: {
      type: String,
      default: '1 / 3',
    },
    row: {
      type: String,
      default: '2 / 4',
    },
  },
};
</script>

<style lang="scss">

.info-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  background: radial-gradient(129.65% 532.79% at 0% 0%,
   rgba(101, 101, 101, 0.2) 0%,
    rgba(0, 0, 0, 0) 100%),
     rgba(34, 34, 34, 0.85);
  box-shadow: 0px 5px 6px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(12.5px);
  border-radius: 25px;
  border: 1px solid #545454;
}

</style>
