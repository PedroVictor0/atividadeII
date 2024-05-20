import { Item } from "./Item";

export class ItemInventario {
    private quantidade: number;
    private item: Item;

    // criando o construtor
    constructor(q:number){
        this.quantidade = q
    }

    // get e set
    public getquantidade(){
        return this.quantidade;
    }
    public getItem(){
        return this.item
    }

    setQuantidade(quantidade){
        this.quantidade = quantidade
    }

}