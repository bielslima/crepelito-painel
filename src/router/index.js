import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Relatorios from '@/components/Relatorios';
import Produtos from '@/components/Produtos';
import NovoProduto from '@/components/NewProduto';
import EditProduto from '@/components/EditProduto';

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
      path: '/relatorios',
      name: 'relatorios',
      component: Relatorios,
    },
  ],
});
