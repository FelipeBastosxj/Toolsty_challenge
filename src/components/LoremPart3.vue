<template>
  <div class="base">
    <div class="title">
      <div class="flex">
        <p class="color-padrao sub-title">/Contato</p>
      </div>
      <Form />
    </div>
    <div class="part2">
      <utils
        :title="'Siga-nos'"
        :text="'Fique sempre por dentro de todas as novidades da PlanXP e de todas empresas do Grupo Plan Marketing'"
        :nomeLink="'VER NO GOOGLE MAPS'"
      />
      <utils
        :title="'/RS'"
        :text="'Rua Onze de Junho, 243 Novo Hamburgo / RS Brasil +55 51982290400'"
        :nomeLink="'VER NO GOOGLE MAPS'"
      />
      <utils
        :title="'/SP'"
        :text="'Rua ibijaú, 355/Sala 1309 São Paulo/SP Brasil +551198871.8556'"
        :nomeLink="'VER NO GOOGLE MAPS'"
      />
      <utils
        :title="'Siga-nos'"
        :text="'A Plan faz parte do grupo Plan Marketing, um grupo de comunicação completo.'"
        :nomeLink="'CONHEÇA'"
      />
      <utils
        :title="'Siga-nos'"
        :text="'A Plan XP é especializada em realidade virtual, realidade aumentada e jogos'"
        :nomeLink="'CONHEÇA'"
      />
      <utils
        :title="'Siga-nos'"
        :text="'A FullUp é uma agência especializada em branding, design e campanhas'"
        :nomeLink="'CONHEÇA'"
      />
    </div>
  </div>
</template>

<script>
import Form from "./Form.vue";
import Utils from "./Utils.vue";
export default {
  components: { Form, Utils },
  setup() {
    return {};
  },
};
</script>

<style scoped>
.base {
  display: flex;
  align-items: center;
  height: 100%;
}

.title {
  display: flex;
  text-align: start;
  flex-direction: column;
  padding-left: 50px;
  width: 40%;
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

.part2 {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding-left: 100px;
  width: 40%;
  justify-content: center;
  align-items: center;
}
</style>
