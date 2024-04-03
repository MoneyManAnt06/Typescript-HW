// Descripción:
// Desarrolla una clase genérica OrderManager<T> para gestionar órdenes de productos en un sistema de comercio electrónico. 
// La clase debe permitir agregar órdenes, obtener detalles de una orden específica y calcular el total de ventas.
// Tareas:

// Implementa la clase OrderManager<T> con métodos para agregar órdenes, obtener detalles de una orden y calcular el total de ventas.
// Crea instancias de OrderManager<T> para manejar diferentes tipos de órdenes (por ejemplo, órdenes de productos físicos, órdenes digitales).

interface BaseOrder {
    total: number
};


class OrderManager<T extends BaseOrder> {
    values: T[] = [];

    addOrder(value: T) {
        this.values.push(value)
    }

    orderDetails(index: number) {
        return this.values[index]
    }

    totalSales() {
        let sum = 0
        this.values.forEach((item) => {
            sum += item.total
        })
        return sum
    }
}

interface SuperMarketOrder {
    id: number;
    superMarketName: string;
    date: Date;
    total: number;
}


const orderManager = new OrderManager<SuperMarketOrder>();

orderManager.addOrder(
    {
        date: new Date(Date.now()), 
        id: 1, 
        superMarketName:"Trapitos Store", 
        total: 200
    }
)

orderManager.addOrder(
    {
        date: new Date(Date.now()), 
        id: 2, 
        superMarketName:"Trapitos Store", 
        total: 100
    }
)
orderManager.addOrder(
    {
        date: new Date(Date.now()), 
        id: 3, 
        superMarketName:"Trapitos Store", 
        total: 300
    }
)

console.log(orderManager.orderDetails(2))
console.log("The total amount is:",orderManager.totalSales())