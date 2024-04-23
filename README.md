import React, { useState } from 'react';

import './App';
import './style.css';

import Foto from './components/foto/foto';
import Button from './components/button/button';
import Sobre from './components/button/sobre/sobre';
import Projetos from './components/button/projetos/projetos';
import Contato from './components/button/contato/contato';

Essas linhas importam o React e o hook useState, que permite usar o estado dentro do componente. Também importam os arquivos de estilo e os componentes Foto, Button, Sobre, Projetos e Contato, que são usados na página.

function Home() {
  const [displayText, setDisplayText] = useState('');
  const [showText, setShowText] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);
  const [showPhoto, setShowPhoto] = useState(false);
  const [buttonName, setButtonName] = useState('');

Essas linhas definem a função Home, que é o componente principal. Dentro da função, são declaradas cinco variáveis de estado usando o hook useState. Cada variável tem um valor inicial e uma função para atualizá-la. As variáveis são:

- displayText: guarda o texto que será exibido na página, que pode ser um dos componentes Sobre, Projetos ou Contato.
- showText: guarda um valor booleano que indica se o texto deve ser mostrado ou não.
- animationKey: guarda um número que é usado como chave para o elemento que contém o texto, para que ele seja animado a cada mudança de texto.
- showPhoto: guarda um valor booleano que indica se a foto deve ser mostrada ou não.
- buttonName: guarda o nome do botão que foi clicado pelo usuário.

  // cria um objeto que mapeia cada nome de botão para o componente correspondente
  const components = {
    Sobre: <Sobre/>,
    Projetos: <Projetos/>,
    Contato: <Contato/>
  };

  // cria um array que armazena os nomes dos botões
  const buttons = ['Sobre', 'Projetos', 'Contato'];

Essas linhas criam duas constantes que serão usadas para renderizar os botões e o texto. A constante components é um objeto que associa cada nome de botão ao componente correspondente. A constante buttons é um array que contém os nomes dos botões.

  const handlePhotoClick = () => {
    setShowPhoto(true);
    setShowText(false);
    handleButtonClick('Sobre');
  };

Essa linha define uma função chamada handlePhotoClick, que será executada quando o usuário clicar na foto. A função faz três coisas:

- Chama a função setShowPhoto com o valor true, para mostrar a foto na página.
- Chama a função setShowText com o valor false, para esconder o texto na página.
- Chama a função handleButtonClick com o argumento 'Sobre', para simular um clique no botão Sobre.

  const handleButtonClick = (buttonName) => {
    setButtonName(buttonName);

    // usa o objeto components para obter o componente pelo nome
    setDisplayText(components[buttonName]);

    setShowText(true);

    setAnimationKey(animationKey + 1);
  };

Essa linha define uma função chamada handleButtonClick, que será executada quando o usuário clicar em qualquer botão. A função recebe como parâmetro o nome do botão clicado e faz quatro coisas:

- Chama a função setButtonName com o valor do parâmetro, para guardar o nome do botão clicado.
- Usa o objeto components para obter o componente correspondente ao nome do botão e chama a função setDisplayText com esse componente, para atualizar o texto na página.
- Chama a função setShowText com o valor true, para mostrar o texto na página.
- Incrementa a variável animationKey em um e chama a função setAnimationKey com esse valor, para mudar a chave do elemento que contém o texto e disparar a animação.

  return (
    <div>
      <header></header>
      <div className={`foto-container ${showPhoto ? 'move' : ''}`} onClick={handlePhotoClick}>
        <Foto />
        {!showPhoto && 
          <p className="click-text">Pressione a foto para começar</p>
        }
      </div>
        {showPhoto && (
          <div>
            <div className={`button-container ${showText ? 'show' : 'fade'}`}>
              <Button>
                {/* usa o método map para renderizar cada botão do array buttons */}
                {buttons.map(name => (
                  <button className={buttonName === name ? 'button button-selected' : 'button'} onClick={() => handleButtonClick(name)}>{name}</button>
                ))}
              </Button>
            </div>
            <div key={animationKey} className={`displayText ${showText ? 'show' : 'hide'}`}>{showText && displayText}</div>
          </div>
        )}
    <footer> © 2023 - Filipe Soares</footer>
    </div>


  );
};

Essas linhas retornam o JSX que será renderizado na página. O JSX é uma sintaxe que permite escrever elementos HTML dentro do JavaScript. Dentro do JSX, podemos usar expressões JavaScript entre chaves {} para fazer lógica ou inserir valores. O JSX contém os seguintes elementos:

- Um elemento div que envolve todo o conteúdo da página.
- Um elemento header vazio, que pode ser usado para adicionar um cabeçalho à página.
- Um elemento div com a classe foto-container, que contém o componente Foto e um parágrafo com o texto "Pressione a foto para começar". Esse elemento tem um evento onClick que chama a função handlePhotoClick quando o usuário clica nele. Esse elemento também tem uma classe condicional que depende do valor da variável showPhoto. Se showPhoto for verdadeiro, a classe move é adicionada, o que faz a foto se mover para o lado esquerdo da página. Se showPhoto for falso, a classe move não é adicionada, e a foto fica no centro da página. Além disso, o parágrafo só é renderizado se showPhoto for falso, ou seja, se a foto não foi clicada ainda.
- Um elemento div que só é renderizado se showPhoto for verdadeiro, ou seja, se a foto foi clicada. Esse elemento contém dois elementos filhos: um div com a classe button-container, que contém o componente Button, e um div com a classe displayText, que contém o texto a ser exibido. O elemento button-container também tem uma classe condicional que depende do valor da variável showText. Se showText for verdadeiro, a classe show é adicionada, o que faz os botões aparecerem na página. Se showText for falso, a classe fade é adicionada, o que faz os botões desaparecerem da página. O componente Button recebe como filhos os botões que são renderizados usando o método map do array buttons. O método map percorre cada elemento do array e retorna um novo elemento baseado em uma função. Nesse caso, a função retorna um elemento button com o nome do botão como texto e um evento onClick que chama a função handleButtonClick com o nome do botão como argumento. Cada botão também tem uma classe condicional que depende do valor da variável buttonName. Se buttonName for igual ao nome do botão, a classe button-selected é adicionada, o que faz o botão ficar destacado na página. Se buttonName for diferente do nome do botão, a classe button é adicionada, o que faz o botão ficar normal na página. O elemento displayText tem uma chave que é igual ao valor da variável animationKey, para que ele seja animado a cada mudança de texto. Ele também tem uma classe condicional que depende do valor da variável showText. Se showText for verdadeiro, a classe show é adicionada, o que faz o texto aparecer na página. Se showText for falso, a classe hide é adicionada, o que faz o texto desaparecer da página. O texto só é renderizado se showText for verdadeiro, e ele é igual ao valor da variável displayText.
- Um elemento footer que contém o texto "© 2023 - Filipe Soares", que é o rodapé da página.

export default Home;

Essa linha exporta o componente Home como padrão, para que ele possa ser importado em outros arquivos.
