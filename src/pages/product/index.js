import React, { Component } from "react";
import api from "../../services/api"

import "./styles.css"

//Exporta um componente com estado
export default class Product extends Component
{
  //Objeto que armazena estado do componente, os itens representam 
  //"propriedades" do componente
  state = 
  {
    product: {}
  };

  //Executa assim que o componente for montado em tela
  async componentDidMount()
  {
    //Desestrutura os parâmetros passados na rota
    const { id } = this.props.match.params;

    const response = await api.get(`/products/${id}`);

    //Modifica o estado do componente, passando um objeto com
    //os itens a serem alterados
    this.setState(
      {
        product: response.data
      });
  }

  /*
   * Renderiza o componente usando JSX, em que p/ utilizar os itens
   * armazenados no estado do componente, usa-se {this.state}
   * 
   * Este método monitora as alterações do estado, atualizando a DOM
   * ao identificar qualquer modificação
   * 
   * Em JSX, {} permite a execução de códigos JS
   */
  render()
  {
    //Desestrutura o estado do componente
    const { product } = this.state;

    return (
      <div className="product-info">
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <p>URL: <a href={product.url}>{product.url}</a></p>
      </div>
    );
  }
}