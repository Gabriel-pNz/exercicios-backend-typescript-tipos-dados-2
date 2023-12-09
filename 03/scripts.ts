import { lerArquivo, escreverArquivo } from "../01/scripts";
import { Usuario } from "../02/scripts";

const atualizarUsuario = (dados: Usuario, cpf: number):Usuario => {

    const listaUsuarios = lerArquivo('./bd.json') as Usuario[]


    for (let usuario of listaUsuarios) {

        if(usuario.cpf === cpf) {

            usuario.email = dados.email;
            usuario.endereco = dados.endereco;
            usuario.nome = dados.nome;

            if(dados.profissao) {

                usuario.profissao = dados.profissao;

            }
        }

    }

    escreverArquivo(listaUsuarios);

    return dados;
}

const detalharUsuario = (cpf: number):object => {

    const listaUsuarios = lerArquivo('./bd.json') as Usuario[]

    const usuarioEncontrado = listaUsuarios.filter((usuario) => {

        return usuario.cpf === cpf

    });

    return usuarioEncontrado;
}

const usuario2: Usuario = {

    nome: "vitor",
    email: "vthor@email.com",
    cpf: 12,
    endereco: {
        bairro:'sad',
        cidade: 'asdfaf',
        rua:'weqr',
        cep: 2314987
    }
    
}

console.log(atualizarUsuario(usuario2, 11))
console.log(detalharUsuario(12))