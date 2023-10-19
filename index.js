import express from "express";

const app = express();

const host = '0.0.0.0';
const porta = 3000;


function paginainicial(requisicao, resposta){
    resposta.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1>Ola Mundo</h1>
    </body>
    </html>`);
    resposta.end();
}

app.get(`/`,paginainicial);

// () => {} eh uma funcao anonima (Arrow Function)
app.listen(porta, host, () => {
    //  string literals permite concatenar variaveis e strings de uma maneria amigavel
    //  string literal = ``
    console.log(`Servidor executando em http://${host}:${porta}`);

});