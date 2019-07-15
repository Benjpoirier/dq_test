module.exports = app => {
    const { router, routes, controllers } = app;

    router.get('/', controllers.Company.index);
    router.post('/', controllers.Company.create);
    router.get('/:companyId', controllers.Company.show);
    router.put('/:companyId', controllers.Company.update);
    router.del('/:companyId', controllers.Company.delete);
    router.use(routes.usersMiddleware('/:companyId/users'));
};
