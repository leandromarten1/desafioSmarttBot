# Desafio SmarttBot

---

## Descrição do desafio

O desafio consiste em criar um sistema de agregação de dados de cotações de criptomoedas em tempo real.

Dado as cotações de uma criptomoeda reportados em tempo real, foi desenvolvido uma aplicação server-side com arquitetura REST, que processa essas cotações e as agrega em um candlestick. Foram construidos candlesticks de 1 minuto, 5 minutos e 10 minutos, que são salvos no banco de dados assim que estejam completos.

A API consumida foi a [Poloniex Public API](https://docs.poloniex.com/#public-http-api-methods).

## Pré-requisitos

Você precisa ter um sua máquina:
[Git](https://git-scm.com/), [NodeJS](https://nodejs.org/en/), [MySQL](https://dev.mysql.com/)


## Instalação

Clonando a aplicação:

```bash
# Crie uma pasta de sua preferencia
$ mkdir minha-pasta && cd minha-pasta

# Clone este repositório
$ git clone https://github.com/leandromarten1/desafioSmarttBot.git

# Acesse a pasta do projeto
$ cd desafioSmarttBot

```

## Rodando a Aplicação

Para rodar a aplicação utilizando Docker:

```bash
# Entre na pasta do projeto
$ cd desafioSmarttBot

# Execute o comando
$ docker-compose up

```

## Endpoints

Com o servidor rodando podemos acessar:

#### localhost:3000/bitcoin
```bash
Retorna todos os candlesticks salvos
```
#### localhost:3000/bitcoin/1min
```bash
Retorna todos os candlesticks de 1min.
```
#### localhost:3000/bitcoin/5min
```bash
Retorna todos os candlesticks de 5min.
```
#### localhost:3000/bitcoin/10min
```bash
Retorna todos os candlesticks de 10min.
```

## Ferramentas e tecnologias utilizadas
 - Git
 - Github
 - Javascript ES6
 - NodeJS
 - ExpressJs
 - MySQL 8
 - Sequelize

## Desafios e dificuldades

Uma das principais dificuldades do projeto foi entender como funcionavam os candlesticks e o mercado financeiro. Para isso consultei alguns sites e assiti alguns vídeos sobre o assunto, como por exemplo: [Investing](https://br.investing.com/crypto/bitcoin/btc-usdt), [Trading View](https://br.tradingview.com/symbols/BTCUSDT/), [Bussula do Investidor](https://www.bussoladoinvestidor.com.br/grafico-de-candlestick/).

Um desafio foi utilizar o Docker e Docker-Compose, aconteceram alguns erros que fui corrigindo e consegui subir o projeto para os containers. Não consegui trabalhar com variáveis de ambiente, sequelize e docker juntos.

## Melhorias

Refatoração para Python e GraphQL que hoje é utilizado na SmarttBot, implementação utilizando WebSockets, documentação utilizando Swagger e desenvolvimento de testes unitários e de integração. Melhorar a utilização de docker na aplicação
