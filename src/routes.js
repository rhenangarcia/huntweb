import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//Importa os componentes necessários
import Main from "./pages/main";
import Product from "./pages/product";

/* 
 * Cria roteador de rotas em JSX p/ acesso das páginas (componentes) do aplicativo:
 * - BrowserRouter: indica que as rotas serão chamadas através do browser
 *   - basename: indica endereço base padrão p/ todas as rotas, está configurado p/ utilizar 
 * o GitHub Pages (https://github.com/rafgraph/spa-github-pages#usage-instructions), mas
 * a propriedade pode ser removida no localhost
 * 
 * - Switch: permite que apenas uma rota seja chamada ao mesmo tempo, dessa forma
 * apenas um componente é carregado por rota
 * 
 * - Route: indica a rota da página (componente)
 *   - exact: apenas "/" redireciona qualquer endereço começando com "/" para essa rota, 
 * porém propriedade "exact" indica que aquele é caminho exato da rota, eliminando o 
 * comportamento anterior
 */
const Routes = () => (
  <BrowserRouter basename="/huntweb/build">
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/products/:id" component={Product} />
    </Switch>
  </BrowserRouter>
)

export default Routes;