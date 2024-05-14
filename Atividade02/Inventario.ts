class InventarioLimiteException extends Error {
    nome = InventarioLimiteException
}

class Inventario {
    private itensInventario: ItemInventario[];
    private quantidadeMaxItens: number;
   
    getitensInventario(){
        return this.itensInventario
    }
    getquantidadeMaxItens(){
        return this.quantidadeMaxItens
    }











































    private adicionarItem(item:ItemInventario){
        if (this.itensInventario.length >= this.quantidadeMaxItens) {
            throw new InventarioLimiteException('O inventário está cheio.');
        }
        if (this.itensInventario.includes(item)){
            this.quantidadeMaxItens++
        } else {
            this.itensInventario.push(item)
        }
    }
}