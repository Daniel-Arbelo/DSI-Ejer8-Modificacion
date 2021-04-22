import lowdb from "lowdb";
import FileSync from 'lowdb/adapters/FileSync';
import {Articulo} from './Articulo';

type schemaType = {
    ventas: {
        empleado: string;
        producto: string;
        precio: number;
        comision: number;
    }[];
};

export class Comprajson {

    private database: lowdb.LowdbSync<schemaType>;
    ArticulosMap = new Map<string, Articulo>();

    constructor(public ventas:Articulo[] = []){
        this.database = lowdb(new FileSync("ventas.json"));
        if(this.database.has('ventas').value()) {
            let dbItems = this.database.get('ventas').value();
            dbItems.forEach(item =>{
                this.ArticulosMap.set(item.producto, new Articulo(item.empleado, item.producto, item.precio, item.comision));
            });
        }
        else{
            this.database.set('ventas', ventas).write();
        }

    }

    storeNota() {
        this.database.set('ventas', [...this.ArticulosMap.values()]).write(); 
    }

    nuevoArticulo(articulo: Articulo) {
        this.ArticulosMap.set(articulo.producto, articulo);
        this.storeNota();
    }

}