<template>
  <div class="top-bar">
    <h1 class="text">Mattia Biondani</h1>
    <div class="divider"></div>
    <h2>Full stack software developer</h2>
  </div>
</template>

<script>
export default {
  name: 'TopBar',
  props: {
    msg: String,
  },
};
</script>

<style lang="scss">

.top-bar {
  grid-column-start: 1;
  grid-column-end: 6;
  grid-row-start: 1;
  grid-row-end: 1;
  box-shadow: 0px 5px 6px 1px rgba(0, 0, 0, 0.15);
  border-radius: 25px;
  padding: 5px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  backdrop-filter: blur(12.5px);
  background: radial-gradient(389.06% 14739.67% at 5.94% -253.12%,
  rgba(132, 132, 132, 0.2) 0%,
  rgba(0, 0, 0, 0) 100%),
  rgba(34, 34, 34, 0.8);
  padding-left: 40px;
  padding-right: 40px;
  border: 1px solid #545454;

  .divider {
    width: 1px;
    height: 25px;
    margin-left: 20px;
    margin-right: 20px;
    background-color: #545454;
  }

  .text {
    padding: 0;
    margin: 0;
  }
}

</style>
