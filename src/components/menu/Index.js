import React from 'react';

// CSS
import '../../assets/css/style.css';
import '../../assets/css/responsive.css'

// IMAGENS
import Logo from '../../assets/img/logo.png';
import LogoMedia from '../../assets/img/logoMedia.png';
import Tool from '../../assets/img/tool.png';
import Search from '../../assets/img/search.png';


class Index extends React.Component {
    constructor() {
        super()
        this.state = {
            listItems: [{
                Title: "",
                NovaAba: false,
                Ordem: ""
            }],
            input: ""
        }
    }

    componentDidMount() {
        this.getItems();
    }

    // FUNÇÃO PARA UTILIZAR A API EXIBINDO DE ACORDO COM A ORDEM
    getItems = () => {
        fetch('https://www.mocky.io/v2/5e065c7933000091e8ec5d87')
            .then(result => result.json())
            .then(items => {
                var order = items.sort(
                    function(a, b) {
                        return a.Ordem - b.Ordem
                    }
                )
                this.setState({ listItems: order })
            })
    }

    // VALIDAÇÃO DO CAMPO DE PESQUISA

    // recebendo o valor do input
    handleChange = (event) => {
        this.setState({ input: event.target.value })
    }

    // validação do campo
    showWarning = () => {
        if (this.state.input === '') {
            alert("Atenção, preencha o campo corretamente!")
        } else {
            window.open("http://google.com");
        }
    }

    render() {

        return ( <>
                <header>
                    {/* MENU RESPONSIVO */}
                    <input type="checkbox" id="control-nav" />
                    <label for="control-nav" className="control-nav"></label>
                    <label for="control-nav" className="control-nav-close"></label>
                    
                    <nav>
                        <div className="container">
                            <img src={Logo} alt="Logo Intranet Fast Smart" className="logo" />

                            {/* LOGO RESPONSIVO */}
                            <img src={LogoMedia} alt="Logo Intranet Fast Smart" className="logoMedia" />
                            
                            <div className="searchPlace">
                                <img src={Tool} alt="ícone de uma ferramenta" className="searchTool" />

                                {/* CAMPO DE PESQUISA */}
                                <form onSubmit={this.showWarning}>
                                    <input placeholder="Pesquisar..." className="inputSearch" name="input" 
                                    onChange={this.handleChange} />

                                    <button id="btnSearch" className="searchButton" type="submit">
                                        <img src={Search} alt="botão de pesquisa" className="searchImg" />
                                    </button>
                                </form>

                            </div>
                        </div>
                        
                        <div className="menu">
                            <ul>
                                {/* EXIBINDO A LISTA DE OBJETOS (listItems)*/}
                                {
                                    this.state.listItems.map((item, i)=>(
                                        <div key={i}>
                                            <li><a href='#'>{item.Title}</a></li>
                                        </div>
                                    ))
                                }
                            </ul>
                        </div>
                    </nav>
                </header>
            </>
        );
    }
}
export default Index;
