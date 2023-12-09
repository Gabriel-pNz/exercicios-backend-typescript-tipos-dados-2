import { lerArquivo, escreverArquivo } from "../01/scripts";

export type Endereco = {
    rua: string,
    complemento?: number,
    cidade: string,
    bairro: string,
    cep: number
}

export type Usuario ={
    nome: string,
    email: string,
    cpf: number,
    profissao?: string,
    endereco: Endereco | null;
} 

const cadastrarUsuario = (usuario: Usuario): Usuario => {

    const bd = lerArquivo('./bd.json') as Usuario[]; 
    bd.push(usuario);

    escreverArquivo(bd);
   
    return usuario;

};

export const listarUsuarios = (profissao?: string):Usuario[] => {

    if(profissao) {
        const listaUsuarios = lerArquivo('./bd.json') as Usuario[];

        const listaPorProfissao = listaUsuarios.filter((usuario) => {
            return usuario.profissao === profissao;
        });

        return listaPorProfissao;
    }

    return lerArquivo('./bd.json') as Usuario[];
   
}

const usuario2:Usuario = {
   nome:"pedro",
   email: "pedro@email.com",
   cpf: 13,
   profissao: 'engenheiro',
   endereco: null
}


cadastrarUsuario(usuario2);
