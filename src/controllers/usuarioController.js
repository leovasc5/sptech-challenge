const { stringify } = require("nodemon/lib/utils");
var usuarioModel = require("../models/usuarioModel");

var sessoes = [];

function testar(req, res) {
    console.log("ENTRAMOS NA usuarioController");
    res.json("ESTAMOS FUNCIONANDO!");
}

function listar(req, res) {
    usuarioModel.listar()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function entrar(req, res) {
    var ra = req.body.raServer;
    var senha = req.body.senhaServer;

    if (ra == undefined) {
        res.status(400).send("Seu RA está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {
        usuarioModel.entrar(ra, senha)
            .then(
                function (resultado) {
                    if (resultado.length == 1) {
                        res.json(resultado[0]);
                    } else if (resultado.length == 0) {
                        res.status(403).send("RA e/ou senha inválido(s)");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function cadastrar(req, res) {
    var nome = req.body.nomeServer;
    var ra = req.body.raServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    var curso = req.body.cursoServer;
    var semestre = req.body.semestreServer;
    
    console.log('Chegou no controller')    

    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (ra == undefined) {
        res.status(400).send("Seu RA está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (curso == undefined) {
        res.status(400).send("Seu curso está undefined!");
    } else if (semestre == undefined) {
        res.status(400).send("Seu semestre está undefined!");
    } else {
        usuarioModel.cadastrar(nome, ra, email, senha, curso, semestre)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function historyUser(req, res) {
    usuarioModel.historyUser(req.body.ra)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.json(resultado);
            } else {
                res.json([]);
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

module.exports = {
    entrar,
    cadastrar,
    listar,
    testar,
    historyUser
}