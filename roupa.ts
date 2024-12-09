import { Produto } from "./produto";

class Roupa extends Produto {
    private tamanho: string;
    private cor: string;
    private material: string;

    constructor(nome: string, preco: number, quantidadeEstoque: number, tamanho: string, cor: string, material: string) {
        super(nome, preco, quantidadeEstoque);
        this.tamanho = tamanho;
        this.cor = cor;
        this.material = material;
    }

    // Getter e Setter para o tamanho
    public getTamanho(): string {
        return this.tamanho;
    }

    public setTamanho(tamanho: string): void {
        this.tamanho = tamanho;
    }

    // Getter e Setter para a cor
    public getCor(): string {
        return this.cor;
    }

    public setCor(cor: string): void {
        this.cor = cor;
    }

    // Getter e Setter para o material
    public getMaterial(): string {
        return this.material;
    }

    public setMaterial(material: string): void {
        this.material = material;
    }

    // Método de sugestões para situações e climas com base nos materiais
    public sugestaoMaterial(): void {
        alert("Materiais e quando você deve usá-lo:\n" + 
            "Algodão: Ideal para climas quentes e atividades ao ar livre.\n" +
            "Lã: Perfeito para o inverno e climas frios.\n" +
            "Poliéster: Resistente e ótimo para o uso diário, fácil de cuidar.");
    }

    // Sobrescrevendo o método exibirDetalhes
    public exibirDetalhes(): void {
        super.exibirDetalhes(); 
        alert(`Tamanho: ${this.tamanho} Cor: ${this.cor} Material: ${this.material}`);
    }
}
