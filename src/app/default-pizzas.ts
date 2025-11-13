import { Pizza } from "./models/pizza.model";
import { DEFAULT_INGREDIENTS } from "./default-ingredients";

export const DEFAULT_PIZZAS: Pizza[] = [
    {
        id: 0,
        nombre: 'Pizza Vegetal',
        ingredientes: [
            DEFAULT_INGREDIENTS[0], // Tomate
            DEFAULT_INGREDIENTS[3], // Cebolla
            DEFAULT_INGREDIENTS[6], // Pimiento
            DEFAULT_INGREDIENTS[8]  // Setas
        ],
        precio: 10.50,
        imagen: '@assets/menu/pizza-vegetal.png'
    },
    {
        id: 1,
        nombre: 'Pizza Barbacoa',
        ingredientes: [
            DEFAULT_INGREDIENTS[0], // Tomate
            DEFAULT_INGREDIENTS[1], // Queso
            DEFAULT_INGREDIENTS[4], // Cerdo
            DEFAULT_INGREDIENTS[3]  // Cebolla
        ],
        precio: 12.00,
        imagen: '@assets/menu/pizza-barbacoa.png'
    },
    {
        id: 2,
        nombre: 'Pizza Jamón York y Queso',
        ingredientes: [
            DEFAULT_INGREDIENTS[0], // Tomate
            DEFAULT_INGREDIENTS[1], // Queso
            DEFAULT_INGREDIENTS[4], // Cerdo
        ],
        precio: 9.50,
        imagen: '@assets/menu/pizza-jamon_york.png'
    },
    {
        id: 3,
        nombre: 'Pizza Margarita',
        ingredientes: [
            DEFAULT_INGREDIENTS[0], // Tomate
            DEFAULT_INGREDIENTS[1]  // Queso
        ],
        precio: 8.00,
        imagen: '@assets/menu/pizza-margarita.png'
    },
    {
        id: 4,
        nombre: 'Pizza de Pollo',
        ingredientes: [
            DEFAULT_INGREDIENTS[0], // Tomate
            DEFAULT_INGREDIENTS[1], // Queso
            DEFAULT_INGREDIENTS[7], // Pollo
        ],
        precio: 11.00,
        imagen: '@assets/menu/pizza-pollo.png'
    },
    {
        id: 5,
        nombre: 'Calzone de Chistorra',
        ingredientes: [
            DEFAULT_INGREDIENTS[0], // Tomate
            DEFAULT_INGREDIENTS[5], // Chistorra
        ],
        precio: 9.50,
        imagen: '@assets/menu/calzone.png'
    }
]