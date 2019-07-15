module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('company_has_users', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.UUID,
            },
            companies_id: {
                type: Sequelize.UUID,
                allowNull: false,
                references: { model: 'companies', key: 'id' },
                onDelete: 'cascade',
            },
            users_id: {
                type: Sequelize.UUID,
                allowNull: false,
                references: { model: 'users', key: 'id' },
                onDelete: 'cascade',
            },
            created_at: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updated_at: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },
    down: queryInterface => queryInterface.dropTable('company_has_users'),
};
