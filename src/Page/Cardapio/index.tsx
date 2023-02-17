import React from "react";
import "./styled.css";
import bgHeader from "../../assets/bg-header.jpg";
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

      <div className="containerCardapio">
        <div className="containerProdutos">
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
          {/* <div className="informacoesProdutos">
            <p>Doce de Leite</p>
            <div className="precos">
              <span>R$8</span> <span>R$11</span>
            </div>
          </div>
          <div className="informacoesProdutos">
            <p>Laka Oreo</p>
            <div className="precos">
              <span>R$9</span> <span>R$12</span>
            </div>
          </div> */}
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
        </div>
      </div>
    </div>
  );
};

export default Cardapio;
