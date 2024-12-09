import { ItemPedido } from "./itemPedido";
import { Produto } from "./produto";

export class Pedido {
    private id: string;
    private data: string;
    private status: string;
    private valorTotal: number;
    private itens: ItemPedido[];
    
    constructor(id: string, date: string, status: string, valorTotal: number = 0) {
        this.id = id;
        this.data = date;
        this.status = status;
        this.valorTotal = valorTotal;
        this.itens = [];
    }

    // Método para adicionar um produto ao pedido
    public adicionarProduto(produto: Produto, quantidade: number): void {
        if (quantidade <= 0) {
            alert("A quantidade deve ser maior que 0.");
            return;
        }
    
        let itemExistente = null;
    
        // percorre a lista de itens
        for (let i = 0; i < this.itens.length; i++) {
            // Verifica se é o mesmo produto pelo nome
            if (this.itens[i].getProduto().getNome() === produto.getNome()) {
                itemExistente = this.itens[i];
                break;  // Sai do loop assim que encontrar o item
            }
        }
    
        if (itemExistente) {
            // Se o produto já estiver no pedido, apenas atualiza a quantidade
            itemExistente.setQuantidade(itemExistente.getQuantidade() + quantidade);
        } else {
            // Se o produto não estiver no pedido, cria um novo ItemPedido
            let subtotal = produto.getPreco() * quantidade;
            let novoItem = new ItemPedido(produto, quantidade);
            this.itens.push(novoItem);
        }
    
        this.calcularValorTotal();
    }
    

    // Getters e Setters
    public getId(): string {
        return this.id;
    }

    public setId(id: string): void {
        this.id = id;
    }

    public getData(): string {
        return this.data;
    }

    public setData(data: string): void {
        this.data = data;
    }

    public getStatus(): string {
        return this.status;
    }

    public setStatus(status: string): void {
        this.status = status;
    }

    public getValorTotal(): number {
        return this.valorTotal;
    }

    public adicionarItem(item: ItemPedido): void {
        this.itens.push(item);
        this.valorTotal = this.calcularValorTotal();
    }

    public getItens(): ItemPedido[] {
        return this.itens;
    }

    public calcularValorTotal(){
        let total = 0;
    
        // Itera sobre os itens e soma os subtotais
        for (let i = 0; i < this.itens.length; i++) {
            total += this.itens[i].getSubtotal(); 
        }
     
        // Atribui o total calculado à variável valorTotal
        return total;
    }
}

