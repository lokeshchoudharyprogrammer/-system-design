

class RestaurantManager {

    private static instance: RestaurantManager;

    static getInstance() {
        if (!RestaurantManager.instance) {
            RestaurantManager.instance = new RestaurantManager()
        }
        return RestaurantManager.instance
    }

    addRestaurant() {

    }

    searchByLocation() {
        return []
    }
}