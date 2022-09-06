<template>
  <div class="cards">
    <span class="card-1">
      <img class="logo" src="../assets/logo-card.png" alt="" />
      <p class="mark">
        <span class="back">{{ mark }}</span>
      </p>
      <p class="title">{{ title }}</p>
      <p class="sub-titulo">
        {{ informacoes }}
      </p>
      <p class="button">SAIBA MAIS</p>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    mark: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "Insira um titulo",
    },
    informacoes: {
      type: String,
      default: "Insira uma informacao",
    },
  },
};
</script>

<style scoped>
.card-1 {
  margin-top: 15px;
  display: flex;
  flex-direction: column;

  width: 250px;
  background-color: rgb(54, 46, 46);
}

.sub-titulo {
  text-align: start;
  margin-top: 15px;
  color: #ffffff;
  width: 250px;
  font-size: 12px;
  line-height: 25px;
  margin-left: 10px;
}

.cards {
  padding-left: 50px;
}

p {
  margin: 0;
}

img {
  width: 250px;
  height: 200px;
}

.mark {
  text-align: start;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 10px;
  width: auto;
  font-size: 13px;
}

.back {
  background-color: grey;
  padding: 3px;
}

.button {
  cursor: pointer;
  text-align: start;
  margin-top: 15px;
  margin-bottom: 15px;
  margin-left: 10px;
  color: rgb(147, 149, 152);
  font-size: 14px;
}

.title {
  text-align: start;
  margin-left: 10px;
  color: rgb(147, 149, 152);
  font-size: 20px;
}
</style>