const products = [
    { name: 'Радар', price: 1300, quantity: 4 },
    { name: 'Сканер', price: 2700, quantity: 3 },
    { name: 'Дроид', price: 400, quantity: 7 },
    { name: 'Захват', price: 1200, quantity: 2 },
  ];
  
  const getAllPropValues = function(arr, prop) {

    const properties = [];

    for(const product of arr){
  
    properties.push(product[prop]);

    if(product[prop] === undefined){
        return [];
      }

      // ЭТО НЕ ЧИТЕРСТВО, ТО ЧТО СВЕРХУ? ПОТОМУ ЧТО ДО ЭТОГО БЫЛО КАК ВНИЗУ.

      // if(prop !== product[prop]){
      // return [];  
      // }

      //НЕ ПОНИМАЮ КАК ЕЩЕ ПО ДРУГОМУ ВЕРНУТЬ ПУСТОЙ МАССИВ
       // есть подозрение что это не пустой массив через ретерн а сам по себе пустой массив
       //но в таком случае я в тупике(((

    }

    return properties;
   
  };
  

  console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']
  
  console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]
  
  console.log(getAllPropValues(products, 'category')); // []


//   Напиши функцию getAllPropValues(arr, prop), которая получает массив объектов и имя свойства. 
//   Возвращает массив значений определенного свойства prop из каждого объекта в массиве.