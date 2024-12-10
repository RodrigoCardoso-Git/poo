import { Produto } from "./produto";

export class ItemPedido {
    private produto: Produto;
    private quantidade: number;
    private subtotal: number;
    
    constructor(produto: Produto, quantidade: number) {
        this.produto = produto;
        this.quantidade = quantidade;
        this.subtotal = produto.getPreco() * quantidade; 
    }

    // Getter e Setter para o produto
    public getProduto(): Produto {
        return this.produto;
    }

    public setProduto(produto: Produto): void {
        this.produto = produto;
    }

    // Getter e Setter para a quantidade
    public getQuantidade(): number {
        return this.quantidade;
    }

    public setQuantidade(quantidade: number): void {
        if (quantidade >= 0) {
            this.quantidade = quantidade;
            this.setSubtotal();
        } else {
            console.log("Quantidade não pode ser negativa.");
        }
    }

    // Getter e Setter para o subtotal
    public getSubtotal(): number {
        return this.subtotal;
    }

    private setSubtotal(){
        this.subtotal = this.produto.getPreco() * this.quantidade;
    }
}
