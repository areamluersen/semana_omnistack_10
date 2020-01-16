import React, { useState } from 'react';

import './global.css'
import './App.css'
import './Sidebar.css'
import './Main.css'
// Componente: Função que retorna conteúdo html-css-js - Bloco isolado de html-j-css
// Propriedade: Informações que um componente pai passa para o componente filho
// Estado: Informações mantidas pelo componente (lembrar: imutabilidade)

function App() {
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div class="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input name="github_username" id="github_username" required/>
          </div>

          <div class="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required/>
          </div>

          <div className="input-group">
            <div class="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required/>
            </div>
            <div class="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required/>
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/24281509?v=4" alt="Aream Luersen"/>
              <div className="user-info">
                <strong>Aream Luersen</strong>
                <span>Reactjs, NodeJs, SQL</span>
              </div>
            </header>
            <p>Desenvolver desde janeiro 2019 com experiências em suporte e treinamento</p>
            <a href="https://github.com/areamluersen">Acessar perfil no github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/24281509?v=4" alt="Aream Luersen"/>
              <div className="user-info">
                <strong>Aream Luersen</strong>
                <span>Reactjs, NodeJs, SQL</span>
              </div>
            </header>
            <p>Desenvolver desde janeiro 2019 com experiências em suporte e treinamento</p>
            <a href="https://github.com/areamluersen">Acessar perfil no github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/24281509?v=4" alt="Aream Luersen"/>
              <div className="user-info">
                <strong>Aream Luersen</strong>
                <span>Reactjs, NodeJs, SQL</span>
              </div>
            </header>
            <p>Desenvolver desde janeiro 2019 com experiências em suporte e treinamento</p>
            <a href="https://github.com/areamluersen">Acessar perfil no github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/24281509?v=4" alt="Aream Luersen"/>
              <div className="user-info">
                <strong>Aream Luersen</strong>
                <span>Reactjs, NodeJs, SQL</span>
              </div>
            </header>
            <p>Desenvolver desde janeiro 2019 com experiências em suporte e treinamento</p>
            <a href="https://github.com/areamluersen">Acessar perfil no github</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
