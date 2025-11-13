import { Ingredient } from "./ingredient.model";

export interface Pizza {
    id: number,
    nombre: string,
    ingredientes: Ingredient[],
    precio: number,
    imagen: string
}