import React from "react";
import "./styled.css";
import bgHeader from "../../assets/bg-header.jpg";
import whats from "../../assets/whats.png";

import {
  coneRecheado,
  miniTrufasDeAcucar,
  ovosDeColher,
  paoDeMelTrufados,
} from "./utils/listaProdutos";

const Cardapio = () => {
  return (
    <div className="body">
      <div className="header">
        <img src={bgHeader} alt="" />
      </div>
      <a className="whats" href="https://wa.me/5513991687969">
        <div className="encomenda">
          <p>Faça seu pedido</p>
          <img src={whats} alt="" />
        </div>
      </a>
      <div className="containerCardapio">
        <div className="containerProdutos">
          <h3 className="tituloPix">Encomendas até o dia 05/04</h3>
          <h4 className="tituloPix">
            ACEITAMOS PIX OU DINHEIRO RESERVAS MEDIANTE 50%(METADE) DO VALOR
            TOTAL
          </h4>
          <h4 className="tituloPix">
            TODAS AS CASCAS DE OVOS SÃO FEITAS COM CHOCOLATE NOBRE DA SICAO'
          </h4>
          <h1 className="titulo">Pão de mel Trufado</h1>
          <p className="informacoes">
            Todos decorados com Confeitos de Açucar e Estêncil. Cobertura de
            chocolate meio amargo com pedaços de pão de mel e recheio cremoso.
          </p>
          <h3 className="subInformacoes">Valores no saquinho </h3>
          <div className="informacoesProdutos">
            <h3>Sabores</h3>
            <div className="l">
              <span>P</span> <span>M</span>
            </div>
          </div>
          {paoDeMelTrufados.map((item) => (
            <div className="informacoesProdutos">
              <p>{item.sabor}</p>
              <div className="precos">
                <span>{item.tamanhoP}</span> <span>{item.tamanhoM}</span>
              </div>
            </div>
          ))}
          <p className="informacoesFinal">
            Caixinha com 02 uni. Tamanho P R$17
          </p>
          <p className="informacoesFinal2">
            Caixinha com 01 uni. Tamanho M R$15
          </p>
          <h1 className="titulo">Ovos de Colher</h1>
          <div className="informacoesProdutos">
            <h3>Sabores</h3>
            <div className="g">
              <span>50g</span> <span>200g</span>
            </div>
          </div>
          {ovosDeColher.map((item) => (
            <div className="informacoesProdutos">
              <p>{item.sabor}</p>
              <div className="precos">
                <span>{item.kilo50}</span> <span>{item.kilo200}</span>
              </div>
            </div>
          ))}
          <div className="infomacoesFinalColher">
            <h4>Kit Especial 3 Ovos</h4> <p>(Consultar valores)</p>
          </div>
          <div className="infomacoesFinalColher2">
            <h4>Kit Especial 1 Ovo c/trufa</h4> <p>(Consultar valores)</p>
          </div>
          <h1 className="titulo">Mini Trufa c/ Confeitos de açucar</h1>
          {miniTrufasDeAcucar.map((item) => (
            <div className="informacoesProdutos">
              <p>{item.sabor}</p>
              <div className="precos">
                <span>{item.valor}</span>
              </div>
            </div>
          ))}
          <h1 className="tituloCone">Cone Recheado</h1>
          <div className="informacoesProdutos">
            <h3>Sabores</h3>
            <div className="l">
              <span>P</span> <span>M</span>
            </div>
          </div>
          {coneRecheado.map((item) => (
            <div className="informacoesProdutos">
              <p>{item.sabor}</p>
              <div className="precos">
                <span>{item.tamanhoP}</span> <span>{item.tamanhoM}</span>
              </div>
            </div>
          ))}
          <div className="informacoesProdutosPirulito">
            <h2 className="containerPirulito">Pirulito Recheado</h2>
            <span>R$10</span>
          </div>
          <p>
            Cobertura de chocolate meio amargo, com pedaços de pão de mel e
            recheio cremoso de ninho c/nutella.
          </p>
          <div className="informacoesProdutosPirulito">
            <h2 className="containerPirulito">Barrinha recheada</h2>
            <span>R$10</span>
          </div>
          <p>
            Cobertura de chocolate meio amargo ou chocolate Branco, com pedaços
            de pão de mel e recheio Nutella ou Ninho c/nutella.
          </p>
          <div className="informacoesProdutosPirulito">
            <h2 className="containerPirulito">Cenoura/ Coelho Recheado</h2>
            <span>R$10</span>
          </div>
          <p className="informacoesPirulito">
            Cobertura de chocolate Branco, com pedaços de pão de mel e recheio
            Nutella ou Ninho c/nutella.
          </p>
          <h2 className="tituloCone">
            Seja criativo e presentei quem você ama
          </h2>
          <div className="informacoesCesta">
            <p>Monte sua cesta</p>
            <span>R$10</span>
          </div>
          <p className="final">
            Tem M e G. a partir de R$50 em produtos ganhe a cesta de brinde
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cardapio;
