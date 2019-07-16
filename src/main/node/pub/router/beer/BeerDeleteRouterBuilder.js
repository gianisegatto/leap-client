const promiseHandler = require("leap-web").promiseHandler;

class BeerDeleteRouterBuilder {
    
    constructor(router, beerDeleteService) {
        this.router = router;
        this.beerDeleteService = beerDeleteService;
    }

    build() {
        this.router.delete("/beers/:id", (req, res, next) => {
            promiseHandler.handle(this.beerDeleteService.delete(req.params.id), res, next);
        })
        return this.router;
    }
}

module.exports = BeerDeleteRouterBuilder;