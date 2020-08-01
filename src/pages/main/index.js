import React, { Component } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";

import "./styles.css"

//Exporta um componente com estado
export default class Main extends Component
{
  //Objeto que armazena estado do componente, os itens representam 
  //"propriedades do estado" do componente do arquivo
  state = 
  {
    products: [],
    productInfo: {},
    page: 1
  };

  //Executa assim que o componente for montado em tela
  componentDidMount()
  {
    this.loadProducts();
  }

  //Métodos proprietário -> Usa-se arrow functions p/ que o método
  //esteja no mesmo escopo que os outros da classe (this)

  //Carrega a lista de registros da API configurada
  loadProducts = async (page = 1) =>
  {
    const response = await api.get(`/products?page=${page}`);

    //Desestrutura a resposta da API, usando o operador "rest"
    //p/ separar o docs de todo o restante da resposta
    const { docs, ...productInfo } = response.data;

    //Modifica o estado do componente, passando um objeto com
    //os itens a serem alterados
    this.setState(
      {
        products: docs,
        productInfo,
        page
      });
  }

  //Retrocede p/ página de registros anterior
  prevPage = () =>
  {
    //Desestrutura o estado do componente
    const { page } = this.state;

    //Se for a primeira página, não faz nada
    if (page === 1) return;

    const pageNumber = page - 1;

    this.loadProducts(pageNumber);
  }

  //Avança p/ próxima página de registros
  nextPage = () =>
  {
    //Desestrutura o estado do componente
    const { productInfo, page } = this.state;

    //Se o número da página for o último, não faz nada
    if (page === productInfo.pages) return;
    
    const pageNumber = page + 1;

    this.loadProducts(pageNumber);
  }

  /*
   * Renderiza o componente usando JSX, utilizando os itens armazenados
   * no estado do componente através do this.state
   * 
   * Este método monitora as alterações do estado, atualizando a DOM
   * ao identificar qualquer modificação
   * 
   * Em JSX, {} permite a execução de códigos JS
   * 
   * - Link: indica qual rota deve ser acessada
   */
   render()
  {
    //Desestrutura o estado do componente
    const { products, productInfo, page } = this.state;

    return (
      <div className="product-list">
        {products.map(product => (
          <article key={product._id}>
            <strong>{product.title}</strong>
            <p>{product.description}</p>
            <Link to={`/products/${product._id}`}>Acessar</Link>
          </article>
        ))}
        <div className="actions">
          <button disabled={page === 1} onClick={this.prevPage}>Anterior</button>
          <button disabled={page === productInfo.pages} onClick={this.nextPage}>Próximo</button>
        </div>
      </div>
    );
  }
}