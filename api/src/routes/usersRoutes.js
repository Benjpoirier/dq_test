module.exports = app => {
    const { router, controllers } = app;

    router.get('/', controllers.User.index);
    router.post('/', controllers.User.create);
    router.get('/:userId', controllers.User.show);
    router.put('/:userId', controllers.User.update);
    router.del('/:userId', controllers.User.delete);
};
