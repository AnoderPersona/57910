const products = 
[
    {
      "id": 1,
      "nombre": "Poke Ball",
      "descripcion": "Una esfera para atrapar Pokémon.",
      "precio": 200,
      "imagen": "pokeball.png",
      "stock": 15,
      "etiqueta": "captura",
      "tiene_descuento": true,
      "porcentaje_descuento": 10
    },
    {
      "id": 2,
      "nombre": "Poción",
      "descripcion": "Restaura 20 puntos de salud de un Pokémon herido.",
      "precio": 300,
      "imagen": "potion.png",
      "stock": 20,
      "etiqueta": "curación",
      "tiene_descuento": false,
      "porcentaje_descuento": 0
    },
    {
      "id": 3,
      "nombre": "Super Ball",
      "descripcion": "Una esfera de mayor calidad para atrapar Pokémon.",
      "precio": 600,
      "imagen": "superball.png",
      "stock": 10,
      "etiqueta": "captura",
      "tiene_descuento": true,
      "porcentaje_descuento": 15
    },
    {
      "id": 4,
      "nombre": "Antídoto",
      "descripcion": "Cura el envenenamiento de un Pokémon.",
      "precio": 100,
      "imagen": "antidote.png",
      "stock": 25,
      "etiqueta": "curación",
      "tiene_descuento": false,
      "porcentaje_descuento": 0
    },
    {
      "id": 5,
      "nombre": "MT01 - Golpe Cabeza",
      "descripcion": "Una MT que enseña a un Pokémon el ataque Golpe Cabeza.",
      "precio": 1500,
      "imagen": "mt01.png",
      "stock": 5,
      "etiqueta": "ataque",
      "tiene_descuento": true,
      "porcentaje_descuento": 20
    },
    {
      "id": 6,
      "nombre": "Antiquemar",
      "descripcion": "Recupera a un Pokémon de la quemadura.",
      "precio": 250,
      "imagen": "antiquemar.png",
      "stock": 12,
      "etiqueta": "curación",
      "tiene_descuento": false,
      "porcentaje_descuento": 0
    },
    {
      "id": 7,
      "nombre": "Hierba Revivir",
      "descripcion": "Revive a un Pokémon desmayado con la mitad de sus PS.",
      "precio": 700,
      "imagen": "hierba_revivir.png",
      "stock": 8,
      "etiqueta": "curación",
      "tiene_descuento": true,
      "porcentaje_descuento": 10
    },
    {
      "id": 8,
      "nombre": "Galleta Lava",
      "descripcion": "Restaura los PS de un Pokémon por completo.",
      "precio": 1000,
      "imagen": "galleta_lava.png",
      "stock": 5,
      "etiqueta": "curación",
      "tiene_descuento": true,
      "porcentaje_descuento": 15
    },
    {
      "id": 9,
      "nombre": "MT05 - Rugido",
      "descripcion": "Una MT que enseña a un Pokémon el ataque Rugido.",
      "precio": 800,
      "imagen": "mt05.png",
      "stock": 10,
      "etiqueta": "ataque",
      "tiene_descuento": false,
      "porcentaje_descuento": 0
    },
    {
      "id": 10,
      "nombre": "Repelente",
      "descripcion": "Mantiene a los Pokémon salvajes alejados durante 100 pasos.",
      "precio": 350,
      "imagen": "repelente.png",
      "stock": 15,
      "etiqueta": "captura",
      "tiene_descuento": true,
      "porcentaje_descuento": 10
    },
    {
      "id": 11,
      "nombre": "MT09 - Carga Tóxica",
      "descripcion": "Una MT que enseña a un Pokémon el ataque Carga Tóxica.",
      "precio": 1200,
      "imagen": "mt09.png",
      "stock": 7,
      "etiqueta": "ataque",
      "tiene_descuento": false,
      "porcentaje_descuento": 0
    },
    {
      "id": 12,
      "nombre": "Hiperpoción",
      "descripcion": "Restaura completamente los PS de un Pokémon herido.",
      "precio": 1500,
      "imagen": "hiperpocion.png",
      "stock": 8,
      "etiqueta": "curación",
      "tiene_descuento": true,
      "porcentaje_descuento": 20
    },
    {
      "id": 13,
      "nombre": "MT15 - Hiperrayo",
      "descripcion": "Una MT que enseña a un Pokémon el ataque Hiperrayo.",
      "precio": 2000,
      "imagen": "mt15.png",
      "stock": 5,
      "etiqueta": "ataque",
      "tiene_descuento": false,
      "porcentaje_descuento": 0
    },
    {
      "id": 14,
      "nombre": "Bayas",
      "descripcion": "Un pack de bayas para alimentar a tus Pokémon.",
      "precio": 350,
      "imagen": "bayas.png",
      "stock": 20,
      "etiqueta": "curación",
      "tiene_descuento": true,
      "porcentaje_descuento": 15
    },
    {
      "id": 15,
      "nombre": "MT20 - Rayo Solar",
      "descripcion": "Una MT que enseña a un Pokémon el ataque Rayo Solar.",
      "precio": 1800,
      "imagen": "mt20.png",
      "stock": 6,
      "etiqueta": "ataque",
      "tiene_descuento": true,
      "porcentaje_descuento": 10
    },
    {
      "id": 16,
      "nombre": "Escama Dragón",
      "descripcion": "Una escama de dragón utilizada para evolucionar ciertos Pokémon.",
      "precio": 5000,
      "imagen": "escama_dragon.png",
      "stock": 3,
      "etiqueta": "evolución",
      "tiene_descuento": false,
      "porcentaje_descuento": 0
    },
    {
      "id": 17,
      "nombre": "Caramelo Raro",
      "descripcion": "Un dulce muy raro que aumenta permanentemente un atributo de un Pokémon.",
      "precio": 2500,
      "imagen": "caramelo_raro.png",
      "stock": 4,
      "etiqueta": "evolución",
      "tiene_descuento": false,
      "porcentaje_descuento": 0
    },
    {
      "id": 18,
      "nombre": "MT25 - Trueno",
      "descripcion": "Una MT que enseña a un Pokémon el ataque Trueno.",
      "precio": 1600,
      "imagen": "mt25.png",
      "stock": 9,
      "etiqueta": "ataque",
      "tiene_descuento": true,
      "porcentaje_descuento": 15
    },
    {
      "id": 19,
      "nombre": "MT30 - Terremoto",
      "descripcion": "Una MT que enseña a un Pokémon el ataque Terremoto.",
      "precio": 2000,
      "imagen": "mt30.png",
      "stock": 5,
      "etiqueta": "ataque",
      "tiene_descuento": false,
      "porcentaje_descuento": 0
    },
    {
      "id": 20,
      "nombre": "MT35 - Lanzallamas",
      "descripcion": "Una MT que enseña a un Pokémon el ataque Lanzallamas.",
      "precio": 1800,
      "imagen": "mt35.png",
      "stock": 7,
      "etiqueta": "ataque",
      "tiene_descuento": true,
      "porcentaje_descuento": 10
    },
    {
      "id": 21,
      "nombre": "Revivir",
      "descripcion": "Revive a un Pokémon desmayado con la mitad de sus PS.",
      "precio": 500,
      "imagen": "revivir.png",
      "stock": 12,
      "etiqueta": "curación",
      "tiene_descuento": false,
      "porcentaje_descuento": 0
    },
    {
      "id": 22,
      "nombre": "MT40 - Psíquico",
      "descripcion": "Una MT que enseña a un Pokémon el ataque Psíquico.",
      "precio": 2000,
      "imagen": "mt40.png",
      "stock": 5,
      "etiqueta": "ataque",
      "tiene_descuento": true,
      "porcentaje_descuento": 15
    },
    {
      "id": 23,
      "nombre": "Superveloz",
      "descripcion": "Aumenta la velocidad de un Pokémon durante una batalla.",
      "precio": 600,
      "imagen": "superveloz.png",
      "stock": 20,
      "etiqueta": "entrenamiento",
      "tiene_descuento": true,
      "porcentaje_descuento": 10
    },
    {
      "id": 24,
      "nombre": "MT45 - Ataque Aéreo",
      "descripcion": "Una MT que enseña a un Pokémon el ataque Ataque Aéreo.",
      "precio": 1800,
      "imagen": "mt45.png",
      "stock": 6,
      "etiqueta": "ataque",
      "tiene_descuento": false,
      "porcentaje_descuento": 0
    },
    {
      "id": 25,
      "nombre": "MT50 - Sofoco",
      "descripcion": "Una MT que enseña a un Pokémon el ataque Sofoco.",
      "precio": 1600,
      "imagen": "mt50.png",
      "stock": 8,
      "etiqueta": "ataque",
      "tiene_descuento": true,
      "porcentaje_descuento": 10
    }
  ]
  

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}
