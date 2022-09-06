<template>
  <div class="home">
    <div class="base">
      <lateral :logo="true" />
      <lorem-part-1 />
    </div>
  </div>
</template>

<script>
import Lateral from "@/components/Lateral.vue";
import LoremPart1 from "../components/LoremPart1.vue";

export default {
  components: {
    Lateral,
    LoremPart1,
  },
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
  height: 100%;
}
</style>