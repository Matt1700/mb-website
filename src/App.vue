<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<!-- eslint-disable max-len -->
<template>
  <head>
    <meta charset="utf-8">
    <link rel="shortcut icon" type="image/png" href="./assets/icon.png"/>
    <title>Mattia Biondani</title>
  </head>
  <div class="app">
    <div v-show="currentPage == 0" class="page">
      <div class="row">
        <div class="text-container">
          <h1 style="margin-top: 20px; margin-bottom: 20px;" >Hello, I'm<br> Mattia Biondani</h1>
          <h2>Full stack software developer</h2>
        </div>

        <div class="divider"></div>

        <div class="text-container" style="max-width: 300px">
          <h2 style="color: #DDDDDD">About me</h2>
          <p>Experienced software developer with a strong background in Flutter, Vue.js, Node and SQL, bringing 4 years of expertise in designing and developing user-friendly applications.</p>
        </div>

        <div @click="currentPage = 1" class="button align-bottom">
          <p>Tell me more</p>
          <p style="font-size: 16px"><span class="material-symbols-outlined">expand_more</span></p>
        </div>
      </div>

    </div>

    <div v-show="currentPage == 1" class="page">
      <div @click="currentPage = 0" class="button align-top">
        <p style="font-size: 16px"><span class="material-symbols-outlined">expand_less</span></p>
        <p>About me</p>
      </div>

      <h1>GymBuddy</h1>

      <div class="row">

        <img class="icon" src="./assets/gymbuddy.jpg" alt="GymBuddy icon">

        <div class="divider"></div>

        <div class="text-container">
          <h2 style="color: white">My personal project</h2>
          <p style="max-width: 300px;">Workout tracker app made exclusively with Flutter, build for iOS and Android. The first beta is out on TestFlight for iPhones.</p>
          <div class="action-button">
            <p>Check it out on TestFlight <span style="margin-left: 10px;" class="material-symbols-outlined">trending_flat</span></p>
          </div>
        </div>
      </div>

      <div @click="currentPage = 2" class="button align-bottom">
        <p>My links</p>
        <p style="font-size: 16px"><span class="material-symbols-outlined">expand_more</span></p>
      </div>
    </div>

    <div v-show="currentPage == 2" class="page">
      <div @click="currentPage = 1" class="button align-top">
        <p style="font-size: 16px"><span class="material-symbols-outlined">expand_less</span></p>
        <p>Go back</p>
      </div>

      <div class="row">
        <img class="link" src="./assets/github.png" alt="Github" @click="openInNewTab('https://github.com/Matt1700')">
        <img class="link" src="./assets/linkedin.png" alt="LinkedIn" @click="openInNewTab('https://www.linkedin.com/in/mattia-biondani-9aa844112')">
        <img class="link" src="./assets/instagram.png" alt="Instagram" @click="openInNewTab('https://instagram.com/matt.1700')">
        <img class="link" src="./assets/twitter.png" alt="Twitter" @click="openInNewTab('https://twitter.com/BiondaniMattia')">
      </div>

    </div>

  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      currentPage: 0,
    };
  },
  methods: {
    openInNewTab(url) {
      window.open(url, '_blank', 'noreferrer');
    },
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz@8..144&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200');
@import url('https://fonts.googleapis.com/css2?family=Gloock&display=swap');

$breakpoints: (phone: 640px, tablet: 768px, desktop: 1024px) !default;

html, body, #app{
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  padding: 0;
  margin: 0;
  background-color: #000;
  display: flex;
  font-family: 'Roboto Flex', sans-serif;
}

.material-symbols-outlined {
  font-variation-settings:
  'FILL' 0,
  'wght' 400,
  'GRAD' 0,
  'opsz' 48
}

h1 {
  font-family: 'Gloock', serif;
  font-style: normal;
  font-weight: 800;
  font-size: 70px;
  line-height: 70px;
  display: flex;
  align-items: center;
  color: #DDDDDD;
}

h2 {
  font-family: 'Roboto Flex';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  display: flex;
  align-items: center;

  color: #949494;
}

p {
  font-family: 'Roboto Flex';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  display: flex;
  align-items: center;
  color: #949494;
}

.app {
  height: 100%;
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;

  .page {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
    padding: 20px;
    box-sizing: border-box;

    .row {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      .divider {
        background-color: #474747;
        width: 1px;
        height: 200px;
        margin-left: 80px;
        margin-right: 80px;
      }

      .icon {
        width: 150px;
        height: 150px;
        border: 2px solid #1a1a1a;
        border-radius: 40px;
      }

      .link {
        width: 69px;
        height: 69px;
        margin-left: 30px;
        margin-right: 30px;
        cursor: pointer;
      }

    }

    .button {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      margin-bottom: 20px;
      margin-top: 20px;

      p {
        padding: 0;
        margin: 5px;
        color: #7a33ff;
      }
    }

    .action-button {
      display: flex;
      flex-direction: row;
      cursor: pointer;

      p {
        padding: 0;
        margin: 0;
        color: #7a33ff;
      }
    }

    .align-bottom {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
    }

    .align-top {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
    }
  }
}

.background-container {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .background {
    height: 100%;
    align-self: center;
  }
}

@media screen and (min-width: 670px) and (max-width: 800px) {
  h1 {
    font-size: 50px;
    line-height: 50px;
  }
}

@media screen and (max-width: 670px) {
  h1 {
    font-size: 40px;
    line-height: 40px;
  }

  .row {
    display: flex;
    flex-direction: column !important;

    .divider {
      height: 1px !important;
      width: calc(100% - 40px) !important;
      margin-top: 40px;
      margin-bottom: 40px;
    }

    .link {
      margin-top: 20px;
      margin-bottom: 20px;
    }
  }
}

</style>
