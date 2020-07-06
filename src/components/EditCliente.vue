<template>
  <div class="divPrincipal container">
    <form @submit="onSubmit" v-if="cli">
      <div class="form-group">
        <input v-model="cli.nome" type="text" class="form-control" placeholder="Nome" required>
      </div>
      <div class="form-group">
        <input v-model="cli.numero" type="text" class="form-control" placeholder="Número">
      </div>
      <div class="form-group row" style="padding-left: 25px">
        Ativo: <b-form-checkbox v-model="cli.isActive" name="check-button" switch size="lg" ></b-form-checkbox>
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
      cli: null,
      isLoading: false,
    };
  },
  created() {
    this.fetchCliente();
    // console.log(this.$route);
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      this.isLoading = true;
      reqPut(`/clientes/${this.$route.params.id}`, this.cli).then(() => {
        alert("Cliente alterado com sucesso!");
        this.isLoading = false;
        this.$router.go(-1);
      }).catch((err) => {
        this.isLoading = false;
        alert(err);
      });
    },
    fetchCliente() {
      reqGet(`/clientes/${this.$route.params.id}`).then((res) => {
        this.cli = res.data;
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
