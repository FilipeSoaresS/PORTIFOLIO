import { FaReact, FaJs } from 'react-icons/fa';

function Projetos () {
    return (
        <div >
          <h1>Clique no Projeto que deseja ver!</h1>
          <div className='projetos-container'> 
            <p>
              <a className="projetos" href="https://pokedex-kappa-five.vercel.app">
                <FaJs/>  Pokedex
              </a>
            </p>
            <p>
              <a className="projetos" href="https://alura-tube-kappa.vercel.app">
                <FaReact/> AluraTube
              </a>
            </p>
            <p>
              <a className="projetos" href="https://controle-finaceiro-o46y7yj1y-filipesoaress.vercel.app">
                <FaReact/> Controle Financeiro
              </a>
            </p>
            <p>
              <a className="projetos" href="https://rick-and-morty-memory-game-icbb1akog-filipesoaress.vercel.app">
                <FaJs/> Jogo da Memória
              </a>
            </p>
            <p>
              <a className="projetos" href="https://alura-midi-dun-rho.vercel.app">
                <FaJs/> AluraMidi
              </a>
            </p>
          </div>
        </div>
    )
};

export default Projetos;