<template>
  <div class="base">
    <div class="title">
      <p style="color: #ffffff">/Plan news</p>
      <div class="flex">
        <p class="color-padrao sub-title">/Cases Games</p>
        <p class="sub-title2">CLIQUE AQUI PARA VER TODO O BLOG</p>
      </div>
    </div>

    <div class="flex">
      <card
        :informacoes="'Lorem ipsum dolor, sit amet consectetur adipisicing elitsx vitae doloremque iste maxime!'"
        :mark="'SKA'"
        :title="'Plan cria o novo site da SKA'"
      />
      <card
        :informacoes="'Lorem ipsum dolor, sit amet consectetur adipisicing elitsx vitae doloremque iste maxime!'"
        :mark="'TINTAS KILLING'"
        :title="'Plan cria o novo site para a Tintas Killing'"
      />
      <card
        :informacoes="'Lorem ipsum dolor, sit amet consectetur adipisicing elitsx vitae doloremque iste maxime!'"
        :mark="'CARGO BR'"
        :title="'Estamos desenvolvendo o novo site da CargoBr'"
      />
      <card
        :informacoes="'Lorem ipsum dolor, sit amet consectetur adipisicing elitsx vitae doloremque iste maxime!'"
        :mark="'XALINGO'"
        :title="'Clubinho Xalingo com novidades'"
      />
      <card
        :informacoes="'Lorem ipsum dolor, sit amet consectetur adipisicing elitsx vitae doloremque iste maxime!'"
        :mark="'AROMATIC'"
        :title="'Novo site da Aromatic no ar'"
      />
    </div>
  </div>
</template>

<script>
import card from "./card.vue";
export default {
  components: { card },
  setup() {
    return {};
  },
};
</script>

<style scoped>
.base {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
}

.title {
  display: flex;
  text-align: start;
  flex-direction: column;
  padding-left: 50px;
}

.sub-title {
  font-size: 36px;
}

.sub-title2 {
  margin-left: 25px;
  color: rgb(147, 149, 152);
  cursor: pointer;
}

p {
  margin: 0;
}

.color-padrao {
  color: rgb(147, 149, 152);
}

.flex {
  display: flex;
  align-items: center;
}
</style>
