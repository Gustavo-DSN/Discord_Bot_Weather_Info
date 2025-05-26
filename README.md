# 🌤️ Weather Discord Bot

Um bot para Discord que retorna informações meteorológicas com base no nome da cidade informada pelo usuário.

## 🚀 Tecnologias utilizadas

-   Node.js
-   [OpenWeatherMap API](https://openweathermap.org/api)
-   Axios
-   Dotenv (.env)

## 🛠️ Funcionalidades

-   Retorna o clima atual de qualquer cidade informada.
-   Int egração com aAPI do OpenWeatherMap.
-   Resposta diretamente no Discord usando comandos.

## 📦 Instalação

1. Clone o repositório:

    ```bash
    git clone https://github.com/Gustavo-DSN/Discord_Bot_Weather_Info.git
    cd Discord_Bot_Weather_Info
    ```

2. Instale as dependências:

    ```bash
    npm install
    ```

3. Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

    ```env
    WEATHER_API_KEY=SuaChaveDaAPI
    DISCORD_TOKEN=SeuTokenDoBot
    ```

4. Inicie o bot:
    ```bash
    node index.js
    ```

## 🤖 Uso

No Discord, digite o comando com o prefixo configurado (exemplo):

```
!weather São Paulo
```

O bot responderá com as condições atuais do tempo para a cidade informada.

## 📝 Licença

Este projeto está sob a licença MIT.

---

> Feito por Gustavo Nascimento (https://github.com/Gustavo-DSN)
