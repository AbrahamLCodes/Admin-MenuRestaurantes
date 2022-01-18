import Categoria from "./categoria";

export default interface Producto {
    nombre: string;
    precio: number;
    categorias: Categoria[];
    oferta: boolean;
    preciof: number;
    imagen: string;
}