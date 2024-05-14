class Personagem {
    private nome: string;
    private HP: number;
    private MP: number;
    private forca: number;
    private desefa: number;
    private inventario: Inventario;
    private arma: Arma;

    getinventario(){
        return this.inventario
    }

    abrirInventario(){
        for(let i:number = 0; i < this.inventario.itensInventario.length; i++ ){
            console.log(i + "- " + this.inventario.itensInventario[i].item.nome + this.inventario.itensInventario[i].getquantidade())
        }
    }

    usarIntem(item){

    }
}