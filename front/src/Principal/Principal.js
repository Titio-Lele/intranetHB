import React, { Component } from 'react';
import '../styles/estilo.css'

class Principal extends Component {


    constructor(props) {
        super(props);

        this.state = {
            incidentes: [],
        }
    }

    async componentDidMount() {

        await
            fetch('http://localhost:8080/api/')
                .then(response => response.json())
                .then((data) => this.setState({ incidentes: data }));
    }

    render() {

        const { incidentes } = this.state;

        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-4">
                        {incidentes.map(incidente =>
                            <div className="card" key={incidente.id}>
                                <div className="card-header bg-info text-white">
                                    <hgroup>
                                        <span>{incidente.titulo}</span><br />
                                        <span>Publicado em 06 de Junho às 08:30</span>
                                    </hgroup>
                                </div>
                                <div className="card-body">
                                    <header>
                                        <section>
                                            <div className="classificado">
                                                <img src={require('../img/computer-crash.jpg')}></img>
                                                <p className="legenda">Falha de login no CSP</p>
                                            </div>
                                            <article>
                                                <span><b>{incidente.titulo}</b> </span>
                                                <p>{incidente.descricao}
                                                </p>
                                            </article>
                                        </section>
                                    </header>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="col-sm-5">
                        <div className="card">
                            <div className="card-header bg-info text-light">
                                <header>
                                    <hgroup>
                                        <span>Treinamento para nivelamento de conhecimento</span><br />
                                        <span>Publicado em 06 de Junho às 09:00</span>
                                    </hgroup>
                                </header>
                            </div>
                            <section>
                                <div className="classificado">
                                    <img src={require("../img/computer-class.jpg")}></img>
                                    <p className="legenda">Vamos desbravar novos horizontes!</p>
                                </div>
                                <article>
                                    <p>Informática Básica - O Sistema Operacional Windows</p>
                                    <p>Nesse curso, que será ministrado pelo multiplicador Leonardo,
                                    vamos falar abordar assuntos como: o que é um sistema operacional,
                                    qual sua importância, painel de controle do Windows, a ferramenta CMD,
                                        Windows Defen<span id="dots">...</span><span id="more">der, entre outras
                                        funcionalidade vitais que utilizamos todos os dias. Para participar
                                        do treinamento, não é necessário prévio conhecimento na área de
                                        Tecnologia da Informação (T.I). Basta preencher o formulário informando
                                        seu e-mail para contato e ficar de olho para os próximos passos!
                                        </span>
                                    </p>
                                    <button type="button" onclick="myFunction()" id="myBtn" className="btn btn-info"><span>Leia mais</span></button>
                                </article>
                            </section>
                        </div>
                        <div className="card">
                            <div className="card-header bg-info text-white">
                                <header>
                                    <hgroup>
                                        <span>Tudo definido e nada resolvido</span><br />
                                        <span>Publicado em 06 de Junho às 09:15</span>
                                    </hgroup>
                                </header>
                            </div>
                            <div className="card-body">
                                <div className="classificado">
                                    <img src={require("../img/meet.jpg")}></img>
                                    <p className="legenda">Cuidado com reuniões excessivas</p>
                                </div>

                                <section>
                                    <span>Algum texto</span>
                                    <span>Nesse tópico, vamos falar sobre a importância dos desenvolvedores
                                    front-end e back-end.
                                </span>
                                </section>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="card">
                            <div className="card-header bg-primary text-white text-center">
                                <span>Meu perfil</span>
                            </div>
                            <div className="card-body">
                                <div className="classificado border border-info">
                                    <img src={require("../img/executive-man-cartoon_18591-37202.jpg")}></img>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header bg-info text-white text-center">
                                <span>Novidades</span>
                            </div>
                            <div className="card-body">
                                Fique por dentro de todas as novidades!
                        </div>
                        </div>
                        <div className="card">
                            <div className="card-header bg-info text-white text-center">
                                <span>Destaques</span>
                            </div>
                            <div className="card-body">
                                Todos os destaques da semana!
                        </div>
                        </div>
                        <div className="card">
                            <div className="card-header bg-info text-white text-center">
                                <span>Usuários</span>
                            </div>
                            <div className="card-body list-unstyled" id="usuarios"></div>
                        </div>
                        <div className="card" id="sendFile">
                            <div className="card-header bg-info text-white text-center">
                                <span>Envio de arquivos</span>
                            </div>
                            <div className="card-body">
                                {/* <!-- Button trigger modal --> */}
                                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                                    Enviar Arquivos
                            </button>

                                {/* <!-- Modal --> */}
                                <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog"
                                    aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog modal-dialog-centered" role="document">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <p className="modal-title" id="exampleModalLabel">Enviar arquivos</p>
                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div className="modal-body">
                                                ...
                                        </div>
                                            <div className="modal-footer">
                                                <input type="file" id="inpFiles" className="form-control-file" multiple />
                                                <button type="button" className="btn btn-secondary"
                                                    data-dismiss="modal">Fechar</button>
                                                <button type="button" className="btn btn-primary">Enviar</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Principal;