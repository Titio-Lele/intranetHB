import React from 'react';

function Navbar() {
    return (
        <div className="row">
            <div className="col-sm-12">
                <div className="topo">
                    {/* <!-- Inicio das definições da barra de navegação --> */}
                    <nav className="navbar navbar-expand-lg navbar-dark bg-info">
                        <a href="/"><img src={require('../img/logo_barra_completo.svg')} className="navbar-brand" style={{width: "150px"}}/> </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
            
                        {/* <!-- Itens do menu --> */}
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <a href="/incidentes" className="nav-link"><i className="material-icons">directions</i>Incidentes<span
                                            className="sr-only">(atual)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a href="/cadastrarIncidente" className="nav-link"><i className="material-icons">alarm</i>Reuniões</a>
                                </li>
                            </ul>
            
                            {/* <!-- Fomulário de pesquisa --> */}
                            <form className="form-inline my-2 my-lg-0">
                                <input className="form-control mr-sm-2" type="search" placeholder="Pesquisar" aria-label="Search" />
                                <button className="btn btn-success my-2 my-sm-0" type="submit">Pesquisar</button>
                            </form>
                        </div>
                    </nav>
                    <h1>Base de Conhecimento HB</h1>
                    <p><i>"Conhecimento é saber que o tomate é um fruto. Sabedoria é não misturá-lo à salada de frutas."</i></p>
                </div>
            </div>
        </div>
    )
}

export default Navbar;