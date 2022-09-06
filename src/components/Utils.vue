<template>
  <main>
    <section class="title">{{ title }}</section>
    <section class="text">
      {{ text }}
    </section>
    <section class="links">
      {{ nomeLink }}
    </section>
  </main>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "vazio",
    },
    text: {
      type: String,
      default: "",
    },
    nomeLink: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped>
.title {
  text-align: start;
  color: rgb(147, 149, 152);
  margin-bottom: 20px;
  font-size: 22px;
}

.text {
  color: #ffffff;
  text-align: start;
}

.links {
  text-align: start;
  margin-top: 30px;
  cursor: pointer;
  color: rgb(147, 149, 152);
}

main {
  margin-bottom: 35px;
}
</style>