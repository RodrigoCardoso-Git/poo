export class Produto {
    protected nome: string;
    protected preco: number;
    protected quantidadeEstoque: number;

    constructor(nome: string, preco: number, quantidadeEstoque: number) {
        this.nome = nome;
        this.preco = preco;
        this.quantidadeEstoque = quantidadeEstoque;
    }

    // Getter e Setter para o nome
    public getNome(): string {
        return this.nome;
    }

    public setNome(nome: string): void {
        this.nome = nome;
    }

    // Getter e Setter para o preço
    public getPreco(): number {
        return this.preco;
    }

    public setPreco(preco: number): void {
        if (preco >= 0) {
            this.preco = preco;
        } else {
            console.log("Preço inválido!");
        }
    }

    // Getter e Setter para a quantidade de estoque
    public getQuantidadeEstoque(): number {
        return this.quantidadeEstoque;
    }

    public setQuantidadeEstoque(quantidade: number): void {
        if (quantidade >= 0) {
            this.quantidadeEstoque = quantidade;
        } else {
            console.log("Quantidade em estoque não pode ser negativa!");
        }
    }

    // Método para verificar se o produto está disponível em estoque
    public verificarDisponibilidade(): boolean {
        return this.quantidadeEstoque > 0;
    }

    // Método para exibir os detalhes do produto
    public exibirDetalhes(): void {
        alert(`Produto: ${this.nome}` + 
              `Preço: R$${this.preco.toFixed(2)}` + 
              `Quantidade em estoque: ${this.quantidadeEstoque}`);
    }
    
}
