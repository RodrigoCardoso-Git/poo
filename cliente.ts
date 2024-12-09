import { Pedido } from "./pedido";

class Cliente {
    private id: string;
    private nome: string;
    private telefone: string;
    private pedidos: Pedido[];
    
    constructor(id: string, nome: string, telefone: string) {
        this.id = id;
        this.nome = nome;
        this.telefone = telefone;
        this.pedidos = [];
    }

    // Getter e Setter para id
    public getId(): string {
        return this.id;
    }

    public setId(id: string): void {
        this.id = id;
    }

    // Getter e Setter para nome
    public getNome(): string {
        return this.nome;
    }

    public setNome(nome: string): void {
        this.nome = nome;
    }

    // Getter e Setter para telefone
    public getTelefone(): string {
        return this.telefone;
    }

    public setTelefone(telefone: string): void {
        this.telefone = telefone;
    }

    // Getter e Setter para pedidos
    public getPedidos(): Pedido[] {
        return this.pedidos;
    }

    public setPedidos(pedidos: Pedido[]): void {
        this.pedidos = pedidos;
    }

    // Método para adicionar um pedido à lista de pedidos
    public fazerPedido(pedido: Pedido): void {
        this.pedidos.push(pedido);
    }
}
