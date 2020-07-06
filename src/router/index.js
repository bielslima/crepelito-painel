import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Relatorios from '@/components/Relatorios';
import Produtos from '@/components/Produtos';
import NovoProduto from '@/components/NewProduto';
import EditProduto from '@/components/EditProduto';
import Clientes from '@/components/Clientes';
import NovoCliente from '@/components/NewCliente';
import EditCliente from '@/components/EditCliente';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'hello',
      component: HelloWorld,
    },
    {
      path: '/produtos',
      name: 'produtos',
      component: Produtos,
    },
    {
      path: '/produtos/novo',
      name: 'nProduto',
      component: NovoProduto,
    },
    {
      path: '/produtos/edit/:id',
      name: 'eProduto',
      component: EditProduto,
    },
    {
      path: '/clientes',
      name: 'clientes',
      component: Clientes,
    },
    {
      path: '/clientes/novo',
      name: 'nClientes',
      component: NovoCliente,
    },
    {
      path: '/clientes/edit/:id',
      name: 'eClientes',
      component: EditCliente,
    },
    {
      path: '/relatorios',
      name: 'relatorios',
      component: Relatorios,
    },
  ],
});
