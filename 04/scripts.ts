import { escreverArquivo, lerArquivo } from "../01/scripts";
import { Usuario } from "../02/scripts";

const excluirUsuario = (cpf: number):Usuario => {

    const bd = lerArquivo('./bd.json') as Usuario[];
    const novoBd: object[] = [];
    const usuarioExcluido: any = []; 

    for (const usuario of bd) {
        if(usuario.cpf !== cpf) {
            novoBd.push(usuario);
        }

        if (usuario.cpf === cpf) {
            usuarioExcluido.push(usuario);
        }

    }

    escreverArquivo(novoBd);

    return usuarioExcluido;
};

console.log(excluirUsuario(12));