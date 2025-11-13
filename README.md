# NarutoDex 🍥

Um aplicativo móvel, estilo Pokédex, para fãs de Naruto. Explore personagens e vilas do universo Naruto diretamente do seu celular.

Este projeto foi construído em React Native utilizando o ecossistema Expo e consome a API pública **Naruto BR API** (`https://naruto-br-api.site/`).

---

### ✨ Funcionalidades
* **Listagem de Personagens:** Navegue por uma lista completa de personagens.
* **Listagem de Vilas:** Explore as diversas vilas do mundo ninja.
* **Busca Rápida:** Encontre facilmente personagens e vilas usando a barra de pesquisa.
* **Detalhes do Personagem:** Veja informações detalhadas, incluindo:
   * Resumo e imagem de perfil.
   * Informações básicas (Rank, Vila, Poder, Família).
   * Lista de Jutsus.
   * Galeria de imagens (com suporte a zoom).
* **Detalhes da Vila:** Veja o símbolo da vila e a lista de ninjas associados a ela.
* **Navegação Intuitiva:** Navegação simples usando abas (Personagens e Vilas) e navegação de pilha para detalhes.

---

### 🚀 Tecnologias Utilizadas

Este projeto foi desenvolvido com as seguintes tecnologias:

* **React Native**
* **Expo** (SDK 54)
* **TypeScript**
* **React Navigation** (v7): Para o gerenciamento da navegação (Bottom Tabs e Native Stack).
* **React Query (TanStack Query)** (v5): Para *data fetching*, cache e gerenciamento de estado assíncrono.
* **Axios**: Cliente HTTP para consumir a API.
* **Zustand**: Para gerenciamento de estado global (como favoritos).

---

### 🌐 API

Este aplicativo utiliza a **Naruto BR API**, uma API pública, gratuita e de código aberto com informações sobre o universo de Naruto.

🔗 **Base URL:** `https://naruto-br-api.site/`

Um agradecimento especial aos mantenedores desta API por fornecerem os dados.

---

### 🏃 Como Executar o Projeto

1.  **Clone o repositório:**
   ```bash
   git clone git@github.com:function404/narutodex_.git
   cd narutodex_
   ```

2.  **Instale as dependências:**
   ```bash
   npm install
   ```

3.  **Inicie o servidor Expo com o emulador ja aberto:**
   ```bash
   npx expo run:android 
   ```

---
