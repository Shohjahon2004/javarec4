let products = receipt();
let delivery =  9000;
 let name = '';
 let price = 0;
   
 for (let  key in  products){
   price += products[key]['price']   
   name = name + key + ' '  + products[key]['info'] + ', '; 
}
console.log(`Вы заказали ${name} | Общая стоимость  ${delivery +price} сум с доставкой (${delivery}) `);