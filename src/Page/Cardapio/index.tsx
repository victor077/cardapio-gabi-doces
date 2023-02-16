import React from "react";
import "./styled.css";
import bgHeader from "../../assets/bg-header.jpg";

const Cardapio = () => {
  return (
    <div className="body">
      <div className="header">
        <img src={bgHeader} alt="" />
      </div>
      <div className="containerCardapio">
        <div className="produtos">
          <h1 className="subTitulo">Pão de mel Trufado</h1>
          <p className="subInformacoes">
            Todos decorados com Confeitos de Açucar e Estêncil. Cobertura de
            chocolate meio amargo com pedaços de pão de mel e recheio cremoso.
          </p>
          <h3 className="valores">Valores no saquinho</h3>
          <div className="listaProdutos">
            <div className="tamanhos">
              <h3>Sabores</h3>
              <div className="l">
                <span>P</span> <span>M</span>
              </div>
            </div>
            <div className="tamanhos">
              <p>Nutela</p>
              <div className="precos">
                <span>R$9</span> <span>R$12</span>
              </div>
            </div>
            <div className="tamanhos">
              <p>Doce de Leite</p>
              <div className="precos">
                <span>R$8</span> <span>R$11</span>
              </div>
            </div>
            <div className="tamanhos">
              <p>Laka Oreo</p>
              <div className="precos">
                <span>R$9</span> <span>R$12</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cardapio;
