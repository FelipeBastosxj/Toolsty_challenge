<template>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: rgb(30, 30, 30);
  height: 100%;
  overflow: hidden;
}

html,
body {
  height: 100%; /*both html and body*/
  background-color: rgb(30, 30, 30);
}
body {
  margin: 0; /*reset default margin*/
  background-color: rgb(30, 30, 30);
}
</style>
