<template>
  <div class="divPrincipal container">
    <form @submit="onSubmit">
      <div class="form-group">
        <input v-model="form.title" type="text" class="form-control" placeholder="Título" required>
      </div>
      <div class="form-group">
        <input v-model="form.descricao" type="text" class="form-control" placeholder="Descrição" required>
      </div>
      <div class="form-group">
        <input v-model="form.preco" type="text" class="form-control" placeholder="Preço" required>
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
        title: '',
        descricao: '',
        preco: '',
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
      reqPost('/produtos', this.form).then((res) => {
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
