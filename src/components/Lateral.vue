<template>
  <div class="lateral">
    <p v-if="msg" class="titulo">
      {{ msg }}
    </p>
    <img v-if="logo" src="../assets/logo.png" alt="" />

    <div class="menus">
      <p @click="mudarRota('fazemos')" class="menu primeiro">/QUEM SOMOS</p>
      <p @click="mudarRota('fazemos')" class="menu">/OQUE FAZEMOS</p>
      <p @click="mudarRota('news')" class="menu">/PLAN NEWS</p>
      <p @click="mudarRota('news')" class="menu">/NOSSOS CLIENTES</p>
      <p @click="mudarRota('contato')" class="menu ultimo">/CONTATO</p>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  name: "HelloWorld",
  props: {
    msg: {
      type: String,
      default: "",
    },
    logo: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const router = useRouter();
    const mudarRota = async (value) => {
      router.push({ name: value });
    };
    return {
      mudarRota,
    };
  },
};
</script>

<style scoped>
.lateral {
  min-width: 9%;
  max-width: 9%;
  height: 100%;
  border-bottom: 1px solid rgb(147, 149, 152);
  border-right: 1px solid rgb(147, 149, 152);
}

.titulo {
  text-align: center;
  color: rgb(147, 149, 152);
  margin-top: 50px;
  margin-bottom: 80px;
}

.latera {
  border-bottom: 1px solid grey;
}
.menu {
  margin: 0;
  margin-top: 50px;
  font-size: 15px;
  color: white;
  cursor: pointer;
}

.primeiro {
  margin-top: 110px;
}

.ultimo {
  margin-bottom: 150px;
}

img {
  margin-top: 20px;
  width: 100px;
  height: 100px;
}

.menus {
  display: flex;
  flex-direction: column;
  justify-content: center;

  align-items: center;
}
</style>

