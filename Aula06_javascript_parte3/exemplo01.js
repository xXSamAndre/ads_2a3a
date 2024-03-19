class livro {
    constructor(pNome){
        this.Nome = pNome;

    }

    get nome(){return this.Nome;}
    set nome(pNome){this.nome = pNome;}
}

var obj_livro1 = new livro("Use a cabeça java");
console.log("Nome do livro:  " + obj_livro1.nome); 