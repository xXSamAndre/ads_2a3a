class livro {
    constructor(pNome, pPreco){
        this.Nome = pNome;
        this.Preco = pPreco

    }

    get Nome(){return this.Nome;}
    set Nome(pNome){this.nome = pNome;}

    get Preco(){return this.Preco;}
    set Preco(pPreco){this.preco = pPreco;}

    calcularDesconto(pDesconto){
        this.preco =this.preco - ((this.preco * pDesconto)/100);
    }
}

var obj_livro1 = new livro("Use a cabeça java", 120);
obj_livro1.calcularDesconto(30);
console.log("Nome do livro: " + obj_livro1.nome + ' Custa: ' + obj_livro1.preco + ' reais'); 