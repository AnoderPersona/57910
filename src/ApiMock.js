// const products = 
// [
//   {
//     "id": "1",
//     "nombre": "Poke Ball",
//     "descripcion": "Una esfera para atrapar Pokémon.",
//     "precio": 200,
//     "imagen": "https://images.wikidexcdn.net/mwuploads/wikidex/6/6a/latest/20230115164405/Pok%C3%A9_Ball_EP.png",
//     "stock": 15,
//     "etiqueta": "captura",
//     "tiene_descuento": true,
//     "porcentaje_descuento": 10
//   },
//   {
//     "id": "2",
//     "nombre": "Poción",
//     "descripcion": "Restaura 20 puntos de salud de un Pokémon herido.",
//     "precio": 300,
//     "imagen": "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/f/fd/latest/20230115173615/Poci%C3%B3n_EP.png/80px-Poci%C3%B3n_EP.png",
//     "stock": 20,
//     "etiqueta": "curacion",
//     "tiene_descuento": false,
//     "porcentaje_descuento": 0
//   },
//   {
//     "id": "3",
//     "nombre": "Super Ball",
//     "descripcion": "Una esfera de mayor calidad para atrapar Pokémon.",
//     "precio": 600,
//     "imagen": "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/3/3f/latest/20230115164421/Super_Ball_EP.png/80px-Super_Ball_EP.png",
//     "stock": 10,
//     "etiqueta": "captura",
//     "tiene_descuento": true,
//     "porcentaje_descuento": 15
//   },
//   {
//     "id": "4",
//     "nombre": "Antídoto",
//     "descripcion": "Cura el envenenamiento de un Pokémon.",
//     "precio": 100,
//     "imagen": "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/8/80/latest/20230124231716/Ant%C3%ADdoto_EP.png/80px-Ant%C3%ADdoto_EP.png",
//     "stock": 25,
//     "etiqueta": "curacion",
//     "tiene_descuento": false,
//     "porcentaje_descuento": 0
//   },
//   {
//     "id": "5",
//     "nombre": "MT01 - Golpe Cabeza",
//     "descripcion": "Una MT que enseña a un Pokémon el ataque Golpe Cabeza.",
//     "precio": 1500,
//     "imagen": "https://images.wikidexcdn.net/mwuploads/wikidex/8/81/latest/20230115172628/MT_tipo_normal_EP.png",
//     "stock": 5,
//     "etiqueta": "ataque",
//     "tiene_descuento": true,
//     "porcentaje_descuento": 20
//   },
//   {
//     "id": "6",
//     "nombre": "Antiquemar",
//     "descripcion": "Recupera a un Pokémon de la quemadura.",
//     "precio": 250,
//     "imagen": "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/9/9b/latest/20230403235822/Antiquemar_EP.png/80px-Antiquemar_EP.png",
//     "stock": 12,
//     "etiqueta": "curacion",
//     "tiene_descuento": false,
//     "porcentaje_descuento": 0
//   },
//   {
//     "id": "7",
//     "nombre": "Hierba Revivir",
//     "descripcion": "Revive a un Pokémon desmayado con la mitad de sus PS.",
//     "precio": 700,
//     "imagen": "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/8/8a/latest/20231030190112/Hierba_revivir_EP.png/80px-Hierba_revivir_EP.png",
//     "stock": 8,
//     "etiqueta": "curacion",
//     "tiene_descuento": true,
//     "porcentaje_descuento": 10
//   },
//   {
//     "id": "8",
//     "nombre": "Galleta Lava",
//     "descripcion": "Restaura los PS de un Pokémon por completo.",
//     "precio": 1000,
//     "imagen": "https://images.wikidexcdn.net/mwuploads/wikidex/f/fd/latest/20110130122312/Galleta_lava_%28Dream_World%29.png",
//     "stock": 5,
//     "etiqueta": "curacion",
//     "tiene_descuento": true,
//     "porcentaje_descuento": 15
//   },
//   {
//     "id": "9",
//     "nombre": "MT05 - Rugido",
//     "descripcion": "Una MT que enseña a un Pokémon el ataque Rugido.",
//     "precio": 800,
//     "imagen": "https://images.wikidexcdn.net/mwuploads/wikidex/8/81/latest/20230115172628/MT_tipo_normal_EP.png",
//     "stock": 10,
//     "etiqueta": "ataque",
//     "tiene_descuento": false,
//     "porcentaje_descuento": 0
//   },
//   {
//     "id": "10",
//     "nombre": "Repelente",
//     "descripcion": "Mantiene a los Pokémon salvajes alejados durante 100 pasos.",
//     "precio": 350,
//     "imagen": "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/4/49/latest/20231030185416/Repelente_EP.png/80px-Repelente_EP.png",
//     "stock": 15,
//     "etiqueta": "captura",
//     "tiene_descuento": true,
//     "porcentaje_descuento": 10
//   },
//   {
//     "id": "11",
//     "nombre": "MT09 - Carga Tóxica",
//     "descripcion": "Una MT que enseña a un Pokémon el ataque Carga Tóxica.",
//     "precio": 1200,
//     "imagen": "https://images.wikidexcdn.net/mwuploads/wikidex/e/e7/latest/20230115172738/MT_tipo_veneno_EP.png",
//     "stock": 7,
//     "etiqueta": "ataque",
//     "tiene_descuento": false,
//     "porcentaje_descuento": 0
//   },
//   {
//     "id": "12",
//     "nombre": "Hiperpoción",
//     "descripcion": "Restaura completamente los PS de un Pokémon herido.",
//     "precio": 1500,
//     "imagen": "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/7/76/latest/20230115173900/Hiperpoci%C3%B3n_EP.png/80px-Hiperpoci%C3%B3n_EP.png",
//     "stock": 8,
//     "etiqueta": "curacion",
//     "tiene_descuento": true,
//     "porcentaje_descuento": 20
//   },
//   {
//     "id": "13",
//     "nombre": "MT15 - Hiperrayo",
//     "descripcion": "Una MT que enseña a un Pokémon el ataque Hiperrayo.",
//     "precio": 2000,
//     "imagen": "https://images.wikidexcdn.net/mwuploads/wikidex/8/81/latest/20230115172628/MT_tipo_normal_EP.png",
//     "stock": 5,
//     "etiqueta": "ataque",
//     "tiene_descuento": false,
//     "porcentaje_descuento": 0
//   },
//   {
//     "id": "14",
//     "nombre": "Pokemuñeco",
//     "descripcion": "Usado desde la bolsa en combate, el Pokemuñeco permite al jugador huir instantáneamente de cualquier combate Pokémon que se esté librando con un Pokémon salvaje, de forma garantizada e ignorando efectos que impidan la huida.",
//     "precio": 350,
//     "imagen": "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/7/74/latest/20230123181629/Pok%C3%A9mu%C3%B1eco_EP.png/80px-Pok%C3%A9mu%C3%B1eco_EP.png",
//     "stock": 20,
//     "etiqueta": "curacion",
//     "tiene_descuento": true,
//     "porcentaje_descuento": 15
//   },
//   {
//     "id": "15",
//     "nombre": "MT20 - Rayo Solar",
//     "descripcion": "Una MT que enseña a un Pokémon el ataque Rayo Solar.",
//     "precio": 1800,
//     "imagen": "https://images.wikidexcdn.net/mwuploads/wikidex/a/a4/latest/20230115171958/MT_tipo_planta_EP.png",
//     "stock": 6,
//     "etiqueta": "ataque",
//     "tiene_descuento": true,
//     "porcentaje_descuento": 10
//   },
//   {
//     "id": "16",
//     "nombre": "Escama Dragon",
//     "descripcion": "Una escama de dragon utilizada para evolucionar ciertos Pokémon.",
//     "precio": 5000,
//     "imagen": "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/7/7c/latest/20231218182549/Escama_drag%C3%B3n_EP.png/80px-Escama_drag%C3%B3n_EP.png",
//     "stock": 3,
//     "etiqueta": "evolucion",
//     "tiene_descuento": false,
//     "porcentaje_descuento": 0
//   },
//   {
//     "id": "17",
//     "nombre": "Caramelo Raro",
//     "descripcion": "Un dulce muy raro que aumenta permanentemente un atributo de un Pokémon.",
//     "precio": 2500,
//     "imagen": "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/2/29/latest/20230102194541/Caramelo_raro_EP.png/80px-Caramelo_raro_EP.png",
//     "stock": 4,
//     "etiqueta": "evolucion",
//     "tiene_descuento": false,
//     "porcentaje_descuento": 0
//   },
//   {
//     "id": "18",
//     "nombre": "MT25 - Trueno",
//     "descripcion": "Una MT que enseña a un Pokémon el ataque Trueno.",
//     "precio": 1600,
//     "imagen": "https://images.wikidexcdn.net/mwuploads/wikidex/0/0f/latest/20230115172106/MT_tipo_el%C3%A9ctrico_EP.png",
//     "stock": 9,
//     "etiqueta": "ataque",
//     "tiene_descuento": true,
//     "porcentaje_descuento": 15
//   },
//   {
//     "id": "19",
//     "nombre": "MT30 - Terremoto",
//     "descripcion": "Una MT que enseña a un Pokémon el ataque Terremoto.",
//     "precio": 2000,
//     "imagen": "https://images.wikidexcdn.net/mwuploads/wikidex/4/4a/latest/20230115172719/MT_tipo_tierra_EP.png",
//     "stock": 5,
//     "etiqueta": "ataque",
//     "tiene_descuento": false,
//     "porcentaje_descuento": 0
//   },
//   {
//     "id": "20",
//     "nombre": "MT35 - Lanzallamas",
//     "descripcion": "Una MT que enseña a un Pokémon el ataque Lanzallamas.",
//     "precio": 1800,
//     "imagen": "https://images.wikidexcdn.net/mwuploads/wikidex/6/63/latest/20230115172030/MT_tipo_fuego_EP.png",
//     "stock": 7,
//     "etiqueta": "ataque",
//     "tiene_descuento": true,
//     "porcentaje_descuento": 10
//   },
//   {
//     "id": "21",
//     "nombre": "Revivir",
//     "descripcion": "Revive a un Pokémon desmayado con la mitad de sus PS.",
//     "precio": 500,
//     "imagen": "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/6/6e/latest/20230123181418/Revivir_EP.png/80px-Revivir_EP.png",
//     "stock": 12,
//     "etiqueta": "curacion",
//     "tiene_descuento": false,
//     "porcentaje_descuento": 0
//   },
//   {
//     "id": "22",
//     "nombre": "MT40 - Psíquico",
//     "descripcion": "Una MT que enseña a un Pokémon el ataque Psíquico.",
//     "precio": 2000,
//     "imagen": "https://images.wikidexcdn.net/mwuploads/wikidex/c/c9/latest/20230115172234/MT_tipo_ps%C3%ADquico_EP.png",
//     "stock": 5,
//     "etiqueta": "ataque",
//     "tiene_descuento": true,
//     "porcentaje_descuento": 15
//   },
//   {
//     "id": "23",
//     "nombre": "Superveloz",
//     "descripcion": "Aumenta la velocidad de un Pokémon durante una batalla.",
//     "precio": 600,
//     "imagen": "https://images.wikidexcdn.net/mwuploads/wikidex/d/d2/latest/20110130120416/Ataque_X_%28Dream_World%29.png",
//     "stock": 20,
//     "etiqueta": "entrenamiento",
//     "tiene_descuento": true,
//     "porcentaje_descuento": 10
//   },
//   {
//     "id": "24",
//     "nombre": "MT45 - Ataque Aéreo",
//     "descripcion": "Una MT que enseña a un Pokémon el ataque Ataque Aéreo.",
//     "precio": 1800,
//     "imagen": "https://images.wikidexcdn.net/mwuploads/wikidex/7/76/latest/20230115172752/MT_tipo_volador_EP.png",
//     "stock": 6,
//     "etiqueta": "ataque",
//     "tiene_descuento": false,
//     "porcentaje_descuento": 0
//   },
//   {
//     "id": "25",
//     "nombre": "MT50 - Sofoco",
//     "descripcion": "Una MT que enseña a un Pokémon el ataque Sofoco.",
//     "precio": 1600,
//     "imagen": "https://images.wikidexcdn.net/mwuploads/wikidex/6/63/latest/20230115172030/MT_tipo_fuego_EP.png",
//     "stock": 8,
//     "etiqueta": "ataque",
//     "tiene_descuento": true,
//     "porcentaje_descuento": 10
//   }
// ]



