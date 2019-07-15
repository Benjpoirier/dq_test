module.exports = {
    up: queryInterface =>
        queryInterface.bulkInsert(
            'companies',
            [
                {
                    id: '892fd48f-4895-57c1-8f30-20184ce16df0',
                    name: 'Company A',
                    created_at: '2018-05-15T07:49:36.954Z',
                    updated_at: '2018-05-16T08:51:02.924Z',
                },
                {
                    id: '6aefaf33-2cac-54d7-a903-4cf4928dbef2',
                    name: 'Company B',
                    created_at: '2018-05-15T07:49:36.954Z',
                    updated_at: '2018-05-16T08:51:02.924Z',
                },
            ],
            {},
        ),
    down: queryInterface => queryInterface.bulkDelete('companies', null, {}),
};
