class ItemInventario {
    private quantidade: number;
    private item: Item;

    // criando o construtor
    constructor(q:number){
        this.quantidade = q
    }

    public getquantidade(){
        return this.quantidade;
    }
    public getitem(){
        return this.item
    }

}