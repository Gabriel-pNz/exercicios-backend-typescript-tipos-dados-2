const fs = require('fs');

const lerArquivo = (path: string): unknown => {
   
    return JSON.parse(fs.readFileSync(path, 'utf-8'));
        
};

const escreverArquivo = (conteudo: any):void => {
    
    fs.writeFileSync('./bd.json', JSON.stringify(conteudo));

};

export {
    lerArquivo,
    escreverArquivo
}



