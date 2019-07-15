module.exports = app => {
    const { router, routes, controllers } = app;

    router.get('/', controllers.App.index);
    router.use(routes.users('/users'));
    router.use(routes.companies('/companies'));
};
