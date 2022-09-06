<template>
  <div class="home">
    <div class="base">
      <lateral :msg="'Que tal inovar com a gente?'" :logo="true" />
      <lorem-part-2 />
    </div>
  </div>
</template>

<script>
import Lateral from "@/components/Lateral.vue";
import LoremPart2 from "../components/LoremPart2.vue";

export default {
  components: {
    Lateral,
    LoremPart2,
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
}
</style>

