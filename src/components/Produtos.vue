/* eslint-disable */
<template>
  <div class="divPrincipal">
    <b-row>
      <b-col cols="auto" class="mr-auto p-3">
        <h1>Produtos</h1>
      </b-col>
      <b-col cols="auto" class="p-3">
        <b-button variant="success" href="/#/produtos/novo">Novo</b-button>
      </b-col>
    </b-row>
    <div v-if="loading" class="loading">
      <b-spinner label="Spinning"></b-spinner>
      Carregando...
    </div>
    <div class="container" v-if="items && !loading">
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Título</th>
            <th scope="col">Descrição</th>
            <th scope="col">Preço</th>
            <th scope="col">Status</th>
            <th scope="col">Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for= "(row,k) in items" :key="k">
            <th scope="row">{{row._id}}</th>
            <td>{{row.title}}</td>
            <td>{{row.descricao}}</td>
            <td>R$ {{row.preco.toFixed(2).replace('.',',')}}</td>
            <td><span :class="['dot ' + row.isActive]"></span></td>
            <td>
              <b-button variant="primary" v-on:click="editProd(row)"><b-icon icon="pencil"></b-icon></b-button>
              <b-button variant="danger" v-on:click="deletarRegistro(row)"><b-icon icon="trash"></b-icon></b-button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-if="error" class="error">
      <b-alert show variant="danger">{{ error }}</b-alert>
    </div>
    <!-- <b-modal id="modal-1" title="{{regDel.title}}">
      <p class="my-4">Deseja realmente deletar o produto {{regDel.title}}?</p>
    </b-modal> -->
  </div>
</template>

<script>
const reqGet = require('../controllers/getRequest');
const reqDel = require('../controllers/delRequest');

export default {
  data() {
    return {
      items: null,
      error: null,
      loading: false,
      regDel: null,
    };
  },
  created() {
    // fetch the data when the view is created and the data is
    // already being observed
    this.fetchData();
  },
  methods: {
    editProd(item) {
      this.$router.push(`/produtos/edit/${item._id}`);
    },
    fetchData() {
      this.error = null;
      this.post = null;
      this.loading = true;
      // replace `getPost` with your data fetching util / API wrapper
      reqGet('/produtos').then((res) => {
        this.loading = false;
        this.items = res.data;
      }).catch((err) => {
        this.loading = false;
        this.error = err;
      });
    },
    deletarRegistro(item) {
      const resp = confirm(`Deseja realmente deletar o produto '${item.title}'?`);
      if(resp){
        reqDel(`/produtos/${item._id}`).then((res) => {
          this.fetchData();
        });
      }
    },
  },
};
</script>

<style scoped>
.divPrincipal {
  margin: 50px
}
.header {
  margin: 20px;
}

.icon {
  width: 10px;
  height: 10px;
}

.dot {
  height: 25px;
  width: 25px;
  border-radius: 50%;
  display: inline-block;
}

.dot.false {
  background-color: #ff0000;
}
.dot.true {
  background-color: #008000;
}
</style>
