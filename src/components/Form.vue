<template>
  <main>
    <section class="title">
      <span
        >Gostou de saber mais sobre as inovações tecnológicas e também quer
        oferecer novas experiências aos seus clientes? Então entre em contato e
        marque um encontro real conosco para conversarmos sobre as infinitas
        possibilidades do mundo virtual</span
      >
    </section>
    <section>
      <div>
        <span class="column">Nome:</span>

        <input type="text" name="" id="" />
      </div>
      <div class="meio">
        <div class="column">
          <span>E-mail:</span>

          <input type="text" name="" id="" />
        </div>
        <div class="column telefone">
          <span>Telefone:</span>

          <input type="text" name="" id="" />
        </div>
      </div>
      <div class="last">
        <span>Mensagem:</span>

        <textarea name="" id="" cols="30" rows="10"></textarea>
      </div>
    </section>
    <p>ENVIAR</p>
  </main>
</template>

<script>
export default {};
</script>

<style scoped>
.title {
  margin-top: 30px;
  margin-bottom: 20px;
}

main {
  width: 100%;
}

.meio {
  display: flex;
}

.last {
  display: flex;
  flex-direction: column;
}

span {
  color: #ffffff;
  margin-bottom: 7px;
  margin-top: 10px;
}

.column {
  display: flex;
  flex-direction: column;
  width: 100%;
}

input,
textarea {
  width: 100%;
  border: 1px solid rgb(147, 149, 152);
  background-color: transparent;
  border-radius: 0px 25px 0px 0px;
  outline: none;
}

input {
  height: 30px;
}

.telefone {
  margin-left: 15px;
}

p {
  margin-top: 20px !important;
  margin: 0;
  cursor: pointer;
  color: rgb(147, 149, 152);
}
</style>