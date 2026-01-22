

class OrderManager {

    private static instance: OrderManager

    static getInstance() {
        if (!OrderManager.instance) {
            OrderManager.instance = new OrderManager()
        }
        return OrderManager.instance
    }

    addOrder() {

    }
    listOrders() {

    }

}