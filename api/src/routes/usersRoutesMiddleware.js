module.exports = app => {
    const { router, controllers } = app;
    router.get('/', controllers.UserMiddleware.index);
};
