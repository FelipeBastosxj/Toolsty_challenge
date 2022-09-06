<template>
  <div class="base">
    <main class="introducao">
      <div><p style="color: #f0f0f0f0">/O que fazemos</p></div>
      <div>
        <p style="color: rgb(147, 149, 152); font-size: 36px">/Games</p>
      </div>
      <div>
        <p
          style="
            color: rgb(147, 149, 152);
            font-size: 22px;
            margin-top: 25px;
            margin-bottom: 25px;
          "
        >
          Desenvolvimento de games digitais.
        </p>
      </div>
      <div>
        <p style="color: rgb(147, 149, 152); margin-bottom: 25px">
          Empresa especialista em desenvolvimento games digitais e gamificação
        </p>
      </div>
      <div>
        <p style="color: #f0f0f0f0; font-size: 12px">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          nesciunt dolore, totam velit iste nam quis labore quas. Mollitia,
          doloribus deleniti? Eius quia at recusandae natus itaque fuga, aut
          incidunt.
        </p>
      </div>
    </main>
    <section class="cards">
      <span class="card-1">
        <img class="logo" src="../assets/logo-card.png" alt="" />
        <p class="sub-titulo">
          A <span style="color: #ffffff">PlanXP</span> tem uma equipe
          qualificada para
          <span style="color: #ffffff">desenvolvimento de jogos digitais</span>
          para
          <span style="color: #ffffff">dispositivos móveis</span> (smartphones,
          tablets e afins)
        </p>
      </span>
      <span class="card-2">
        <img class="logo" src="../assets/logo-card.png" alt="" />
        <p class="sub-titulo">
          Desenvolvemos games para anunciar seus produtos e serviços, através da
          <span style="color: #ffffff">gamificação</span> (aplicações que
          utilizam dinâmicas de jogos para engamjamentos de usuários, resolução
          de problemas e melhoria no aprendizado)
        </p>
      </span>
      <span class="card-3">
        <img class="logo" src="../assets/logo-card.png" alt="" />
        <p class="sub-titulo">
          Utilizando as últimas tecnologias para a
          <span style="color: #ffffff"> criação de games</span>, trabalhamos de
          acordo com as necessidades dos clientes, sempre buscando oferecer o
          resultado que ele busca.
        </p>
      </span>
      <span class="card-4">
        <img class="logo" src="../assets/logo-card.png" alt="" />
        <p class="sub-titulo2">
          Experimente inovar com a
          <span style="color: #ffffff"> PlanXP</span> para
          <span style="color: #ffffff"
            >desenvolver os seus jogos digitais!</span
          >
        </p>
        <p class="sub-titulo3">ENTRE EM CONTATO AGORA MESMO</p>
      </span>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.base {
  display: flex;
  width: 90%;
  align-items: center;
}
.introducao {
  display: flex;
  flex-direction: column;
  padding-left: 50px;
  text-align: start;
  padding-right: 50px;
  width: 35%;
}

p {
  margin: 0;
}

.cards {
  display: flex;
}

.card-1 {
  display: flex;
  flex-direction: column;
  margin-left: 40px;
  align-items: center;
  width: 200px;
}

.card-2 {
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  align-items: center;
  width: 200px;
}

.card-3 {
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  align-items: center;
  width: 200px;
}

.card-4 {
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  align-items: center;
  width: 200px;
}

img {
  width: 200px;
  height: 200px;
}

.sub-titulo {
  text-align: start;
  margin-top: 15px;
  color: rgb(147, 149, 152);
  width: 200px;
  line-height: 25px;
  font-size: 12px;
}

.sub-titulo2 {
  text-align: start;
  margin-top: 15px;
  color: rgb(147, 149, 152);
  font-size: 27px;
}

.sub-titulo3 {
  margin-top: 15px;
  text-align: start;
  color: rgb(147, 149, 152);
  cursor: pointer;
}
</style>