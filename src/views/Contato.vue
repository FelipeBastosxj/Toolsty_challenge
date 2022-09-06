<template>
  <div class="home">
    <div class="base">
      <lateral :msg="'Que tal inovar com a gente?'" :logo="true" />
      <lorem-part-3 />
    </div>
  </div>
</template>

<script>
import Lateral from "@/components/Lateral.vue";
import LoremPart3 from "../components/LoremPart3.vue";

export default {
  components: {
    Lateral,
    LoremPart3,
  },
  name: "Home",
};
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.base {
  display: flex;
  height: 100% !important;
  width: 100%;
}
</style>