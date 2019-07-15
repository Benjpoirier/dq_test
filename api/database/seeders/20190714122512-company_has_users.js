module.exports = {
    up: queryInterface =>
        queryInterface.bulkInsert(
            'company_has_users',
            [
                {
                    id: '721d58f4-c837-5bed-8096-ea14bf9da18c',
                    users_id: '62f34edc-e047-5a4f-b1d5-f97e353de565',
                    companies_id: '892fd48f-4895-57c1-8f30-20184ce16df0',
                    created_at: '2018-05-15T07:49:36.954Z',
                    updated_at: '2018-05-16T08:51:02.924Z',
                },
                {
                    id: 'd6e08946-0f88-56b9-8e78-5e7542922b10',
                    users_id: '0ba724e1-e772-51c7-bdd7-7419cccbe92e',
                    companies_id: '892fd48f-4895-57c1-8f30-20184ce16df0',
                    created_at: '2018-05-15T07:49:36.954Z',
                    updated_at: '2018-05-16T08:51:02.924Z',
                },
                {
                    id: '1cd4588e-c081-56bf-925a-efc203a06607',
                    users_id: '54fbc930-ace5-54e5-9361-b45a24778a42',
                    companies_id: '6aefaf33-2cac-54d7-a903-4cf4928dbef2',
                    created_at: '2018-05-15T07:49:36.954Z',
                    updated_at: '2018-05-16T08:51:02.924Z',
                },
                {
                    id: '3dff1f47-3ac5-5e42-a473-148a5260f907',
                    users_id: '77df972b-0e4e-5843-85c7-2908ceb22a43',
                    companies_id: '6aefaf33-2cac-54d7-a903-4cf4928dbef2',
                    created_at: '2018-05-15T07:49:36.954Z',
                    updated_at: '2018-05-16T08:51:02.924Z',
                },
            ],
            {},
        ),
    down: queryInterface => queryInterface.bulkDelete('company_has_users', null, {}),
};
