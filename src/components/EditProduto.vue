<template>
  <div class="divPrincipal container">
    <form @submit="onSubmit" v-if="prod">
      <div class="form-group">
        <input v-model="prod.title" type="text" class="form-control" placeholder="Título" required>
      </div>
      <div class="form-group">
        <input v-model="prod.descricao" type="text" class="form-control" placeholder="Descrição" required>
      </div>
      <div class="form-group">
        <input v-model="prod.preco" type="text" class="form-control" placeholder="Preço" required>
      </div>
      <div class="form-group row" style="padding-left: 25px">
        Ativo: <b-form-checkbox v-model="prod.isActive" name="check-button" switch size="lg" ></b-form-checkbox>
      </div>
      <button type="submit" class="btn btn-success btn-lg btn-block">
        <b-spinner label="Spinning" v-if="isLoading"></b-spinner>
        <span v-if="isLoading == false" >Salvar</span>
      </button>
    </form>
  </div>
</template>

<script>
const reqPut = require('../controllers/putRequests');
const reqGet = require('../controllers/getRequest');

export default {
  data() {
    return {
      prod: null,
      isLoading: false,
    };
  },
  created() {
    this.fetchProduto();
    // console.log(this.$route);
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      this.isLoading = true;
      reqPut(`/produtos/${this.$route.params.id}`, this.prod).then(() => {
        alert("Produto alterado com sucesso!");
        this.isLoading = false;
        this.$router.go(-1);
      }).catch((err) => {
        this.isLoading = false;
        alert(err);
      });
    },
    fetchProduto() {
      reqGet(`/produtos/${this.$route.params.id}`).then((res) => {
        this.prod = res.data;
      }).catch((err) => {
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
