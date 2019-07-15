module.exports = {
    up: queryInterface =>
        queryInterface.bulkInsert(
            'users',
            [
                {
                    id: '62f34edc-e047-5a4f-b1d5-f97e353de565',
                    name: 'Jimmy',
                    email: 'fu@batuun.yt',
                    created_at: '2018-05-15T07:49:36.954Z',
                    updated_at: '2018-05-16T08:51:02.924Z',
                },
                {
                    id: '0ba724e1-e772-51c7-bdd7-7419cccbe92e',
                    name: 'Lora',
                    email: 'nawumhos@uge.mx',
                    created_at: '2018-05-15T07:49:36.954Z',
                    updated_at: '2018-05-16T08:51:02.924Z',
                },
                {
                    id: '54fbc930-ace5-54e5-9361-b45a24778a42',
                    name: 'Lydia',
                    email: 'ji@ji.fk',
                    created_at: '2018-05-15T07:49:36.954Z',
                    updated_at: '2018-05-16T08:51:02.924Z',
                },
                {
                    id: '77df972b-0e4e-5843-85c7-2908ceb22a43',
                    name: 'Victoria',
                    email: 'kefcako@ocamum.tr',
                    created_at: '2018-05-15T07:49:36.954Z',
                    updated_at: '2018-05-16T08:51:02.924Z',
                },
            ],
            {},
        ),
    down: queryInterface => queryInterface.bulkDelete('users', null, {}),
};
