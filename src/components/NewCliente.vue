<template>
  <div class="divPrincipal container">
    <form @submit="onSubmit">
      <div class="form-group">
        <input v-model="form.nome" type="text" class="form-control" placeholder="Nome" required>
      </div>
      <div class="form-group">
        <input v-model="form.numero" type="text" class="form-control" placeholder="Número" required>
      </div>
      <button type="submit" class="btn btn-success btn-lg btn-block">
        <b-spinner label="Spinning" v-if="isLoading"></b-spinner>
        <span v-if="isLoading == false" >Salvar</span>
      </button>
    </form>
  </div>
</template>

<script>
const reqPost = require('../controllers/postRequests');

export default {
  data() {
    return {
      form: {
        nome: '',
        numero: '',
      },
      isLoading: false,
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      this.isLoading = true;
      // let form = this.form;
      // form.preco.replace(',', '.');
      reqPost('/clientes', this.form).then((res) => {
        this.isLoading = false;
        this.$router.go(-1);
      }).catch((err) => {
        this.isLoading = false;
        alert(err);
      });
    },
  },
};
</script>
<style scoped>
.divPrincipal {
  padding: 25px;
}
</style>
