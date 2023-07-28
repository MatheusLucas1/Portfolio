import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { RiPagesLine } from 'react-icons/ri';
import ImageSlider from './ImageSlider';
import Album from '../images/TrybeTunes/Album.jpg';
import Artist from '../images/TrybeTunes/Artist.jpg';
import Login from '../images/TrybeTunes/Login.jpg';

import Done from '../images/RecipesApp/Done.jpg'
import foods_recipe from '../images/RecipesApp/foods-recipe.jpg'
import drink_recipe_work from '../images/RecipesApp/drink-recipe_work.jpg'
import drink_recipe from '../images/RecipesApp/drink-recipe.jpg'
import drinks_search from '../images/RecipesApp/drinks-search.jpg'
import Drinks from '../images/RecipesApp/Drinks.jpg'
import favorites from '../images/RecipesApp/favorites.jpg'
import Foods_recipe_work from '../images/RecipesApp/Foods-recipe_work.jpg'
import Foods_search from '../images/RecipesApp/Foods-search.jpg'
import Foods from '../images/RecipesApp/Foods.jpg'
import LoginRecipesApp from '../images/RecipesApp/login.jpg'
import Profile from '../images/RecipesApp/Profile.jpg'

const Projects = () => {
  const project1Images = [Login, Album, Artist];
  const project2Images = [LoginRecipesApp,
    Foods,
    Foods_search,
    foods_recipe,
    Foods_recipe_work,
    drink_recipe,
    drink_recipe_work,
    Drinks,
    drinks_search,
    Done,
    favorites,
    Profile
  ];

  return (
    <div className="p-4 flex flex-wrap">
      <div className="my-4 w-1/2 p-4">
        <h3 className="text-xl font-bold text-center">TrybeTunes</h3>
        <div className="flex items-center"> {/* Wrap the description and image in a flex container */}
          <div className="w-1/2"> {/* Set the width to control the description area */}
            <p className="m-6 p-5 text-center"> {/* Center the text */}
              Uma aplicação capaz de reproduzir músicas das mais variadas bandas e artistas, criar uma lista de músicas favoritas e editar o perfil da pessoa usuária logada.
              Nesse projeto desenvolvi conceitos de ciclo de vida em React, consumo de API e Browser Router.
            </p>
            <div className="flex justify-center"> {/* Center the icons */}
              <a href="https://main.dwn24yppjbji.amplifyapp.com/" className="text-blue-500 underline mr-4">
                <RiPagesLine className="h-10 w-10" />
              </a>
              <a href="https://github.com/MatheusLucas1/TrybeTunes" className="text-blue-500 underline">
                <FaGithub className="h-10 w-10" />
              </a>
            </div>
          </div>
          <div className="w-1/2">
            <ImageSlider images={project1Images} h={ 500 } w={800} />
          </div>
        </div>
      </div>

      <div className="my-4 w-1/2 p-4">
        <h3 className="text-xl font-bold text-center">Recipes App</h3>
        <div className="flex items-center"> 
          <div className="w-1/2"> 
            <p className="m-6 p-5 text-center">
            Um app de receitas, utilizando o que há de mais moderno dentro do ecossistema React: Hooks e Context API!

            Nele é possível: ver, buscar, filtrar, favoritar e acompanhar o progresso de preparação de receitas de comidas e bebidas!

            A base de dados são 2 APIs distintas, uma para comidas e outra para bebidas.

            O layout tem como foco dispositivos móveis, dessa forma todos os protótipos vão estar desenvolvidos em telas menores.

            Utilizei Context API para gerenciar o estado da aplicação e também react Hooks.
            </p>
            <div className="flex justify-center"> 
              <a href="https://main.d24go9z3116bhv.amplifyapp.com/" className="text-blue-500 underline mr-4">
                <RiPagesLine className="h-10 w-10" />
              </a>
              <a href="https://github.com/MatheusLucas1/Trybe-Wallet" className="text-blue-500 underline">
                <FaGithub className="h-10 w-10" />
              </a>
            </div>
          </div>
          <div className="w-2/5">
          <ImageSlider images={project2Images} h={ 600 } w={200} />
          </div>
        </div>
      </div>
      <div className="my-4 w-1/2 p-4">
        <h3 className="text-xl font-bold text-center">Trybers and Dragons</h3>
        <div className="flex items-center"> 
          <div> 
            <p className="m-6 p-5 text-center">
            O projeto Trybers and Dragons - T&D é uma iniciativa que busca a aplicação dos princípios da arquitetura SOLID e da Programação Orientada a Objetos (POO) em um empolgante jogo de interpretação de papéis (RPG).

            Em T&D, os jogadores são transportados para um mundo fictício onde assumem o papel de personagens pertencentes a diferentes raças, cada uma com suas características únicas, como pontos de vida e destreza. Além disso, os personagens possuem arquétipos específicos, representando suas vocações e habilidades individuais.

            O cerne do jogo reside nos combates entre os personagens controlados pelos jogadores e monstros. Esses combates são baseados em atributos e habilidades específicas de cada personagem, adicionando um elemento estratégico às batalhas.

            Ao desenvolver este projeto, utilizei aplicação dos princípios da arquitetura SOLID e da POO. Isso resultou em um código bem estruturado, capaz de se adaptar facilmente a mudanças e, acima de tudo, de ser mantido com facilidade ao longo do tempo.


            </p>
            <div className="flex justify-center"> 
              <a href="https://github.com/MatheusLucas1/Trybers-and-Dragons" className="text-blue-500 underline">
                <FaGithub className="h-10 w-10" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="my-4 w-1/2 p-4">
        <h3 className="text-xl font-bold text-center">TrybeSmith</h3>
        <div className="flex items-center"> 
          <div> 
            <p className="m-6 p-5 text-center">
            Para este projeto, eu criei uma loja de itens medievais, como aquelas espadas feitas sob encomenda para uma pessoa específica, no formato de uma API, utilizando Typescript e Sequelize.

            Desenvolvi as camadas de Service e Controllers da aplicação em seu código, utilizando JWT para autenticar algumas rotas, além de testes para garantir o correto funcionamento delas. A aplicação tem endpoints que darão suporte a operações de criação, leitura e atualização de informações.


            </p>
            <div className="flex justify-center"> 
              <a href="https://github.com/MatheusLucas1/TrybeSmith" className="text-blue-500 underline">
                <FaGithub className="h-10 w-10" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
